"use client";
import { useFormik } from "formik/dist";
import {
  FormContainer,
  Input,
  InputContainer,
  InputIcon,
  SubscribeButton,
} from "./styles";
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations("Footer");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      toast.success(`Thank you for subscribing! ${values.email}`);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          type="email"
          name="email"
          placeholder={t("inputPlaceholder")}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputIcon />
      </InputContainer>
      <SubscribeButton type="submit">{t("subscribe")}</SubscribeButton>
    </FormContainer>
  );
};

export default Form;
