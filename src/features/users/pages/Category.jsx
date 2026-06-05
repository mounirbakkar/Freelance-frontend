import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useParentCategories } from "../hooks/UsecategoryParentWithSub";
import CategoryCard from "../components/CategoryCard";
export default function Category() {
  const { slug } = useParams();
  const { data, isFetching } = useParentCategories(slug);
  if (isFetching) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress size={20} />
      </Box>
    );
  }
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ mb: 4 }}>{data?.data?.data?.name}</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {data?.data?.data?.children?.map((item) => (
          <CategoryCard item={item} />
        ))}
      </Box>
    </Box>
  );
}
