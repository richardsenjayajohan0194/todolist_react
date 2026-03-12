import HeaderForm from "../global/HeaderForm";
import LinkLoginRegister from "./LinkLoginRegister";

interface Props {
  children: React.ReactNode; // Children elements to be rendered inside the form
  page_status: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Function to handle form submission
}

const FormLoginRegister = ({ children, page_status, onSubmit }: Props) => {
  return (
    <div className="template tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-blue-500">
      <div className="tw-w-[325] tw-p-12 tw-rounded tw-bg-white">
        {page_status === true ? (
          <HeaderForm tag_header="h1" header={"Login"}  className="tw-text-3xl tw-font-bold tw-pb-2"/>
        ) : (
          <HeaderForm tag_header="h1" header={"Register"} className="tw-text-3xl tw-font-bold tw-pb-2"/>
        )}
        <form onSubmit={onSubmit}>{children}</form>
        {page_status === true ? (
          <LinkLoginRegister
            src={"/register"}
            sentence={"No registered?"}
            link_sentence={"Register Now"}
          />
        ) : (
          <LinkLoginRegister
            src={"/login"}
            sentence={"Have Account?"}
            link_sentence={"Login"}
          />
        )}
      </div>
    </div>
  );
};

export default FormLoginRegister;
