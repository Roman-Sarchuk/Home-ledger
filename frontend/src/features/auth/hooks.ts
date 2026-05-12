import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "@/features/auth/api";

export function useLoginMutation() {
  return useMutation({
    mutationFn: loginApi,
  });
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: registerApi,
  });
}

