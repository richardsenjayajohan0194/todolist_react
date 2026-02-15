"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, toDoSchema } from "./FormValidationToDo";
import handleFormToDo from "./HandleFormToDo";
import axios from "axios";
import FormToDo from "./FormToDo";
import HeaderForm from "../global/HeaderForm";
import InputField from "../global/InputField";
import Button from "../global/Button";
import { ToastContainer } from "react-toastify";
import { memo } from "react";


const FormAction = () => {
  //Form Action
  console.log("Action Page Render");
  
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
    
    const res = await handleFormToDo(data, 1);

    if (res && "error" in res) {
      console.log("Validation error: ", res.error);
    } else if (axios.isAxiosError(res)) {
      console.log("Axios error: ", res);
    } else {
      console.log("Form submitted successfully");
      reset();
    }
  };

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
}

export default memo(FormAction);