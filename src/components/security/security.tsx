import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but save the current location so we can 
    // send them back to the right patient after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};