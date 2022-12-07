import React from 'react';
import Input from './Input';
import CheckBox from './CheckBox';

const FormikControl = (props) => {
    switch(props.control){
        case "input":
            return <Input {...props}/>
        case "checkbox":
            return <CheckBox {...props}/>
    }
};

export default FormikControl;