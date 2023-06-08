import React, { useEffect, useState } from "react";
import useInputs from "lib/hooks/useInputs";

const SignUp = () => {
  const [signUpInputs, onHandler] = useInputs();
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
    if (!emailRegex.test(signUpInputs["email-input"])) {
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
  }, [signUpInputs]);
  useEffect(() => {
    const password = signUpInputs["password-input"];
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
  }, [signUpInputs]);

  return (
    <div>
      <h2>로그인</h2>
      <form>
        <label htmlFor="email">
          아이디
          <input
            type="text"
            id="email"
            data-testid="email-input"
            value={signUpInputs.email}
            onChange={onHandler}
            placeholder="example@example.com"
          />
        </label>
        {signUpInputs["email-input"] && (
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
            value={signUpInputs.password}
            onChange={onHandler}
            placeholder="8자 이상 입력"
          />
        </label>
        {signUpInputs["password-input"] && (
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
    </div>
  );
};

export default SignUp;
