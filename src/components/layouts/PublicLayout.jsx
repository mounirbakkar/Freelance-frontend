import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import { Box } from "@mui/material";

export default function PublicLayout() {
    return (
        <Box sx={{ pt: "80px", pb: { xs: "70px", md: 0 } }}>
            <NavBar />
            <Outlet />
        </Box>
    );
}
