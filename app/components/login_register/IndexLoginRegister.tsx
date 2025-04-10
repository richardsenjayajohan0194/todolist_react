"use client";

import FormLoginRegister from "../login_register/FormLoginRegister";
import Input from "../global/Input";
import ButtonLoginRegister from "../login_register/ButtonLoginRegister";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, FormSchema } from "./FormValidation"; // Import the schema
import { useRouter } from 'next/navigation';
import search from "@/utils/search";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  page_status: boolean;
}

const IndexLoginRegister = ({ page_status }: Props) => {
  const router = useRouter();

  const [massage, setMassage] = useState("");
  const [email, setEmail] = useState("");

  // Construct default values conditionally
  const defaultValues = {
    ...(page_status === false && {
      name: "",
      username: "",
    }),
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(userSchema), // Use Zod schema for validation
    defaultValues,
  });

  const onSubmit = async (data: FormSchema) => {
    console.log("Form Data:", data);
    const Route = page_status === false ? "/register" : "/login";
    try {
      const response = await axios.post(
        `http://localhost:3000/api/${Route}`,
        data,
        { withCredentials: true }
      );
      const res = await response.status;
      console.log("Response from server:", res);
      router.push(Route === "/register" ? "/login" : "/register");
    } catch (error) {
      console.error("Error posting data:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (email) {
        search(email, setMassage, `api/register/checkemail`); // Call the search function
      }
    }, 1000); // Debounce delay

    console.log("Halo ini adalah email: ",email);

    return () => {
      clearTimeout(handler); // Cleanup the timeout on unmount or when username changes
    };
  }, [email]);


  return (
    <FormLoginRegister onSubmit={handleSubmit(onSubmit)} page_status={page_status}>
      {page_status === false && (
        <>
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
              // onChange={(e) => {
              //   field.onChange(e); // Call the original onChange from React Hook Form
              // }}
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
        </>
      )}
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
            error={errors.email?.message || massage} // Pass the error message for the email field
            onChange={(e) => {
              field.onChange(e); // Call the original onChange from React Hook Form
              setMassage("");
              setEmail(e.target.value);
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
            // onChange={(e) => {
            //   field.onChange(e); // Call the original onChange from React Hook Form
            // }}
          />
        )}
      />
      <ButtonLoginRegister classname="d-grid mt-2" button_name={"Register "} />
    </FormLoginRegister>
  );
};

export default IndexLoginRegister;