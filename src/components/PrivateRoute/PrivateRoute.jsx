import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'redux/connectionsApi';

export const PrivateRoute = () => {
  const { isSuccess } = useGetUserQuery();
  return isSuccess ? <Outlet /> : <Navigate to="/login" />;
};