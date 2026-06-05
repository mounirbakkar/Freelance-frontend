import { Box, Button, IconButton, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useMe } from "../../features/auth/hooks/useMe";
export default function NavBar() {
  const { data, isLoading, isError } = useMe();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLoggedIn = !!data && !isError;
  const activeStyle = (path) => ({
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: location.pathname === path ? "#fff" : "text.primary",
    bgcolor: location.pathname === path ? "primary.main" : "transparent",
    borderRadius: "50%",
  });
  const pageName = location.pathname.split("/").filter(Boolean).pop();
  const back = () => {
    if (window.history.length > 1) {
      navigate("/");
    } else {
      navigate("/");
    }
  };
  return (
    <Box
      className="flexHorizntel"
      sx={{
        p: 2,
        boxShadow: "0px 1px 10px rgba(0,0,0,0.05)",
        bgcolor: "background.paper",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 2000,

        justifyContent: {
          xs: isHome ? "space-between" : "flex-end",
          md: "space-between",
        },
        flexDirection: {
          xs: isHome ? "row" : "row-reverse",
          md: "row",
        },
      }}
    >
      <Box
        className="flexHorizntel"
        sx={{ gap: 2, display: isHome ? "flex" : "none", alignItems: "center" }}
      >
        <Typography>LOGO</Typography>
        <Typography variant="button" sx={{ fontSize: { xs: 16, md: 22 } }}>
          Lebanon Freelancers
        </Typography>
      </Box>
      <Box className="flexHorizntel" sx={{ display: isHome ? "none" : "flex" }}>
        <IconButton
          onClick={() => {
            back();
          }}
          sx={{
            display: isHome ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            p: 0,
            pr: "8px",
            height: 36,
            width: 36,
          }}
        >
          <ArrowBackIosNewOutlinedIcon
            sx={{ color: "text.primary", fontSize: 22 }}
          />
        </IconButton>
        <Typography
          variant="button"
          sx={{ fontSize: { xs: 16, md: 22 }, textTransform: "capitalize" }}
        >
          home
        </Typography>
      </Box>
      <Box className="flexHorizntel" sx={{ gap: 2, alignItems: "center" }}>
        <Box
          className="flexHorizntel"
          sx={{
            gap: 2,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <IconButton>
            <SearchOutlinedIcon sx={{ color: "text.primary", fontSize: 22 }} />
          </IconButton>
          {isLoggedIn && (
            <IconButton
              variant="primary"
              onClick={() => {
                navigate("/account");
              }}
            >
              <AccountCircleOutlinedIcon
                sx={{ color: "text.primary", fontSize: 22 }}
              />
            </IconButton>
          )}
          {!isLoggedIn && (
            <>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                login in
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Box
        className="flexHorizntel"
        sx={{
          gap: 2,
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "background.paper",
          px: 2,
          py: 1,
          zIndex: 2001,
          justifyContent: "space-around",
          boxShadow: "0px -1px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Box
          onClick={() => {
            navigate("/");
          }}
          sx={activeStyle("/")}
        >
          <HomeOutlinedIcon sx={{ fontSize: 32 }} />
        </Box>
        <Box
          onClick={() => {
            navigate("/search");
          }}
          sx={activeStyle("/search")}
        >
          <SearchOutlinedIcon sx={{ fontSize: 32 }} />
        </Box>
        <Box
          onClick={() => {
            navigate("/account");
          }}
          sx={activeStyle("/account")}
        >
          <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} />
        </Box>
      </Box>
    </Box>
  );
}
