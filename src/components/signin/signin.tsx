import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./signinForm";
import { AuthForm } from "./authenticatorForm";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/authSlice";

export const Signin = () => {
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const [signinData, setSigninData] = useState<{
    id: number;
    secret?: string;
    otpauth_url?: string;
  }>({
    id: 0,
  });

  const success = () => {
    setRedirect(true);
    dispatch(setAuth(true));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  let form;
  if (signinData?.id === 0) {
    form = <LoginForm signinData={setSigninData} success={success}/>;
  } else {
    form = <AuthForm signinData={signinData} success={success}/>;
  }

  return <main className="form-signin">{form}</main>;
};
