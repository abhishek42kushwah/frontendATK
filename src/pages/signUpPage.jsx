import  { useState } from "react";
import { IoHome } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginImage = "/public/signupImage.webp";
const logo = "/public/brandlogo.png";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required*"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required*"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required*"),
  agreeTerms: Yup.boolean().oneOf(
    [true],
    "You must agree to terms & conditions"
  ),
});

function SignInPage() {
  const BASE_URL = import.meta.env.VITE_APP_API;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(`${BASE_URL}signup`, {
        name: values.name,
        email: values.email,
        password: values.password,
      },{
         withCredentials: true
      });

      const successMessage = response.data?.message || "Signup successful!";
      toast.success(successMessage, { position: "top-right" });
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.message || "Something went wrong";
      toast.error(errorMessage);
      setErrors({ general: errorMessage });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="h-full w-full flex items-center lg:justify-start md:justify-start pl-6 lg:p-20 md:p-16 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${LoginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg mr-10">
        <div className="bg-white rounded-t-lg py-2">
          <a
            href="/"
            className="w-8 h-8 ml-3 mt-2 rounded-md flex items-center justify-center"
          >
            <IoHome style={{ color: "black" }} />
          </a>
          <div className="flex justify-center items-center mt-2">
            <img
              src={logo}
              alt="Logo"
              loading="lazy"
              className="w-28 h-auto overflow-hidden"
            />
          </div>
          <div className="text-black text-xl text-start pb-2 font-[popines] pl-3">
            Sign Up
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeTerms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="pt-1 mx-auto p-3">
              <div className="space-y-2 pt-1">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="name"
                    className="border py-2 pl-4 rounded-lg w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red text-xs p-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="border py-2 pl-4 rounded-lg w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red text-xs p-1"
                  />
                </div>

                <div className="relative w-full">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="border py-2  pl-4 pr-10 rounded-lg w-full"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red text-xs "
                  />
                </div>

                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border py-2 pl-4 pr-10 rounded-lg w-full "
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red text-xs  "
                  />
                </div>

                <div className="text-back font-thin text-sm">
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    className="mr-2 text-xs"
                  />
                  Agree to our Terms and Conditions
                  <ErrorMessage
                    name="agreeTerms"
                    component="p"
                    className="text-red text-xs "
                  />
                </div>
              </div>

              {errors.general && (
                <p className="text-red text-xs mt-1">{errors.general}</p>
              )}

              <button
                type="submit"
                className="text-white font-semibold py-2 rounded-lg w-full mt-2"
                style={{
                  background:
                    "linear-gradient(90deg, #0065FD -16.35%, #BC00FE 114.52%)",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>

              <div className="text-center pt-2 p-2">
                <p className="text-sm">
                  Already have an account?{" "}
                  <a
                    href="/"
                    className="text-blue-600 font-medium cursor-pointer"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignInPage;
