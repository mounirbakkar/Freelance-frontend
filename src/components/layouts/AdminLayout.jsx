import { Outlet } from "react-router-dom";
import SideBar from "../ui/SideBar";
import { Box } from "@mui/material";

export default function AdminLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <Box sx={{ p: 2, overflow: "auto", mt: "64px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
