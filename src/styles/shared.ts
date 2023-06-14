import styled from "styled-components";

export const ContentBox = styled.div`
  width: 70%;
  padding: 10px 0 10px 0;
`;

/* 회원가입, 로그인 인증 페이지 공통 스타일 */
export const AuthWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AuthHeading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const AuthInputLabel = styled.label`
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  span {
    width: 15%;
  }
  input {
    padding: 10px;
    width: 90%;
  }
`;
export const AuthSubmitBtn = styled.button`
  width: 100%;
  padding: 20px;
  margin: 20px 0;
  font-size: 16px;
  border: none;
  color: ${({ disabled }) => (disabled ? "gray" : "white")};
  background-color: ${({ disabled }) =>
    disabled ? "rgb(226 226 236)" : "rgb(70 78 212)"};
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
`;
export const AuthMsg = styled.p<{ $validation: boolean }>`
  font-weight: 600;
  color: ${({ $validation }) => ($validation ? "black" : "red")};
`;
