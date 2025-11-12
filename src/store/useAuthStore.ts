import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { DataGetMe } from "../types/auth";

interface AuthState {
  user: DataGetMe | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: DataGetMe | null) => void;
  setToken: (token: string) => void;
  login: (user: DataGetMe, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  updateUser: (userData: Partial<DataGetMe>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      setToken: (token) =>
        set({
          token,
        }),

      login: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        }),

      setLoading: (loading) =>
        set({
          isLoading: loading,
        }),

      updateUser: (userData) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
