import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import {PrimaryBtn} from "../styles/styled/Components";

const LoginButtons = (props) => {
    const {text , loginText , link , isValid , isSubmitting} = props;
    return (
        <section className='w-100 d-flex justify-content-between'>
            <Link to="/" className='h4 fw-bolder'>{link}</Link>
            <PrimaryBtn
            disabeBtn={!isValid} type='submit'
            className='d-flex align-items-center gap-1'
            disabled={isSubmitting}>
                {isSubmitting && <Spinner animation="border" variant="light" size="sm"/>}{isSubmitting ? loginText : text}
            </PrimaryBtn>
        </section>
    );
};

export default LoginButtons;