import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./register.module.scss";
import { userServices } from "../../services/userServices";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string().min(1).required("Password is required!"),
  passwordConfirm: Yup.string()
    .min(1)
    .required("Password confirmation is required!"),
  name: Yup.string().required("Email is required!"),
  phone: Yup.string()
    .required("Phone is required!")
    .matches(
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      "Phone number is invalid!"
    ),
});

function Register() {
  let input = useRef(null);
  type submit = {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: boolean;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      passwordConfirm: "",
      email: "",
      phone: "",
      gender: "male",
    },
    onSubmit: (values) => {
      let submit: submit = {
        name: values.name,
        email: values.email,
        password:
          values.password === values.passwordConfirm ? values.password : "",
        phone: values.phone,
        gender: values.gender === "male" ? true : false,
      };
      const register = async () => {
        try {
          let res = await userServices.signupService(submit);
          alert(res?.data?.message);
        } catch (err) {
          console.log(err);
        }
      };
      if (values.password === values.passwordConfirm) register();
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className={`${style.register}`}>
      <div className="title">Register</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form">
          <div className="left">
            <div className="note">
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                name="email"
                placeholder="email"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="alert">(*) {formik.errors.email}</div>
              )}
            </div>
            <div className="note">
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                type="password"
                placeholder="password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="alert">(*) {formik.errors.password}</div>
              )}
            </div>
            <div className="note">
              <input
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                name="passwordConfirm"
                type="password"
                placeholder="password confirm"
              />
              {formik.touched.passwordConfirm &&
                formik.errors.passwordConfirm && (
                  <div className="alert">
                    (*) {formik.errors.passwordConfirm}
                  </div>
                )}
            </div>
          </div>
          <div className="right">
            <div className="note">
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                type="text"
                placeholder="name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="alert">(*) {formik.errors.name}</div>
              )}
            </div>
            <div className="note">
              <input
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                type="text"
                placeholder="phone"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="alert">(*) {formik.errors.phone}</div>
              )}
            </div>
            <div className="gender">
              <div className="titleGender">Gender</div>
              <div className="radio">
                <input
                  type="radio"
                  id="radio1"
                  onChange={formik.handleChange}
                  value={"male"}
                  name="gender"
                  defaultChecked
                />
                <label htmlFor="radio1">Male</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  onChange={formik.handleChange}
                  value={"female"}
                  id="radio2"
                  name="gender"
                />
                <label htmlFor="radio2">Female</label>
              </div>
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
