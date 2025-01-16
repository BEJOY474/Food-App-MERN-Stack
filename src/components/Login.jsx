import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from './Error';

const Login = () => {
    const dispatch = useDispatch()

    const userState = useSelector((state) => state.loginUserReducer);
    const { loading, error } = userState;
    
  
    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            
            dispatch(loginUser(values))
        },
    });

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
         
        }
    }, []);

    const emailError = formik.touched.email && formik.errors.email && (
        <span className='text-gray-900 flex items-center'>
            {formik.errors.email} <span className='ml-2 text-red-500 text-xl'>❌</span>
        </span>
    );

    const passwordError = formik.touched.password && formik.errors.password && (
        <span className='text-gray-900 flex items-center'>
            {formik.errors.password} <span className='ml-2 text-red-500 text-xl'>❌</span>
        </span>
    );

    const loadingButton = (<span className="loading loading-spinner loading-md"></span>)

    return (
        <div>
            {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
          
            <dialog id="my_modal_3" className="modal">
          
                <div className="modal-box relative right-2">
                <h3 className="text-center py-1 text-[18px] font-bold " >Login</h3>
                    <form onSubmit={formik.handleSubmit} className="p-2">
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    
                        {
                            (error && <Error error={error} /> )
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                className="input input-bordered" required
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                        </div>
                        {emailError}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                             className="input input-bordered"
                             name='password'
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             required />
                          
                        </div>
                        {passwordError}

                        <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                {
                                    loading ? (loadingButton) : "Login"
                                }
                            </button>
                        </div>

                    </form>
                    <p className="text-sm text-center my-2">
                        Don't have any account? <a href="/signup" className="underline ml-1 text-red">Signup now!</a>
                    </p>
                </div>
            </dialog>
        </div>
    )
}

export default Login
