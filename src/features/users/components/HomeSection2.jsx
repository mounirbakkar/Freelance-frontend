import { Box, Typography } from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
export default function HomeSection2() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        textAlign: "center",
        gap: 2,
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h2">Common services</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        <Box
          className="flexHorizntel"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            p: 2,
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <CodeOutlinedIcon />
          <Typography>programming</Typography>
        </Box>
        <Box
          className="flexHorizntel"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            p: 2,
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <CodeOutlinedIcon />
          <Typography>programming</Typography>
        </Box>
        <Box
          className="flexHorizntel"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            p: 2,
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <CodeOutlinedIcon />
          <Typography>programming</Typography>
        </Box>
        <Box
          className="flexHorizntel"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            p: 2,
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <CodeOutlinedIcon />
          <Typography>programming</Typography>
        </Box>
      </Box>
    </Box>
  );
}
