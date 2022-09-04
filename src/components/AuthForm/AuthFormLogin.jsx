import { Loader } from 'components/Loader/Loader';
import { SubmitButton } from 'components/SubmitButton/SubmitButton.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { notify, success } from 'helpers/notification';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'redux/connectionsApi';
import { AuthFormWrapper, Error, FormBody, FormLabel } from './AuthForm.styled';
 
export const AuthFormLogin = () => {
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const navigate = useNavigate();
    
    const handleLogIn = (e) => {
        loginUser(e)
            .then(response => {
                if (response.error) {
                    notify('User does not exist or wrong password');
                } else {
                    success('Wellcome back');
                    navigate('/contacts');
                };
            })
    }

    return (
        <AuthFormWrapper>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Field is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    } else if (!values.password) {
                        errors.password = 'Field is required';
                    } else if (
                        !/^.{7,}$/.test(values.password)
                    ) {
                        errors.password = 'Please enter 7 characters or more';
                    }
                    return errors;
                }}
                onSubmit={handleLogIn}
            >
                <FormBody as={Form}>
                    <FormLabel>
                        Email
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component={Error} />
                    </FormLabel>
                    <FormLabel>
                        Password
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component={Error} />
                    </FormLabel>
                    <SubmitButton type="submit" disabled={isLoading} >
                        {!isLoading && 'Log in'}
                        {isLoading && <Loader message='Please wait...' />}
                    </SubmitButton>
                </FormBody>
            </Formik>
        </AuthFormWrapper>
    );
};