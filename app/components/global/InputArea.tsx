interface Props {
    name: string;
    name_input: string;
    label: string;
    classname: string;
    placeholder: string;
}

const InputArea = ({name, name_input, label, classname, placeholder}:Props) => {
    return(
        <div className={classname}>
            <label htmlFor={name_input}>{label}</label>
            <textarea className="form-control" name={name} placeholder={placeholder}></textarea>
        </div>
    );
}

export default InputArea;