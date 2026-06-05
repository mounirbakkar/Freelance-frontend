import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function HomeHeader() {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        // mt: 12,
        height: "60vh",
        width: "100%",
        mx: "auto",
        px: { xs: 2, md: 30 },
        py: 20,
        textAlign: "center",
        display:"flex",
        flexDirection:"column",
        gap:2

      }}
    >
      <Typography variant="h1">Lebanon's experiences</Typography>
      <TextField fullWidth placeholder="Search for a service"/>
      <Button variant="primary" onClick={()=>navigate("/search")}>serach</Button>
    </Box>
  );
}
