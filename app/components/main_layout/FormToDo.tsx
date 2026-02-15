interface Props {
    children?: React.ReactNode;
    onSubmit?:() => void;
}

const FormToDo = ({children, onSubmit}: Props) => {
    return (
        <div className="add-content p-5 align-item-center justify-content-center d-flex flex-fill">
            <form onSubmit={onSubmit} className="form-to-do bg-white p-3 rounded">{children}</form>
        </div>
    );
}

export default FormToDo;