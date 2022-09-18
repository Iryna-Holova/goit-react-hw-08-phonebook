import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetUserQuery } from "redux/connectionsApi";
import { Loader } from "./Loader/Loader";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() =>
  import('pages/Home')
);
const Login = lazy(() =>
  import('pages/Login')
);
const Register = lazy(() =>
  import('pages/Register')
);
const Contacts = lazy(() =>
  import('pages/Contacts')
);
const NotFound = lazy(() =>
  import('pages/NotFound')
);

export const App = () => {
  const { isSuccess, isLoading } = useGetUserQuery();

  if (isLoading) return (<Loader message="Please wait..." page />)
  
  if (!isLoading) return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={isSuccess ? <Navigate replace to="/contacts" /> : <Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route exact path="contacts" element={!isSuccess ? <Navigate replace to="/" /> : <Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

