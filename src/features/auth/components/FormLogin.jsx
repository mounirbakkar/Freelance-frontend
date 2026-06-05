import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLogin } from "../hooks/useLogin.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowMessage from "../../../components/ui/showMessage.jsx";
export default function FormLogin() {
  const [open, setOpen] = useState(false);
  const { mutate, isPending, error } = useLogin({
    onError: () => {
      setOpen(true);
    },
  });
  const naviagte = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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
        Login
      </Typography>
      <Button
        startIcon={<AccountCircleOutlinedIcon />}
        variant="primary"
        sx={{ background: "#DD4B39" }}
      >
        by Google
      </Button>
      <Divider sx={{ my: 1 }}>OR</Divider>
      <Box>
        <Typography variant="caption" sx={{ ml: 1 }}>
          Email
        </Typography>
        <TextField
          value={form.email}
          fullWidth
          required
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ ml: 1 }}>
          Password
        </Typography>
        <TextField
          value={form.password}
          fullWidth
          required
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
      </Box>
      <Button type="submit" disabled={isPending} variant="primary">
        {isPending ? "Loading..." : "Login"}
      </Button>
      <Box sx={{ textAlign: "right" }}>
        <Button onClick={() => naviagte("/register")}>not have account?</Button>
      </Box>
      <ShowMessage
        open={open}
        setOpen={setOpen}
        message={error?.response?.data?.message || "Something went wrong"}
      />
    </Box>
  );
}
