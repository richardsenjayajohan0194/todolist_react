import debounce from "lodash.debounce";
import { memo } from "react";

interface Props {
  classname: string;
  type: string;
  name_input?: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Accepts an event parameter
  error?: string;
}

const Input = ({
  classname,
  type,
  name_input,
  label,
  placeholder,
  onChange,
  error
}: Props) => {

  console.log("Input Props:", {
    classname,
    type,
    name_input,
    label,
    placeholder,
    error,
  });
  return (
    <div className={classname}>
      <label htmlFor={name_input || type}>{label}</label>
      <input
        type={type}
        name={name_input || type} // Use type as default if name_input is not provided
        placeholder={placeholder}
        className="form-control"
        onChange={onChange} // Pass the onChange prop to the input
      />
      {error && <small className="text-danger">{error}</small>} {/* Display error message */}
    </div>
  );
};

export default Input;
