interface Props {
    children?: React.ReactNode;
    onSubmit?:() => void;
}

const FormToDo = ({children, onSubmit}: Props) => {
    return (
        <div className="tw-p-5 tw-item-center tw-justify-center tw-flex tw-w-[800px]">
            <form onSubmit={onSubmit} className="form-to-do tw-items-center tw-justify-center tw-bg-white tw-p-4 tw-rounded tw-shadow-sm tw-w-full">{children}</form>
        </div>
    );
}

export default FormToDo;