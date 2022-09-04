import { Loader } from "components/Loader/Loader";
import { success } from "helpers/notification";
import { Suspense } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useGetUserQuery, useLogoutUserMutation } from "redux/connectionsApi";
import { AuthNavLink, Container, Guest, Header, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const { data, isSuccess } = useGetUserQuery();
    const [logoutUser, { isLoading }] = useLogoutUserMutation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logoutUser();
        navigate('/login');
        success('Come back soon')
    }

    return (
        <>
            <Container accent>
                <Header>
                    <Logo>PhoneBook</Logo>
                    {!isSuccess &&
                        <nav>
                            <AuthNavLink as={NavLink} to="/login">Log in</AuthNavLink>
                            <AuthNavLink as={NavLink} to="/register">Register</AuthNavLink>
                        </nav>
                    }
                    {isSuccess &&
                        <div>
                            <Guest>Hello, {data.name}</Guest>
                            <AuthNavLink
                                onClick={handleLogOut} as="button" type='button'>
                                {!isLoading
                                    ? 'Log out'
                                    : <Loader />
                                }
                            </AuthNavLink>                
                        </div>
                    }
                </Header>
            </Container>
            <Container main>
                <Suspense fallback={<Loader message="Please wait..." />}>
                    <Outlet />
                </Suspense>
                <ToastContainer />
            </Container>
        </>
    );
};