"use client";

import FormLoginRegister from "../components/login_register/FormLoginRegister";
import Input from "../components/global/Input";
import ButtonLoginRegister from "../components/login_register/ButtonLoginRegister";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, FormSchema } from "../components/login_register/FormValidation"; // Import the schema
import axios from "axios";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    // trigger, // Add trigger to manually validate fields
  } = useForm<FormSchema>({
    resolver: zodResolver(userSchema), // Use Zod schema for validation
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    console.log("Form Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        data,
        { withCredentials: true }
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <FormLoginRegister onSubmit={handleSubmit(onSubmit)} page_status={false}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            classname="mt-2"
            type="text"
            label="Name"
            name_input="name"
            placeholder="Name"
            error={errors.name?.message} // Pass the error message for the name field
            onChange={(e) => {
              field.onChange(e); // Call the original onChange from React Hook Form
            }}
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            classname="mt-2"
            type="text"
            label="Username"
            name_input="username"
            placeholder="Username"
            error={errors.username?.message} // Pass the error message for the username field
            onChange={(e) => {
              field.onChange(e); // Call the original onChange from React Hook Form
            }}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            classname="mt-2"
            type="email"
            label="Email Address"
            name_input="email"
            placeholder="Enter email"
            error={errors.email?.message} // Pass the error message for the email field
            onChange={(e) => {
              field.onChange(e); // Call the original onChange from React Hook Form
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            classname="mt-2"
            type="password"
            label="Password"
            name_input="password"
            placeholder="Password"
            error={errors.password?.message} // Pass the error message for the password field
            onChange={(e) => {
              field.onChange(e); // Call the original onChange from React Hook Form
            }}
          />
        )}
      />
      <ButtonLoginRegister classname="d-grid mt-2" button_name={"Register "} />
    </FormLoginRegister>
  );
};

export default Register;