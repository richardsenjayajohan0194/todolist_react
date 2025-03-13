interface Props {
  classname: string;
  button_name: string;
}

const ButtonLoginRegister = ({
  classname,
  button_name,
}: Props) => {
  return (
    <div className={classname}>
      <button className="btn btn-primary">
        {button_name}
      </button>
    </div>
  );
};

export default ButtonLoginRegister;
