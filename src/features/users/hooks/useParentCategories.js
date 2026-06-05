import { useQuery } from "@tanstack/react-query";
import { categoryParentApi } from "../api/categoryParentApi";
// queryClient.invalidateQueries(["parent-categories"]) for new loading after delete and update and add
export const useParentCategories = (options) => {
  return useQuery({
    queryKey: ["parent-categories"],
    queryFn: categoryParentApi,
     staleTime: Infinity,
     gcTime: 1000 * 60 * 60,  // 10 min cache
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      options?.onSuccess?.(res);
    },
    onError: (error) => {
      console.log(error.response?.data?.message);
      options?.onError?.(error);
    },
  });
};