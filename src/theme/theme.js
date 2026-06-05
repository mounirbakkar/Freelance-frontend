import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#28837B", // button + main accent
    },

    background: {
      default: "#F2FDFB", // main page background
      paper: "#FFFFFF",   // cards / navbar
    },

    text: {
      primary: "#1E1E1E",
      secondary: "#6B6B6B",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    h1: {
        fontSize:"26px",
        fontWeight: 600,
    },
    h2: {
        fontSize:"22px",
        fontWeight: 400,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1E1E1E",
          boxShadow: "0px 1px 10px rgba(0,0,0,0.05)",
        },
      },
    },
 MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 40, // حط الارتفاع اللي بدك ياه
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },

      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#27837C",
            color: "#fff",
            padding: "8px 18px",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "transparent",
            color: "#27837C",
            padding: "8px 18px",
            border:"1px solid #27837C"
          },
        },
      ],
    },
  },
});

export default theme;