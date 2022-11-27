import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes }  from 'firebase/auth'

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.action";

import { SignUpContainer, H2 } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("can not create user, email already in use");
      } else {
        console.error("user creation encountered error: ", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <H2>Don't have an account</H2>
      <span>Sign up with your email and password</span>
      <form onSubmit={() => handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={() => handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={() => handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={() => handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={() => handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
