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
      <button className="tw-bg-blue-600 tw-hover:bg-blue-700 tw-text-white tw-py-1.5 tw-px-3 tw-mt-2 tw-border-blue-700 tw-rounded" type="submit" disabled={disabled}>
        {disabled ? "Loading..." : button_name}
      </button>
    </div>
  );
};

export default memo(Button);