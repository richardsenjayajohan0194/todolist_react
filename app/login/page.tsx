"use client"

import FormLoginRegister from "../components/login_register/FormLoginRegister"
import Input from "../components/global/Input";
import ButtonLoginRegister from "../components/login_register/ButtonLoginRegister";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(user);
    };
  return (
    <FormLoginRegister onSubmit={handleSubmit} page_status={true} >
      <Input
        classname="mt-2"
        type="email"
        label="Email Address"
        placeholder="Enter email"
        onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
      />
      <Input
        classname="mt-2"
        type="password"
        label="Password"
        placeholder="Password"
        onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
      />
      <ButtonLoginRegister
        classname="d-grid mt-2"
        button_name={"login"}
      />
    </FormLoginRegister>
  );
};

export default Login;
