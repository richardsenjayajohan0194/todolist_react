import React from "react";

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    error?: string;
    area: boolean;
}
const InputField = ({ label, name, placeholder, type, area, error }:Props) => {
    return (
        <div>
            <label>{label}</label>
            {area === false ? (
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="form-control"
                />
            ) : (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className="form-control h-50"
                />
            )}
            {error && <small className="text-danger">{error}</small>} 
        </div>
    );
};
export default InputField;
