import api from "../../../services/api";

export const categoryParentApi = () => {
  return api.get("/category/getParent");
};
