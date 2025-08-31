'use client'

import { usePathname } from "next/navigation"; // Correct import for useActionState
import HeaderForm from "./HeaderForm";
import Button from "./Button";
import { useActionState, useContext } from "react"; // React hooks
import { UserSessionContext } from "../dashboard/UserInfo";
import { ToastContainer } from "react-toastify";
import InputField from "./InputField";
import handleFormToDo from "../main_layout/HandleFormToDo";

const AddContent = () => {
    const pathname = usePathname();
    const userContext = useContext(UserSessionContext);
    const userName = userContext?.session?.user?.name || "Unknown";
    const userId = userContext?.session?.user?.id || "";
    console.log("user Id:", userId);

    const handleFormToDoWithUser = (prevState: unknown, formData: FormData) => {
        
        return handleFormToDo(prevState, formData, userId);
        
    }

    // useActionState returns [data, action, isPending]
    const [data, action, isPending] = useActionState(handleFormToDoWithUser, { error: {} });

    // Extract error from data safely
    const errors = data?.error || {};

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
        return (
            <div className="add-content bg-success vh-100 d-flex flex-fill justify-content-center align-items-center p-2">
                <form action={action}>
                    <div className="display row bg-white align-items-center d-flex">
                        <HeaderForm className="header d-flex justify-content-center" tag_header="h1" header="Todo List Action" />
                        <div className="content-field">
                            <InputField
                                label="Title"
                                name="title"
                                placeholder="Title"
                                error={errors.title ? errors.title[0] : undefined} // use error from data
                                area={false}
                            />
                            <InputField
                                label="Content"
                                name="content"
                                placeholder="Content"
                                error={errors.content ? errors.content[0] : undefined} // use error from data
                                area={true}
                            />
                        </div>
                        <Button
                            classname="button_submit d-flex justify-content-center mt-3 mb-3"
                            button_name={'Submit'}
                            disabled={isPending}
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
