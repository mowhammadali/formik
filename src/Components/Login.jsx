import React from 'react';
import { Formik , Form } from 'formik';
import { initialValues2 , onSubmit2 , validationSchema2 } from './Formik/FormikData';
import { ToastContainer } from 'react-toastify';

// styles
import { Container } from '../styles/Custom/SignUp';

// components
import FormikControl from './Formik/FormikControl';
import LoginButtons from './LoginButtons';

const Login = () => {
    return (
        <Container className='container d-flex justify-content-center'>
            <Formik
            initialValues={initialValues2}
            onSubmit={onSubmit2}
            validationSchema={validationSchema2}
            validateOnChange={true}
            validateOnMount
            enableReinitialize
            >
            {
                formik => {
                    return(
                        <Form className='bg-light shadow-lg rounded-4 my-5 p-sm-5 py-5 px-4 sign-form'>
                            <h1 className='mb-4'>Login</h1>
                            <FormikControl name="loginEmail" type="email" label="email" control="input"/>
                            <FormikControl name="loginPass" type="password" label="password" control="input"/>
                            <LoginButtons text="Login" loginText="Login..." link="Sign IN" {...formik}/>
                        </Form>
                    )
                }
            }
            </Formik>
            <ToastContainer />
        </Container>
    );
};

export default Login;