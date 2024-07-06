"use client";
import { useFormik } from "formik/dist";
import {
  FormContainer,
  Input,
  InputContainer,
  InputIcon,
  SubscribeButton,
} from "./styles";

const Form = () => {
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
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputIcon />
      </InputContainer>
      <SubscribeButton type="submit">Subscribe to Newsletter</SubscribeButton>
    </FormContainer>
  );
};

export default Form;
