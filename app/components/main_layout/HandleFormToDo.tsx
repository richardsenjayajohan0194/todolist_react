// handleFormSubmit.ts
import { FormEvent } from "react";
import { toDoSchema, FormSchema } from "../main_layout/FormValidationToDo";

export const HandleFormToDo = (
    e: FormEvent<HTMLFormElement>,
    usetoast: () => void,
    setErrorMessages: (messages: string[]) => void
) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const content = formData.get('content');

    const dataToValidate = {
        title: title ? title.toString() : '',
        content: content ? content.toString() : ''
    };

    console.log("Data Content: ", dataToValidate);

    // Validate the data using Zod's safeParse
    const result = toDoSchema.safeParse(dataToValidate);
    
    if (result.success) {
        const validatedData: FormSchema = result.data;
        console.log(validatedData.title, validatedData.content);
        usetoast();
        setErrorMessages([]); // Clear previous errors
    } else {
        console.log("Validation errors:", result.error.errors);
        const errorMessages = result.error.errors.map(err => [err.path, err.message]);
        console.log(`Error Messages: ${errorMessages}`);
        // setErrorMessages(errorMessages); // Set error messages
    }
};
