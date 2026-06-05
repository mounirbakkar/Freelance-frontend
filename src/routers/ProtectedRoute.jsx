import { Box, CircularProgress } from "@mui/material";
import { useMe } from "../features/auth/hooks/useMe";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { data, isLoading, isError } = useMe();
  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress size={20} />
      </Box>
    );
  }
  if (isError) {
    return <Navigate to="/login" replace />;
  }
  if (!data) {
    return <Navigate to="/login" replace />;
  }
  if (!data || isError) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles) {
    const hasRole = allowedRoles.includes(data.role);
    if (!hasRole) {
      return <Navigate to="/" replace />;
    }
  }
  return children;
}
