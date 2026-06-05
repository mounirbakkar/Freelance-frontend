import { Box, Button } from "@mui/material";
import { useLogout } from "../../../utils/useLogout";

export default function AccountData() {
  const logout = useLogout();
  return (
    <Box>
      <Button variant="primary" onClick={logout}>
        logout
      </Button>
    </Box>
  );
}
