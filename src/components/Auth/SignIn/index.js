"use client";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { useFormik } from "formik";
import { object, string } from "yup";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "@/navigation";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "@/redux/slices/userSlice";
import { notify } from "@/common/notify";

const StyledFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--quaternary);
`;

const LoginForm = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string().email("Invalid email address").required("Required"),
    password: string().required("Required"),
  });

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
    onSubmit: (values) => login(values),
  });

  const login = async (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        notify(t("success"), "success");
        router.push("/");
      })
      .catch((error) => {
        notify(t("error"), "error");
      });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      notify(t("logoutSuccess"), "success");
      router.push("/signin");
    } catch {}
  };

  if (user) {
    return (
      <div className="d-flex align-items-center justify-content-center mt-5">
        You are already logged in. If you want to log out,
        <button
          className="bg-transparent border-0 text-warning"
          onClick={logout}
        >
          click here.
        </button>
      </div>
    );
  }

  return (
    <StyledFormContainer>
      <h2 className="text-center">{t("login")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-100 bg-black text-white"
        >
          {t("login")}
        </Button>
      </form>
    </StyledFormContainer>
  );
};

export default LoginForm;
