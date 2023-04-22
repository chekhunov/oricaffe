import React, { useRef } from "react";
import * as yup from "yup";
import { useData } from "../../../utils/FormContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../elements/Form";
import { Input } from "../../elements/Input";
import ImgForm from "../../../assets/img/home/form-order.jpg";
import Button from "../../elements/button";
import { useTranslation } from "react-i18next";
import { MAIN_ROUTE } from "../../../types/const";
import emailjs from "@emailjs/browser";

import "./formOrder.scss";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const form_attributes = {
  button: "Submite",
  urlButton: "",
  sx: {
    width: "100%",
    height: "50px",
    marginTop: "40px",
    backgroundColor: "#2C397C",
    color: "#ffffff",
    borderRadius: "13px",
  },
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is a required field")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(12, "to long"),
  comment: yup.string(),
});

const YOUR_SERVICE_ID = "service_5s2c2vf";
const YOUR_TEMPLATE_ID = "template_xv6ya99";
const YOUR_PUBLIC_KEY = "IQz6GZ3imUdOxD_Jd";

const FormOrder = () => {
  const { t } = useTranslation();
  const { form } = useRef();
  const { setValues, data } = useData();

  const history = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      phoneNumber: data.phoneNumber || "",
      comment: data.comment || "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (event) => {
    const sendData = {
      email: event.email,
      comment:
        "name: " +
        event.firstName +
        " " +
        event.lastName +
        " " +
        "phone: " +
        event.phoneNumber +
        " " +
        "comment: " +
        event.comment,
    };

    console.log(sendData);

    try {
      setValues(event);
      await emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, sendData, YOUR_PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error);
          }
        );
      reset();
      history(MAIN_ROUTE);
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    }
  };

  return (
    <div className="form-order">
      <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label className="subtitle" htmlFor="first_name">
          {t("submit_application")}
        </label>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!formState?.errors?.firstName}
          helperText={formState?.errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!formState?.errors?.lastName}
          helperText={formState?.errors?.lastName?.message}
        />
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!formState?.errors?.email}
          helperText={formState?.errors?.email?.message}
        />
        <Input
          {...register("phoneNumber")}
          id="phoneNumber"
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          error={!!formState?.errors?.phoneNumber}
          helperText={formState?.errors?.phoneNumber?.message}
        />
        <Input
          {...register("comment")}
          id="comment"
          type="text"
          label="Comment"
          name="comment"
          minRows={3}
          multiline
          error={!!formState?.errors?.comment}
          helperText={formState?.errors?.comment?.message}
        />

        <Button
          isSubmit
          sx={form_attributes.sx}
          text={t(form_attributes.button)}
        />
      </Form>

      <img className="form-order__img" src={ImgForm} alt="form" />
    </div>
  );
};

export default FormOrder;
