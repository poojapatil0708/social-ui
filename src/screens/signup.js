import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../componants/butten";
import Input from "../componants/input";

const SignUp = () => {

    const initialValues = {
        full_name: '',
        phone: '',
        email: '',
        password: ''
    }

    const validationSchema = () => Yup.object().shape({
        full_name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone is required')
    })

    const onSubmit = () => {
        
    }

    return (
        <div>
            <h2 className="text" >SignUp</h2>
            <form>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    {({ setFieldValue, handleSubmit, values, errors }) => (
                        <div className="container" >
                            <Input placeholder="Enter your full name" />
                            <Input placeholder="Enter phone number" />
                            <Input placeholder="Enter email id" />
                            <Input placeholder="Enter Password" />
                            <Button label="SignUp" />
                        </div>
                    )}
                </Formik>
            </form>
        </div>
    );
}

export default SignUp;