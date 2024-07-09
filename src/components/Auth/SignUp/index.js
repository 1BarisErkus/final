"use client";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { useFormik } from "formik";
import { object, string, ref } from "yup";

const StyledFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--quaternary);
`;

const SignupForm = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = object({
    email: string().email("Invalid email address").required("Required"),
    password: string().required("Required"),
    passwordConfirm: string()
      .oneOf([ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const signup = (values) => {
    console.log(values);
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => signup(values),
  });

  const t = useTranslations("Auth");
  return (
    <StyledFormContainer>
      <h2 className="text-center">{t("signup")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {t("email")}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder={t("emailPlaceholder")}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-danger text-end">{errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {t("password")}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder={t("passwordPlaceholder")}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <div className="text-danger text-end">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordConfirm" className="form-label">
            {t("passwordConfirm")}
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder={t("passwordConfirmPlaceholder")}
            value={values.passwordConfirm}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className="text-danger text-end">{errors.passwordConfirm}</div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-100 bg-black text-white"
        >
          {t("signup")}
        </Button>
      </form>
    </StyledFormContainer>
  );
};

export default SignupForm;
