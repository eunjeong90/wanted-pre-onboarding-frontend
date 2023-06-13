import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputs from "lib/client/hooks/useInputs";
import { authPost } from "lib/client/api/auth/authApi";
import { ContentBox } from "styles/shared";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/todo");
  }, []);

  const [signInInputs, onHandler] = useInputs({
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
    if (!emailRegex.test(signInInputs.email)) {
      setEmailCheck({
        validation: false,
        msg: "@가 포함되어야 합니다.",
      });
    } else {
      setEmailCheck({
        validation: true,
        msg: "",
      });
    }
  }, [signInInputs]);
  useEffect(() => {
    const password = signInInputs.password;
    if (password?.length < 8) {
      setPasswordCheck({
        validation: false,
        msg: "8자 이상 입력해주세요.",
      });
    } else {
      setPasswordCheck({
        validation: true,
        msg: "",
      });
    }
  }, [signInInputs]);

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authPost(signInInputs, "signin")
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        console.log(JSON.stringify(res, null, 2));
        navigate("/todo");
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContentBox>
      <h2>로그인</h2>
      <form onSubmit={onSignIn}>
        <label htmlFor="email">
          아이디
          <input
            type="text"
            id="email"
            data-testid="email-input"
            value={signInInputs.email}
            onChange={onHandler}
            placeholder="example@example.com"
          />
        </label>
        {signInInputs.email && (
          <p
            style={{
              color: emailCheck.validation ? "black" : "red",
              fontWeight: "bold",
            }}
          >
            {emailCheck.msg}
          </p>
        )}
        <label htmlFor="password">
          비밀번호
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={signInInputs.password}
            onChange={onHandler}
            placeholder="8자 이상 입력"
          />
        </label>
        {signInInputs.password && (
          <p
            style={{
              color: passwordCheck.validation ? "black" : "red",
              fontWeight: "bold",
            }}
          >
            {passwordCheck.msg}
          </p>
        )}
        <button
          type="submit"
          data-testid="signin-button"
          disabled={
            emailCheck.validation && passwordCheck.validation ? false : true
          }
        >
          로그인
        </button>
      </form>
    </ContentBox>
  );
};

export default SignUp;
