import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./Success";
import Error from "./Error";

const Signup = () => {
  const dispatch = useDispatch();

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const userState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error, message } = userState;

  const [passwordValidations, setPasswordValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasMinLength: false,
  });

  const validatePassword = (password) => {
    setPasswordValidations({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password),
      hasMinLength: password.length >= 6,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmePassword: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3, "Name is too short").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .required("Required"),
      confirmePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values));
      resetForm();
    },
  });

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    formik.handleChange(e);
    validatePassword(value);
  };

  const allValidationsPassed =
    Object.values(passwordValidations).every(Boolean);

  return (
    <div>
      <h3 className="text-center py-2 text-[25px] font-bold " >User Registration</h3>
      <div className="h-[100vh] flex flex-col-reverse justify-center items-center">
        <Link to="/" className="btn btn-circle top-1 right-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
        <div className="modal-box flex flex-col h-[150vh] justify-center">
          <div className="px-12 mt-32">
            <a href="/">
              <img
                // src="../../public/image/logo.png"
                 src="https://w7.pngwing.com/pngs/642/372/png-transparent-gardening-logo-landscaping-design-web-design-leaf-plant-stem-thumbnail.png"
                alt="logo"
                className="rounded-full border border-red-500"
                style={{
                  margin: "1.5rem auto",
                  position: "relative",
                  top: "40px",
                  maxWidth: "150px",
                  maxHeight: "150px",
                  width: "100%",
                  marginTop: "70px",
                  height: "auto",
                }}
              />
            </a>
          </div>

          <form onSubmit={formik.handleSubmit} method="dialog">
            <h3 className="font-bold text-lg mt-3 mb-1">Create an account</h3>

            {success && (
              <Success success="User has been registered successfully. Please login now!" />
            )}

            {error && <Error error={error} />}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                value={formik.values.name}
                autoComplete="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-gray-900 flex items-center">
                  {formik.errors.name}{" "}
                  <span className="ml-2 text-red-500 text-xl">❌</span>
                </span>
              ) : null}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={formik.values.email}
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-gray-900 flex items-center">
                  {formik.errors.email}{" "}
                  <span className="ml-2 text-red-500 text-xl">❌</span>
                </span>
              ) : null}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={formik.values.password}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setIsPasswordFocused(false);
                }}
                onChange={handlePasswordChange}
              />
              {isPasswordFocused && !allValidationsPassed && (
                <div className="mt-2">
                  <div
                    className={`flex items-center ${
                      passwordValidations.hasUppercase
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Must contain at least one uppercase letter
                    <span className="ml-2 text-xl">
                      {passwordValidations.hasUppercase ? "✅" : "❌"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center ${
                      passwordValidations.hasLowercase
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Must contain at least one lowercase letter
                    <span className="ml-2 text-xl">
                      {passwordValidations.hasLowercase ? "✅" : "❌"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center ${
                      passwordValidations.hasNumber
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Must contain at least one number
                    <span className="ml-2 text-xl">
                      {passwordValidations.hasNumber ? "✅" : "❌"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center ${
                      passwordValidations.hasSpecialChar
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Must contain at least one special character (@$!%*?&)
                    <span className="ml-2 text-xl">
                      {passwordValidations.hasSpecialChar ? "✅" : "❌"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center ${
                      passwordValidations.hasMinLength
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Must be at least 6 characters long
                    <span className="ml-2 text-xl">
                      {passwordValidations.hasMinLength ? "✅" : "❌"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmePassword"
                placeholder="Confirm password"
                className="input input-bordered"
                value={formik.values.confirmePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmePassword &&
              formik.errors.confirmePassword ? (
                <span className="text-gray-900 flex items-center">
                  {formik.errors.confirmePassword}{" "}
                  <span className="ml-2 text-red-500 text-xl">❌</span>
                </span>
              ) : null}
            </div>

            <div className="mt-4 flex flex-col justify-center">
              <button type="submit" className={`btn btn-primary `}>
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          <div className="divider py-4">OR</div>

          <div className="flex justify-center space-x-5 mb-5">
            <button className="btn btn-outline btn-square">
              <FcGoogle size={24} />
            </button>
            <button className="btn btn-outline btn-square">
              <FaFacebookF size={24} />
            </button>
            <button className="btn btn-outline btn-square">
              <FaGithub size={24} />
            </button>
          </div>

          <p className="mt-5 text-center">
            Already have an account?
            <a
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>

        <Login />
      </div>
    </div>
  );
};

export default Signup;
