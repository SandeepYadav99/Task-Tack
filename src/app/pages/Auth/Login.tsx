import { Formik, ErrorMessage, Field } from "formik"
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useActions } from "../../hooks/useActions";
import withAuth from "../../hoc/ProtactRoute";

const initialValues = {
    username: '',
    password: ''

}
const validateLogin = Yup.object().shape({
    username: Yup.string().required('User Name is Required'),
    password: Yup.string().required('Password is Required'),
})

const Login = () => {
    const navigate = useNavigate();
    const {  login } = useActions()

    const handalSubmit = (value: any) => {
     
        navigate('/')
      login(value)
    }

    return (
        <div className="mx-auto mt-10 shadow-md w-[30rem] h-auto p-4">
            <h1 className="text-center font-bold font-2xl">Login</h1>
            <Formik initialValues={initialValues} validationSchema={validateLogin} onSubmit={(value) => { handalSubmit(value) }}>
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
                                <div className="flex mt-5">
                                    <input type="checkbox" className="w-5 border-2 " />
                                    <p className="mx-2">Remember me</p>
                                    <p className="font-serif font-2xl ">If not have account    <Link className="text-white bg-orange-500 p-2 rounded-sm" to={"/register"} >Register</Link> </p>
                                </div>
                                <div className="mt-4 text-center ">
                                    <button className="bg-blue-500 px-4 rounded cursor-pointe hover:text-white hover:bg-blue-900 text-white">LOGIN</button>
                                </div>
                            </form>
                        </Fragment>
                    )
                }}

            </Formik>
        </div>
    )
}

export default Login