import { memo } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  // type?: string;
  classname: string;
  error?: string;
  register?: ReturnType<UseFormRegister<FieldValues>>; // type of register("fieldName")
  area: boolean;
}

const InputField = ({ label, placeholder, register, area, error, name, classname, value }: Props) => {
  console.log("InputField Props:", {
    // type,
    name,
    label,
    value,
    placeholder,
    error,
  });

    return (
      <div className={classname}>
        <label className="tw-form-label">{label}</label>
        {area === false ? (
          <input
            {...register}
            name={name}
            // type={type}
            value={value}
            placeholder={placeholder}
            className="tw-form-control tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
          />
        ) : (
          <textarea
            {...register}
            value={value}
            placeholder={placeholder}
            className="tw-form-control tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded tw-h-20"
          />
        )}
        {error && <small className="tw-text-red-500">{error}</small>}
      </div>
    );
  };



export default memo(InputField);
