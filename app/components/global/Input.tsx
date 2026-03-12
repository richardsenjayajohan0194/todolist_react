import debounce from "lodash.debounce";
import { memo } from "react";

interface Props {
  classname: string;
  type: string;
  name_input?: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Accepts an event parameter
  error?: string;
}

const Input = ({
  classname,
  type,
  name_input,
  label,
  placeholder,
  onChange,
  error,
}: Props) => {
  console.log("Input Props:", {
    classname,
    type,
    name_input,
    label,
    placeholder,
    error,
  });

  //Create a debounced version of the onChange handler
  const handleChange = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Call onChange if it's defined
    }
  }, 1000);

  return (
    <div className={classname}>
      <label htmlFor={name_input || type}>{label}</label>
      <input
        type={type}
        name={name_input || type} // Use type as default if name_input is not provided
        placeholder={placeholder}
        className="tw-form-control tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
        onChange={handleChange} // Only assign handleChange if not disabled
      />
      {error && <small className="tw-text-red">{error}</small>} {/* Display error message */}
    </div>
  );
};

export default memo(Input);