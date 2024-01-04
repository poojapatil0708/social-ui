import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../componants/input";
import Button from "../componants/butten";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LogIn = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = () => Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(4, 'Password should be min 4 characters').max(16, 'Password should be max 16 characters')
    })

    const onSubmit = (values) => {
        console.log(values)
        const APIURL = "http://localhost:8000";
        axios({ method: 'POST', url: `${APIURL}/user/login`, data: values })
            .then(res => toast.success('Login successfuly', res))
            .catch(err => toast.error(err.response?.data?.message || 'Invalid username or password'))
    }

    return (
        <div>
            <h2 className="text">LogIn</h2>
            <div className="body">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                    {({ handleSubmit, setFieldValue, errors, values }) => (
                        <div className="container">
                            <Input type="text" placeholder="Enter email id" error={errors.email} value={values.email} onChange={(e) => { setFieldValue('email', e.target.value); }} />
                            <Input type="password" placeholder="Enter Password" error={errors.password} value={values.password} onChange={(e) => { setFieldValue('password', e.target.value); }} />
                            <Button label="LogIn" onClick={handleSubmit}/>
                        </div>
                    )}
                </Formik>
            </div>
            <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                <div className="text" style={{ margin: '15px' }} >
                    <div style={{ color: 'black' }}>Don't have an account?</div>
                    <div style={{ color: '#24a0ed' }}>Create Account</div>
                </div>
            </Link>
        </div>
    );
}

export default LogIn;