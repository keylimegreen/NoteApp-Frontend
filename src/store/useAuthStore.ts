import { create } from "zustand";
import { CONFIG } from "../config/config";

interface AuthState {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: string, pw: string) => Promise<void>;
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (user, pw) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
      const response = await fetch(`${CONFIG.BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pw }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error('Auth failed');

      const data = await response.json();

      // Save to store and potentially localStorage for persistence
      set({ 
        user: data.username, 
        token: data.token, 
        isAuthenticated: true 
      });
      
      localStorage.setItem('token', data.token);

    } catch (error) {
      set({ isAuthenticated: false });
      throw error; // Re-throw so the component can show an error message
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  }
}));