import api from "../../../services/api";

export const registerApi = (data) => {
  return api.post("/auth/register", data);
};