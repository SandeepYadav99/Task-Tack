import { Formik, ErrorMessage, Field } from "formik"
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    birthdate: '',


}
const validateRegister = Yup.object().shape({
    username: Yup.string().required('User Name is Required'),
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string().required('Confirm Password'),
    email: Yup.string().email().required('Email is Requited'),
    birthdate: Yup.string().required('BirthDate is Required')

})

const Register = () => {
    const navigate = useNavigate();

    const handalSubmit = (value: any) => {
        console.log(value);
        navigate('/login')
    }

    return (
        <div className="mx-auto mt-10 shadow-md w-[30rem] h-auto p-4">
            <h1 className="text-center font-bold font-3xl">Register</h1>
            <Formik initialValues={initialValues} validationSchema={validateRegister} onSubmit={(value) => { handalSubmit(value) }}>
                {(formik) => {
                    const { values, handleChange, handleSubmit } = formik;
                    return (
                        <Fragment>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <label>Username</label>
                                    <Field className="border-2 p-1 rounded" id="username" name="username" type="text" value={values.username}
                                        onChange={handleChange} />
                                    <ErrorMessage name="username" component='span' className="text-red-500" />
                                </div>
                                <div className="flex flex-col">
                                    <label>Password</label>
                                    <Field onChange={handleChange} className="border-2 p-1 rounded" id="password" name="password" type="password" value={values.password} />
                                    <ErrorMessage name="password" component='span' className="text-red-500" />
                                </div>
                                <div className="flex flex-col">
                                    <label>Confirm Password</label>
                                    <Field onChange={handleChange} className="border-2 p-1 rounded" id="confirmPassword" name="confirmPassword" type="confirmPassword" value={values.confirmPassword} />
                                    <ErrorMessage name="confirmPassword" component='span' className="text-red-500" />
                                </div>
                                <div className="flex flex-col">
                                    <label>Email</label>
                                    <Field onChange={handleChange} className="border-2 p-1 rounded" id="confirmPassword" name="email" type="email" value={values.email} />
                                    <ErrorMessage name="email" component='span' className="text-red-500" />
                                </div>
                                <div className="flex flex-col">
                                    <label>Birth Date</label>
                                    <Field onChange={handleChange} className="border-2 p-1 rounded" id="birthdate" name="birthdate" type="birthdate" value={values.birthdate} />
                                    <ErrorMessage name="birthdate" component='span' className="text-red-500" />
                                </div>
                                <div className="mt-4 text-center ">
                                    <button className="bg-blue-500 px-4 rounded cursor-pointe hover:text-white hover:bg-blue-900 text-white text-xl my-2">REGISTER</button> <br />
                                    <p>Have a Acount <Link to={"/login"} className=" bg-orange-500 text-white">Login</Link> </p>
                                </div>
                            </form>
                        </Fragment>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Register