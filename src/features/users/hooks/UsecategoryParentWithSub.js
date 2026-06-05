import { useQuery } from "@tanstack/react-query";
import { categoryParentWithSubApi } from "../api/categoryParentWithSubApi";

// queryClient.invalidateQueries(["parent-categories"]) for new loading after delete and update and add
export const useParentCategories = (slug) => {
  return useQuery({
    queryKey: ["parent-categories-with-Sub", slug],
    queryFn: () => categoryParentWithSubApi(slug),
     staleTime: Infinity,
     gcTime: 1000 * 60 * 60,  // 10 min cache
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled:!!slug,
   
    onError: (error) => {
      console.log(error.response?.data?.message);
      
    },
  });
};