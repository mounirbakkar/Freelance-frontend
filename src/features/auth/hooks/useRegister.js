import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../api/registerApi";

export const useRegister = (options) => {
  const naviagte = useNavigate();
  return useMutation({
    mutationFn: registerApi, // changed
    onSuccess: (res) => {
      const { user, token } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      naviagte("/account", { replace: true });
    },

    onError: (error) => {
      console.log(error.response?.data?.message);
       options?.onError?.(error);
    },
  });
};