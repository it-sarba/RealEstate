// src/components/FormProvider/FormProvider.jsx
import React from "react";
import PropTypes from "prop-types";
import { useForm, FormProvider as RHFProvider } from "react-hook-form";
import "./FormProvider.css";

const FormProvider = ({ children, methods, onSubmit, className = "" }) => {
  const formMethods = methods || useForm();

  return (
    <RHFProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </RHFProvider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object, // Optional external form methods
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default FormProvider;
