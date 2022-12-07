import React from 'react';
import { Formik , Form } from 'formik';
import { initialValues , onSubmit , validationSchema } from './Formik/FormikData';
import { ToastContainer } from 'react-toastify';

// components
import FormikControl from './Formik/FormikControl';
import SignButtons from './SignButtons';

// styles and icons
import styled , {css} from 'styled-components/macro';
import { Container } from '../styles/Custom/SignUp';

const acception = [
    {id: 1 , value: "checked"}
]

const SignUp = () => {
    return (
        <Container className='container d-flex justify-content-center'>
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnMount
            enableReinitialize
            >
            {
                formik => {
                    return(
                        <Form className='bg-light shadow-lg rounded-4 my-5 p-sm-5 py-5 px-4 sign-form'>
                            <h1 className='mb-4'>Sign Up</h1>
                            <FormikControl name="name" type="text" label="name" control="input"/>
                            <FormikControl name="email" type="email" label="email" control="input"/>
                            <FormikControl name="password" type="password" label="password" control="input"/>
                            <FormikControl name="confirmPassword" type="password" label="confirm password" control="input"/>
                            <FormikControl name="acception" type="checkbox" label="I accept terms of privacy policy" option={acception}  control="checkbox"/>
                            <SignButtons text="Sign Up" signingText="Signing Up..." link="Login" {...formik}/>
                        </Form>
                    )
                }
            }
            </Formik>
            <ToastContainer />
        </Container>
    );
};

export default SignUp;