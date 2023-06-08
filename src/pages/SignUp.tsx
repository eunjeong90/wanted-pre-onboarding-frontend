import React from "react";
import useInputs from "lib/hooks/useInputs";

const SignUp = () => {
  const [signUpInputs, onHandler] = useInputs();

  return (
    <div>
      <h2>회원가입</h2>
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
        <button type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
