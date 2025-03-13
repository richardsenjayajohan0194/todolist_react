interface Props{
    classname: string;
    button_name: string;
}

const Button = ({ classname, button_name }: Props) => {
    return (
      <div className={classname}>
        <button type="submit" className="btn btn-primary">{button_name}</button>
      </div>
    );
}

export default Button;