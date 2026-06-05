import { Box, Button, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import NestedList from "../components/NestedList";
export default function Search() {
  const navigate = useNavigate();
  return (
    <Box className="flexVertical" sx={{ p: 2, gap: 2 }}>
      <Box className="flexVertical" sx={{ gap: 2, flexDirection: "row" }}>
        <TextField fullWidth placeholder="search to" />
        <Button variant="primary">Serach</Button>
      </Box>
      <NestedList/>
    </Box>
  );
}
