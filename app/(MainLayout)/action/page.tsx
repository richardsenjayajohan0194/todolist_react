
"use client";
import { SubmitHandler, useForm } from "react-hook-form"; // Add useEffect if not already imported
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { FormSchema, toDoSchema } from "@/app/components/main_layout/FormValidationToDo";
import handleFormToDo from "@/app/components/main_layout/HandleFormToDo";
import FormToDo from "@/app/components/main_layout/FormToDo";
import HeaderForm from "@/app/components/global/HeaderForm";
import InputField from "@/app/components/global/InputField";
import Button from "@/app/components/global/Button";
import { memo, useEffect} from "react";
// import { UseUserSession } from "@/app/components/dashboard/UserInfo";

const Action = () => {
  console.log("Form Action Rendered");
  // const { isLoading, userId, isAuthenticated } = UseUserSession();

  // useEffect(() => {
  //   // Effect for handling session changes if needed
  // }, [isLoading, userId, isAuthenticated]);

 //Construct default values conditionally
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(toDoSchema), // Use Zod schema for validation
    reValidateMode: "onSubmit",
  });

   useEffect(() => {
  },[register, handleSubmit]);

  //For Register Account
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
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

  // if (isLoading) {
  //   return (
  //     <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
  //       <div>Loading...</div>
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
  //       <div>Please log in to access the dashboard.</div>
  //     </div>
  //   );
  // }

  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-full">
      <FormToDo onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-bg-white tw-items-center d-flex tw-flex-col tw-p-5 tw-rounded tw-w-full">
          <HeaderForm
            className="header tw-flex tw-justify-center"
            tag_header="h1"
            header="Todo List Action"
          />
          <div className="content-field tw-flex tw-flex-col tw-w-full">
            <InputField
              classname="title-field tw-flex tw-flex-col tw-w-full"
              register={register("title")}
              name="title"
              label="Title"
              placeholder="Title"
              error={errors.title?.message}
              area={false}
            />
            <InputField
              classname="content-field tw-flex tw-flex-col tw-w-full tw-mt-3"
              register={register("content")}
              label="Content"
              placeholder="Content"
              error={errors.content?.message}
              area={true}
            />
          </div>

          <Button
            classname="button_submit tw-flex tw-justify-center tw-mt-3"
            button_name="Submit"
          />
        </div>
      </FormToDo>
      <ToastContainer />
    </div>
  );
};

export default memo(Action);