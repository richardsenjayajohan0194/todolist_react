"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { UseUserSession }  from "@/app/components/global/UseUserSession";
import { FormSchema, toDoSchema } from "@/app/components/main_layout/FormValidationToDo";
import handleFormToDo from "@/app/components/main_layout/HandleFormToDo";
import FormToDo from "@/app/components/main_layout/FormToDo";
import HeaderForm from "@/app/components/global/HeaderForm";
import InputField from "@/app/components/global/InputField";
import Button from "@/app/components/global/Button";
import { memo, useEffect } from "react";

const Action = () => {
  console.log("Action Rendered");
  const { isLoading, userId, isAuthenticated } = UseUserSession();

  useEffect(() => {
    // Effect for handling session changes if needed
  }, [isLoading, userId, isAuthenticated]);

  // Construct default values conditionally
  const defaultValues = {
    title: "",
    content: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(toDoSchema), // Use Zod schema for validation
    defaultValues,
    reValidateMode: "onSubmit",
  });

  //For Register Account
  const onSubmit = async (data: FormSchema) => {
    console.log("Form Data:", data);
    
    const res = await handleFormToDo(data, "1");

    if (res && "error" in res) {
      console.log("Validation error: ", res.error);
    } else if (axios.isAxiosError(res)) {
      console.log("Axios error: ", res);
    } else {
      console.log("Form submitted successfully");
      reset();
    }
  };

  if (isLoading) {
    return (
      <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
        <div>Please log in to access the dashboard.</div>
      </div>
    );
  }

  return (
    <>
      <FormToDo onSubmit={handleSubmit(onSubmit)}>
        <div className="display row bg-white align-items-center d-flex">
          <HeaderForm
            className="header d-flex justify-content-center"
            tag_header="h1"
            header="Todo List Action"
          />
          <div className="content-field">
            <InputField
              classname="title-field"
              register={register("title")}
              name="title"
              label="Title"
              placeholder="Title"
              error={errors.title?.message}
              area={false}
            />
            <InputField
              classname="content-field"
              register={register("content")}
              label="Content"
              placeholder="Content"
              error={errors.content?.message}
              area={true}
            />
          </div>

          <Button
            classname="button_submit d-flex justify-content-center mt-3 mb-3"
            button_name="Submit"
          />
        </div>
      </FormToDo>
      <ToastContainer />
    </>
  );
};

export default memo(Action);