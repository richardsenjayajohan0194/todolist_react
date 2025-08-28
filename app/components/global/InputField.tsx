import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
    label: string;
    name: string;
    register: ReturnType<UseFormRegister<FieldValues>>; // Adjust the type according to your form schema
    placeholder?: string;
    type?: string;
    error?: string;
    area: boolean;
}
const InputField = ({ label, name, register, placeholder, type, error, area }:Props) => {
    return (
        <div>
            <label>{label}</label>
            {area === false ? (
                <input
                    {...register} // Register the input with react-hook-form
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="form-control"
                />
            ) : (
                <textarea
                    {...register} // Register the input with react-hook-form
                    name={name}
                    placeholder={placeholder}
                    className="form-control"
                />
            )}
            {error && <small className="text-danger">{error}</small>} {/* Display error message */}
        </div>
    );
};
export default InputField;
