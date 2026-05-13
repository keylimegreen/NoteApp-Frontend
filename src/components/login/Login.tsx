import React, { useState } from "react";
import useUIStore from "../../store/useUIStore";
import { useAuthStore } from "../../store/useAuthStore";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginViewer = () => {
  const handleLogin = useAuthStore((s) => s.login);
  const [isLoading, setIsLoading] = useState(false);
  const alertMsg = useUIStore((s) => s.alertMsg);
  const setAlert = useUIStore((s) => s.setAlert);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = data.get("user") as string;
    const pw = data.get("pw") as string;
    if (!user || !pw) {
      setAlert("User and password cannot be empty","error");
    } else {
      setIsLoading(true);
      const response = await handleLogin(user, pw);
      setIsLoading(false);
      console.log("logged on: ", response)
      if (response) {
        setAlert(null,"alert")
        const from = location.state?.from?.pathname || "/mdm";
        navigate(from, { replace: true });
      } else {
         setAlert("User and password incorrect","error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <input
        type="text"
        name="email"
        style={{ display: "none" }}
        tabIndex={-1}
      />
      <input
        type="password"
        name="password"
        style={{ display: "none" }}
        tabIndex={-1}
      />
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border border-slate-200">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">App Portal</h2>
          <p className="mt-2 text-sm text-slate-600">Please sign in</p>
        </div>

        {/* Error Alert */}
        {alertMsg && (
          <div className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-sm">
            {alertMsg}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                User
              </label>
              <input
                id="user"
                name="user"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 text-slate-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="pw"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 text-slate-500 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
