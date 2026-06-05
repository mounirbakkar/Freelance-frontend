import { Box, Button } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";
export default function Inlogin() {
  const navigate = useNavigate();

  return (
    <Box className="flexVertical" sx={{ gap: 2, p: 2 }}>
      <Button
        variant="primary"
        startIcon={<PersonAddOutlinedIcon />}
        onClick={() => navigate("/login")}
      >
        login
      </Button>
      <Button
        variant="secondary"
        startIcon={<LoginOutlinedIcon />}
        onClick={() => navigate("/register")}
      >
        register
      </Button>
    </Box>
  );
}
