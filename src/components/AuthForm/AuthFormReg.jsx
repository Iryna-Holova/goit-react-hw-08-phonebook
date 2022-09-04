import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { SubmitButton } from 'components/SubmitButton/SubmitButton.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { notify, success } from 'helpers/notification';
import { useSignupUserMutation } from 'redux/connectionsApi';
import { AuthFormWrapper, Error, FormBody, FormLabel } from './AuthForm.styled';
 
export const AuthFormReg = () => {
    const [signupUser, { isLoading }] = useSignupUserMutation();
    const navigate = useNavigate();
    
    const handleSignIn = (e) => {
        signupUser(e)
            .then(response => {
                if (response.error) {
                    notify('User exists');
                } else {
                    success('Wellcome');
                    navigate('/contacts');
                };
            })
    }

    return (
        <AuthFormWrapper>
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Field is required';
                    } else if (!values.email) {
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
                onSubmit={handleSignIn}
            >
                <FormBody as={Form}>
                    <FormLabel>
                        Name
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component={Error} />
                    </FormLabel>
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
                    <SubmitButton type="submit" disabled={isLoading}>
                        {!isLoading && 'Sign in'}
                        {isLoading && <Loader message='Please wait...' />}
                    </SubmitButton>
                </FormBody>
            </Formik>
        </AuthFormWrapper>
    );
};