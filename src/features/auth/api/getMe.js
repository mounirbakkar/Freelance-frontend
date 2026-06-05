import api from "../../../services/api";

export const getMe = async () => {
  const token = localStorage.getItem("token");
  const res = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data ?? null;
};