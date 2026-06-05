import api from "../../../services/api";

export const categoryParentWithSubApi = (slug) => {
  return api.get(`/category/slug/${slug}`);
};
