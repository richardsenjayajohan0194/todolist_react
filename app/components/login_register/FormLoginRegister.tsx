import HeaderForm from "../global/HeaderForm";
import LinkLoginRegister from "./LinkLoginRegister";
import { memo } from "react";

interface Props {
  children: React.ReactNode; // Children elements to be rendered inside the form
  page_status: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void; // Function to handle form submission
}

const FormLoginRegister = ({ children, page_status, onSubmit }: Props) => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="w-45 p-5 rounded bg-white">
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

export default memo(FormLoginRegister);
