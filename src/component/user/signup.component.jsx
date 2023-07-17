import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import instance from "../../interceptor/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SuccessModal from "../dialog/successModal.component";
import FailModal from "../dialog/failModal.component";
import useAuth from "../hooks/useAuth.component";

export default function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const {loading, setLoading} = useAuth();

  
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Vui lòng điền thông tin")
        .min(5, "Tên người dùng phải dài dài hơn 5 kí tự"),
      password: Yup.string()
        .required("Vui lòng điền thông tin")
        .matches(
          /^(?=.*[A-Z])(?=.*\d).{8,}$/,
          "Mật khẩu phải có ít nhất 8 kí tự, 1 chữ số và 1 chữ cái in hoa"
        ),
      confirmPassword: Yup.string()
        .required("Vui lòng điền thông tin")
        .oneOf([Yup.ref("password"), null], "Mật khẩu phải khớp nhau"),
      email: Yup.string()
        .required("Vui lòng điền thông tin")
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ Email"
        ),
    }),
    onSubmit: async (values,  { setSubmitting }) => {
      setLoading(true)
      console.log(values);
    const payload = {
      username: values.username,
      password: values.password,
      email: values.email,
    };
    try {
      const response = await instance.post("/auth/sign-up", payload);
      if (response.data.message == "success") {
      setShowModal(true)
      setTimeout(() => navigate("/signin"), 3000)
      }
    } catch (error) {
      setShowFailModal(true)
      setTimeout(() => setShowFailModal(false), 3000)
      console.error(error.response.data.message);
    } finally {
      setLoading(false)
      setSubmitting(false);
    }
    },
  });


  return (
    <section className="dark:bg-gray-900 bg-[url('/image/2103488.jpg')] shadow-lg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {loading ? ( <div
            className="flex justify-center items-center h-10 w-10 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
          </div> ) : <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="text-red-500  max-w-full text-sm">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                {formik.errors.username && (
                  <p className="text-red-500 max-w-full text-sm">
                    {formik.errors.username}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <p className="text-red-500  max-w-full text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && (
                  <p className="text-red-500 max-w-full text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <div className="ml-3 text-sm">
                  <label className="text-gray-900 dark:text-white">
                  Đăng nhập bằng:
                  </label>
                </div>
              </div>
              {/* register icon */}
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inlne-block mx-5 h-10 w-10 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {/* <!-- Twitter --> */}
                  <FaTwitter className="mx-auto h-6 w-6 text-black " />
                </button>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inlne-block mx-5 h-10 w-10 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {/* <!-- Facebook --> */}
                  <FaFacebook className="mx-auto h-6 w-6 text-black " />
                </button>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inlne-block mx-5 h-10 w-10 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {/* <!-- Google --> */}
                  <FaGoogle className="mx-auto h-6 w-6 text-black " />
                </button>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
            </p>
            </form>
          </div>
        </div>}
      </div>
      <div>
          {showModal ? (
            <>
              <SuccessModal />
            </>
          ) : null}
        </div>
      <div>
          {showFailModal ? (
            <FailModal message={"Thông tin đăng kí đã tồn tại, xin vui lòng thử lại !"} />
          ) : null}
        </div>
    </section>
    
    
  );
}
