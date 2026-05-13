import { create } from "zustand";
import { CONFIG } from "../config/config";

interface AuthState {
  user: string | null;
  isAuthenticated: boolean;
  login: (user: string, pw: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (user, pw) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
      const response = await fetch(`${CONFIG.BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, pw }),
        signal: controller.signal,
        credentials: "include"
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error("Auth failed");

      // Save to store and potentially localStorage for persistence
      set({
        user: user,
        isAuthenticated: true,
      });
      return true;
    } catch {
      set({ isAuthenticated: false });
      return false;
    }
  },

  logout: async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
      const response = await fetch(`${CONFIG.BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error("Log out failed");

      // Save to store and potentially localStorage for persistence
      set({
        user: null,
        isAuthenticated: false,
      });
      return true;
    } catch {
      return false;
    }
  },
}));
