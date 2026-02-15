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
      <div className="tw-w-[45] tw-p-12 tw-rounded tw-bg-white">
        {page_status === true ? (
          <HeaderForm tag_header="h1" header={"Login"} />
        ) : (
          <HeaderForm tag_header="h1" header={"Register"} />
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
