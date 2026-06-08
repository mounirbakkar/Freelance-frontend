import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
export default function HomeSection1({ data, isLoading }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        textAlign: "center",
        gap: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h2">
        All professional services to develop your business
      </Typography>
      {isLoading && !data?.length ? (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {data?.map((item) => {
            return (
              <Box
                key={item?._id}
                component={Link}
                to={`${item?.slug}`}
                sx={{
                  minHeight: 150,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1,
                  textDecoration: "none",
                }}
              >
                <Typography variant="button" sx={{ color: "white" }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
