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
      <button className="btn btn-primary">
        {button_name}
      </button>
    </div>
  );
};

export default memo(ButtonLoginRegister);
