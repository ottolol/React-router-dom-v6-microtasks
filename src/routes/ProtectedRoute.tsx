import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from './router';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated] = useState<Boolean>(false);

  if (!isAuthenticated) {
    return <Navigate to={PATH.LOGIN} replace />;
  }

  // return <Outlet />;
  return <>{children}</>;
};