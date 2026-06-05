import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useState } from "react";
import ShowMessage from "../../../components/ui/showMessage";

export default function FormRegister() {
  const [open, setOpen] = useState(false);
  const { mutate, isPending, error } = useRegister({
    onError: () => {
      setOpen(true);
    },
  });
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <Box
      className="flexVertical"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { xs: "90%", md: "50%" },
        m: "auto",
        mt: 5,
        bgcolor: "background.paper",
        p: { xs: 2, md: 5 },
        borderRadius: 1,
        gap: 2,
      }}
    >
      <Typography variant="h1" sx={{ ml: 2 }}>
        Register
      </Typography>
      <Button
        startIcon={<AccountCircleOutlinedIcon />}
        variant="primary"
        sx={{ background: "#DD4B39" }}
      >
        by Google
      </Button>
      <Divider sx={{ my: 1 }}>OR</Divider>
      <Box className="flexHorizntel" sx={{ gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" sx={{ ml: 1 }}>
            Name
          </Typography>
          <TextField
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ ml: 1 }}>
          Email
        </Typography>
        <TextField
          fullWidth
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ ml: 1 }}>
          Password
        </Typography>
        <TextField
          type="password"
          fullWidth
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </Box>
      <Button variant="primary" type="submit" disabled={isPending}>
        {isPending ? "login..." : "Login"}
      </Button>
      <Box sx={{ textAlign: "right" }}>
        <Button onClick={() => navigate("/login")}>have account?</Button>
      </Box>
      <ShowMessage
        open={open}
        setOpen={setOpen}
        message={error?.response?.data?.message || "Something went wrong"}
      />
    </Box>
  );
}
