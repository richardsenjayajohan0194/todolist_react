"use client";

import FormLoginRegister from "../components/login_register/FormLoginRegister";
import Input from "../components/global/Input";
import ButtonLoginRegister from "../components/login_register/ButtonLoginRegister";
import axios from "axios";
import { userSchema } from "../components/login_register/FormValidation"; // Import the schema
import { useState, useEffect } from "react";

const Register = () => {
  const [user, setUser ] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  }); // Initialize error state with empty strings

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate user input against the schema
    const result = userSchema.safeParse(user);

    console.log(result);
    if (!result.success) {
      // If validation fails, set the errors state
      const validationErrors = result.error.formErrors.fieldErrors;

      setErrors({
        name: validationErrors.name?.[0] || "",
        username: validationErrors.username?.[0] || "",
        email: validationErrors.email?.[0] || "",
        password: validationErrors.password?.[0] || "",
      });
      return; // Stop the submission process
    }

    // Clear previous errors if validation is successful
    setErrors({
      name: "",
      username: "",
      email: "",
      password: "",
    });

    // Uncomment this block to enable the Axios request
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        user,
        { withCredentials: true },
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // Log errors whenever they change
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <FormLoginRegister onSubmit={handleSubmit} page_status={false}>
      <Input
        classname="mt-2"
        type="text"
        name_input="name"
        label="Name"
        placeholder="Name"
        onChange={(e) => setUser ((p) => ({ ...p, name: e.target.value }))}
        error={errors.name} // Pass the error message for the name field
      />
      <Input
        classname="mt-2"
        type="text"
        name_input="username"
        label="Username"
        placeholder="Username"
        onChange={(e) => setUser ((p) => ({ ...p, username: e.target.value }))}
        error={errors.username} // Pass the error message for the username field
      />
      <Input
        classname="mt-2"
        type="email"
        name_input="email"
        label="Email Address"
        placeholder="Enter email"
        onChange={(e) => setUser ((p) => ({ ...p, email: e.target.value }))}
        error={errors.email} // Pass the error message for the email field
      />
      <Input
        classname="mt-2"
        type="password"
        name_input="password"
        label="Password"
        placeholder="Password"
        onChange={(e) => setUser ((p) => ({ ...p, password: e.target.value }))}
        error={errors.password} // Pass the error message for the password field
      />
      <ButtonLoginRegister
        classname="d-grid mt-2"
        button_name={"Register"}
      />
    </FormLoginRegister>
  );
};

export default Register;