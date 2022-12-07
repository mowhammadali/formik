import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import {PrimaryBtn} from "../styles/styled/Components";

const SignButtons = (props) => {
    const {text , signingText , link , isValid , isSubmitting} = props;
    return (
        <section className='w-100 d-flex justify-content-between'>
            <Link to="/login" className='h4 fw-bolder'>{link}</Link>
            <PrimaryBtn disabeBtn={!isValid} type='submit'
            className='d-flex align-items-center gap-1'
            disabled={isSubmitting}>
                {isSubmitting && <Spinner animation="border" variant="light" size="sm"/>}{isSubmitting ? signingText : text}
            </PrimaryBtn>
        </section>
    );
};

export default SignButtons;