'use client'

import { usePathname } from "next/navigation";
import HeaderForm from "./HeaderForm";
import UseToast from '../main_layout/UseToast';
import Button from "./Button";
import { useContext, useState } from "react";
import { UserSessionContext } from "../dashboard/UserInfo";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { FormSchema, toDoSchema } from "../main_layout/FormValidationToDo";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";

const AddContent = () => {
    const pathname = usePathname();
    const userContext = useContext(UserSessionContext);
    const userName = userContext?.session?.user?.name || "Unknown";
    const { usetoast } = UseToast();
    const [isDisabled, setIsDisabled] = useState(false);
    

    const defaultValues = {
        title: "",
        content: "",
    };
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(toDoSchema), // Use Zod schema for validation
        defaultValues,
    });

    if (pathname === "/dashboard") {
        console.log("AddContent rendered for Dashboard");

        return (
            <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
                <HeaderForm tag_header="h1" header={`Welcome, ${userName}`} />
            </div>
        );
    }

    if (pathname === "/action") {
        console.log("AddContent rendered for Action");

        const onSubmit = async (data: FormSchema) => {
            console.log("Datanya adalah: ", data);
            console.log("Form submitted successfully");
            setIsDisabled(true);
            console.log("Button clicked!");

            setTimeout(() => {
                setIsDisabled(false);
                // Call the toast function on successful submission
            }, 2000);
            usetoast();
        }
        return (
            <div className="add-content bg-success vh-100 d-flex flex-fill justify-content-center align-items-center p-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="display row bg-white align-items-center d-flex">
                        <HeaderForm className="header d-flex justify-content-center" tag_header="h1" header="Todo List Action" />
                        <div className="content-field">
                            <InputField 
                                label="Title" 
                                name="title" 
                                placeholder="Title" 
                                register={register('title')} // Pass the register function directly
                                error={errors.title?.message} 
                                area={false} 
                            />
                            <InputField 
                                label="Content" 
                                name="content" 
                                placeholder="Content" 
                                register={register('content')} // Pass the register function directly
                                error={errors.content?.message} 
                                area={true} 
                            />
                        </div>
                        <Button 
                            classname="button_submit d-flex justify-content-center mt-3 mb-3" 
                            button_name={'Submit'}
                            disabled={isDisabled}
                        />
                        <ToastContainer />
                    </div>
                </form>
            </div>
        );
    }

    return null; // Optionally handle other paths or show a message
}

export default AddContent;