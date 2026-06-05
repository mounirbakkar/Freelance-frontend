import { Box } from "@mui/material";
// import HomeHeader from "../components/HomeHeader";
import HomeHeader from "../components/HomeHeader";
import HomeSection1 from "../components/HomeSection1";
import { useParentCategories } from "../hooks/useParentCategories";
// import HomeSection1 from "../components/HomeSection1";

export default function Home() {
  const { data, isFetching  } = useParentCategories();

  return (
    <Box className="flexVertical" sx={{ height: "100vh", overflowY: "auto" }}>
      <HomeHeader />
      <HomeSection1 data={data?.data?.data} isLoading={isFetching }/>
      <Box sx={{ p: 5 }} />
    </Box>
  );
}
