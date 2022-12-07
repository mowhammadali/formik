import React, { useState } from 'react';
import {Field , ErrorMessage } from 'formik';
import {css} from 'styled-components/macro';

const Input = ({name , type , label}) => {
    return (
        <section className='w-100 position-relative mb-5'>
            <label htmlFor={name} className="form-label display-6 fs-sm-4 fs-5">{label}</label>
            <Field type={type} className="form-control shadow-sm fs-6" id={name} name={name} />
            <ErrorMessage name={name}>
                {error => <span css={`position: absolute; left: 0; bottom: -30px;`}>{error}</span>}
            </ErrorMessage>
        </section>
    );
};

export default Input;