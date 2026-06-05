import { Box } from "@mui/material";
import AccountData from "../components/AccountData";

export default function Account(){
    // const { data, isLoading, isError } = useMe();
//    if (isLoading) return <Typography>Loading...</Typography>;

//   if (isError) return <Inlogin />;
console.log("ACCOUNT PAGE RENDERED");
  return (
    <Box sx={{ p: 2 }}>
      <AccountData/>
    </Box>
  );
}