import { Navigate } from "react-router-dom";
import { useMe } from "../features/auth/hooks/useMe";

export default function GuestRoute({ children }) {
  const { data, isLoading } = useMe();
  console.log(data);
  if (isLoading) return null;

  if (data) {
    return <Navigate to="/account" replace />;
  }

  return children;
}