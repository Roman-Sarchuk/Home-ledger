import { api } from "@/shared/api/axios";
import type { AuthUser } from "@/store/authStore";

export type AuthResponse = {
  user: AuthUser;
  token: string;
};

export async function loginApi(payload: { email: string; password: string }): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", payload);
  return data;
}

export async function registerApi(payload: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register", payload);
  return data;
}

