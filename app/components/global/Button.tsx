interface Props {
  classname: string;
  button_name: string;
  disabled: boolean;
}

const Button = ({
  classname,
  button_name,
  disabled,
}: Props) => {

  return (
    <div className={classname}>
      <button className="btn btn-primary" type="submit" disabled={disabled}>
        {disabled ? "Loading..." : button_name}
      </button>
    </div>
  );
};

export default Button;