import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../componants/butten";
import Input from "../componants/input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {

    const navigate = useNavigate();

    const initialValues = {
        full_name: '',
        phone: '',
        email: '',
        password: ''
    }

    const validationSchema = () => Yup.object().shape({
        full_name: Yup.string().required('Name is required').matches(/^[a-zA-Z\s]+$/, 'Enter characters only'),
        phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
        email: Yup.string().email('Invalid email').required('Email is requred'),
        password: Yup.string().required('Password is required').min(4, 'Password should be min 4 characters').max(16, 'Password should be max 16 characters')
    })

    const onSubmit = (values) => {
        const APIURL = "http://localhost:8000";
        axios({ method: 'POST', url: `${APIURL}/user/create`, data: values })
            .then(res => {
                toast.success('User created successfuly', res);
                navigate('/login')
            })
            .catch(err => toast.error('Something went wrong'))
    }

    return (
        <div>
            <h2 className="text" >SignUp</h2>
            <div className="body" >
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    {({ setFieldValue, handleSubmit, values, errors }) => (
                        <div className="container" >
                            <Input type="text" placeholder="Enter your full name" error={errors.full_name} value={values.full_name} onChange={(e) => { setFieldValue('full_name', e.target.value); }} />
                            <Input type="text" placeholder="Enter phone number" error={errors.phone} value={values.phone} onChange={(e) => { setFieldValue('phone', e.target.value); }} />
                            <Input type="text" placeholder="Enter email id" error={errors.email} value={values.email} onChange={(e) => { setFieldValue('email', e.target.value); }} />
                            <Input type="password" placeholder="Enter Password" error={errors.password} value={values.password} onChange={(e) => { setFieldValue('password', e.target.value); }} />
                            <Button label="SignUp" onClick={handleSubmit} />
                        </div>
                    )}
                </Formik>
            </div>
            <Link to='/login' style={{ textDecoration: 'none' }}>
                <div className="text" style={{ margin: '15px' }} >
                    <div style={{ color: 'black' }}>Already have an account?</div>
                    <div style={{ color: '#24a0ed' }}>LogIn</div>
                </div>
            </Link>
        </div>
    );
}

export default SignUp;