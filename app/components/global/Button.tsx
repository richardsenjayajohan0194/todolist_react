import { memo } from "react";

interface Props {
  classname: string;
  button_name: string;
  disabled?: boolean;
}

const Button = ({
  classname,
  button_name,
  disabled,
}: Props) => {
  console.log("Button Render");
  return (
    <div className={classname}>
      <button className="btn btn-primary" type="submit" disabled={disabled}>
        {disabled ? "Loading..." : button_name}
      </button>
    </div>
  );
};

export default memo(Button);