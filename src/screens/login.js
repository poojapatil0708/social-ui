import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../componants/input";
import Button from "../componants/butten";
import axios from "axios";
import { toast } from "react-toastify";

const LogIn = () => {

    const initialValues = {
        email:'',
        password:''
    }

    const validationSchema = () => Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is requred'),
        password: Yup.string().required('Password is required').min(4, 'Password should be min 4 characters').max(16, 'Password should be max 16 characters')
    })

    const onSubmit = (values) => {
        console.log(values)
        const APIURL = "http://localhost:8000";
        axios({ method: 'POST', url: `${APIURL}/user/login`, data: values })
            .then(res => toast.success('Login successfuly',res))
            .catch(err => toast.error(err.response?.data?.message ||'Something went wrong'))
    }
    
    return(
        <div>
            <h2 className="text">LogIn</h2>
            <div className="body">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                    {({handleSubmit, setFieldValue, errors, values})=>(
                        <div className="container">
                            <Input type="text" placeholder="Enter email id" error={errors.email} value={values.email} onChange={(e) => { setFieldValue('email', e.target.value); }} />
                            <Input type="password" placeholder="Enter Password" error={errors.password} value={values.password} onChange={(e) => { setFieldValue('password', e.target.value); }} />
                            <Button label="LogIn" onClick={handleSubmit} />
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default LogIn;