import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";
import { useNavigate } from "react-router-dom";

export const useLogin = (options) => {
  const naviagte = useNavigate();
  return useMutation({
    mutationFn: loginApi,

    onSuccess: (res) => {
      const { user, token } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "admin") {
        naviagte("/admin", { replace: true });
      } else {
        naviagte("/account", { replace: true });
      }
    },

    onError: (error) => {
      console.log(error.response?.data?.message);
      options?.onError?.(error);
    },
  });
};

