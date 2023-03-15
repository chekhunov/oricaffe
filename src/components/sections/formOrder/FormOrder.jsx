import React from 'react';
import * as yup from "yup";
import {useData} from "../../../utils/FormContext";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {Form} from "../../elements/Form";
import './formOrder.scss'
import {Input} from "../../elements/Input";
import ImgForm from "../../../assets/img/home/form-order.jpg"
import Button from "../../elements/button";
import {useTranslation} from "react-i18next";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const form_attributes = {
  button: "Submite",
  urlButton: "",
  sx: {
    width: "100%",
    height: '50px',
    marginTop: '40px',
    backgroundColor: "#2C397C",
    color: "#ffffff",
    borderRadius: "13px",
  },
};

const schema = yup.object().shape({
  firstName: yup
    .string().required("First name is a required field")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(2, "Name must be at least 2 characters"), lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(2, "Name must be at least 2 characters"), email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"), phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
})
const FormOrder = () => {
  const {t} = useTranslation();
  const {setValues, data} = useData();

  const history = useNavigate();
  const {register, handleSubmit, errors} = useForm({
    defaultValues: {
      firstName: data.firstName, lastName: data.lastName, email: data.email, phoneNumber: data.phoneNumber,
    }, mode: "onBlur", resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history("/home");
    setValues(data);
  };

  console.log(!!errors?.lastName)

  return (<div className="form-order">
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label className="subtitle" htmlFor="firstName">Submit your application</label>
      <Input
        {...register('value_name')}
        id="firstName"
        type="text"
        label="First Name"
        name="firstName"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
      />
      <Input
        {...register('value_name')}
        id="lastName"
        type="text"
        label="Last Name"
        name="lastName"
        error={!!errors?.lastName}
        helperText={errors?.lastName?.message}
      />
      <Input
        {...register('value_name')}
        id="email"
        type="email"
        label="Email"
        name="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        required
      />
      <Input
        {...register('value_name')}
        id="phoneNumber"
        type="tel"
        label="Phone Number"
        name="phoneNumber"
        error={!!errors?.phoneNumber}
        helperText={errors?.phoneNumber?.message}
      />
      <Button
        type="submit"
        sx={form_attributes.sx}
        link={form_attributes.urlButton}
        text={t(form_attributes.button)}
      />
    </Form>
    <img className="form-order__img" src={ImgForm} alt="form"/>
  </div>)
}

export default FormOrder;