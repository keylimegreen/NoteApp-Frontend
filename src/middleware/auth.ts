import { CONFIG } from "../config/config";
import { useAuthStore } from "../store/useAuthStore";


export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const { logout } = useAuthStore.getState();

  const response = await fetch(`${CONFIG.BASE_URL}${endpoint}`, {
    ...options,
    // CRITICAL: This allows the browser to send the HttpOnly cookie
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  // Global Error Middleware logic
  if (response.status === 401) {
    logout(); 
    // Only redirect if not already on login to avoid loops
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    return Promise.reject("Unauthorized");
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "Request failed");
  }

  // Handle empty responses (like 204 No Content) gracefully
  if (response.status === 204) return null;
  
  return response.json();
};