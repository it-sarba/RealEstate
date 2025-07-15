// src/components/FormProvider/FormProvider.stories.jsx
import React from "react";
import { useForm } from "react-hook-form";
import FormProvider from "./FormProvider";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import Input from "../Input/Input";
import FormError from "../FormError/FormError";
import "./FormProvider.css";
import { fn } from 'storybook/test';

export default {
  title: "Forms/FormProvider",
  component: FormProvider,
   parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

export const Default = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit} className="form-container">
      <FieldWrapper label="Email">
        <Input {...methods.register("email", { required: "Email is required" })} />
        <FormError name="email" />
      </FieldWrapper>

      <FieldWrapper label="Password">
        <Input type="password" {...methods.register("password", { required: "Password is required" })} />
        <FormError name="password" />
      </FieldWrapper>

      <button type="submit">Submit</button>
    </FormProvider>
  );
};
