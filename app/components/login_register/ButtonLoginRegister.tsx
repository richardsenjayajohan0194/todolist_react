import { memo } from "react";

interface Props {
  classname: string;
  button_name: string;
}

const ButtonLoginRegister = ({
  classname,
  button_name,
}: Props) => {
  console.log("ButtonLoginRegister rendered");
  return (
    <div className={classname}>
      <button className="tw-bg-blue-600 tw-hover:bg-blue-700 tw-text-white tw-py-1.5 tw-px-3 tw-mt-2 tw-border-blue-700 tw-rounded">
        {button_name}
      </button>
    </div>
  );
};

export default memo(ButtonLoginRegister);
