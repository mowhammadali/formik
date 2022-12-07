import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const successNotify = () => toast.success('Successful', {
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
});

const errorNotify = err => toast.error( String(err) , {
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
});

export const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acception: [],
}

export const initialValues2 = {
    loginEmail: "",
    loginPass: ""
}

export const onSubmit = (values , submitProps) => {
    axios.post(URL , values)
        .then(res => {
            successNotify();
            submitProps.setSubmitting(false);
            submitProps.resetForm();
        })
        .catch(err => {
            errorNotify(err);
            submitProps.setSubmitting(false);
        })
}

export const onSubmit2 = (values , submitProps) => {
    axios.post(URL , values)
        .then((res) => {
            successNotify();
            submitProps.setSubmitting(false);
            submitProps.resetForm();
        })
        .catch(err => {
            errorNotify(err);
            submitProps.setSubmitting(false);
        })
}

export const validationSchema = yup.object({
    name: yup.string().required("Name is required!").min(3 , "Too short!").max(60 , "Too long!"),
    email: yup.string().required("Email is required!").email("Email is invalid"),
    password: yup.string().required("Password is required!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ , "Password is invalid"),
    confirmPassword: yup.string().required("Confirm Password is required!").oneOf([yup.ref('password'), null], 'Passwords must match'),
    acception: yup.array().min(1 , "accept our regulations"),
})

export const validationSchema2 = yup.object({
    loginEmail: yup.string().required("The field is required!").email("Email is invalid"),
    loginPass: yup.string().required("The field is required!"),
})
