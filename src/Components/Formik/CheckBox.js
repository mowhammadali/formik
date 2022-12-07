import React from 'react';
import { FastField , ErrorMessage } from 'formik';
import {css} from 'styled-components/macro';

const CheckBox = ({name , type , label , option}) => {
    return (
        <section className='w-100 position-relative d-flex gap-4' css={`margin-bottom: 90px; margin-top: 60px;`}>
            <label htmlFor={name} className="form-label h6 fs-5 checkbox-label">{label}</label>
            <FastField name={name}>
                {({field , meta}) => {
                    return option.map(o => {
                        return(
                            <React.Fragment key={o.id}>
                                <input
                                type={type}
                                id={name}
                                {...field}
                                value={o.value}
                                />
                            </React.Fragment>
                        )
                    })
                }}
            </FastField>
            <ErrorMessage name='acception'>
                {error => <span css={`position: absolute; left: 0; bottom: -30px;`}>{error}</span>}
            </ErrorMessage>
        </section>
    );
};

export default CheckBox;