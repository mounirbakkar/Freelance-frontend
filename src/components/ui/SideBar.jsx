import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../utils/useLogout";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export default function SideBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const logOut = useLogout();
  const location = useLocation();
  const pages = [
    {
      name: "Categories",
      path: "managecategories",
      icon: <CategoryOutlinedIcon />,
    },
    { name: "Users", path: "mangeusers", icon: <GroupOutlinedIcon /> },
    {
      name: "Account",
      path: "mangeaccount",
      icon: <AccountCircleOutlinedIcon />,
    },
    { name: "Settings", path: "settings", icon: <SettingsOutlinedIcon /> },
  ];
  return (
    <>
      {/* Top Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 2 }}>
            Dachboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, p: 1 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {pages.map((item) => {
              return (
                <ListItem
                
                  onClick={() => navigate(item.path)}
                  button
                  sx={{
                    bgcolor:
                      location.pathname === `/admin/${item.path}`
                        ? "background.default"
                        : "transparent",
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              );
            })}

            {/* log out button */}
            <ListItem button onClick={logOut}>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
