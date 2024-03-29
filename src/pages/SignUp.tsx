import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputs from "lib/client/hooks/useInputs";
import { authPost } from "lib/client/api/auth/authApi";
import {
  Heading,
  AuthInputLabel,
  AuthMsg,
  AuthSubmitBtn,
  ContentBox,
} from "styles/shared";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, []);

  const [signUpInputs, onHandler] = useInputs({
    email: "",
    password: "",
  });
  const [emailCheck, setEmailCheck] = useState({
    validation: false,
    msg: "",
  });
  const [passwordCheck, setPasswordCheck] = useState({
    validation: false,
    msg: "",
  });

  useEffect(() => {
    const emailRegex = /@/;
    if (!emailRegex.test(signUpInputs.email)) {
      setEmailCheck({
        validation: false,
        msg: "@가 포함되어야 합니다.",
      });
    } else {
      setEmailCheck({
        validation: true,
        msg: "유효한 이메일입니다.",
      });
    }
  }, [signUpInputs]);
  useEffect(() => {
    const password = signUpInputs.password;
    if (password?.length < 8) {
      setPasswordCheck({
        validation: false,
        msg: "8자 이상 입력해주세요.",
      });
    } else {
      setPasswordCheck({
        validation: true,
        msg: "유효한 비밀번호입니다.",
      });
    }
  }, [signUpInputs]);
  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authPost(signUpInputs, "signup")
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        navigate("/signin");
      })
      .catch((error) => {
        const errorRes = error.response.data;
        console.log(error.response);
        if (errorRes.statusCode === 400) {
          alert(`${errorRes.message}\n로그인 페이지로 이동합니다`);
          navigate("/signin");
        }
      });
  };

  return (
    <ContentBox>
      <Heading>회원가입</Heading>
      <form onSubmit={onSignUp}>
        <div>
          <AuthInputLabel htmlFor="email">
            <span>아이디</span>
            <input
              type="text"
              id="email"
              data-testid="email-input"
              value={signUpInputs.email}
              onChange={onHandler}
              placeholder="example@example.com"
            />
          </AuthInputLabel>
        </div>
        {signUpInputs.email && (
          <AuthMsg $validation={emailCheck.validation}>
            {emailCheck.msg}
          </AuthMsg>
        )}
        <div>
          <AuthInputLabel htmlFor="password">
            <span>비밀번호</span>
            <input
              type="password"
              id="password"
              data-testid="password-input"
              value={signUpInputs.password}
              onChange={onHandler}
              placeholder="8자 이상 입력"
            />
          </AuthInputLabel>
        </div>
        {signUpInputs.password && (
          <AuthMsg $validation={passwordCheck.validation}>
            {passwordCheck.msg}
          </AuthMsg>
        )}
        <AuthSubmitBtn
          type="submit"
          data-testid="signup-button"
          disabled={
            emailCheck.validation && passwordCheck.validation ? false : true
          }
        >
          회원가입
        </AuthSubmitBtn>
      </form>
    </ContentBox>
  );
};

export default SignUp;
