interface Props {
    children?: React.ReactNode;
    onSubmit?:() => void;
}

const FormToDo = ({children, onSubmit}: Props) => {
    return (
        <div className="add-content bg-success vh-100 d-flex flex-fill justify-content-center align-items-center p-2">
            <form onSubmit={onSubmit} className="form-to-do bg-white p-3 rounded">{children}</form>
        </div>
    );
}

export default FormToDo;