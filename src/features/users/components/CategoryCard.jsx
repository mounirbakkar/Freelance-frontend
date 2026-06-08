import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function CategoryCard({ item, parentSlug = "" }) {
  const fullPath = parentSlug ? `${parentSlug}/${item.slug}` : item.slug;
  return (
    <Box
      key={item?._id}
      component={Link}
      to={`${fullPath}`}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 1,
        p: 2,
        gap: 1,
        textDecoration: "none",
        color: "text.primary",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{item?.name}</Typography>
      <IconButton>
        <ArrowForwardIosOutlinedIcon sx={{ color: "text.primary" }} />
      </IconButton>
    </Box>
  );
}
