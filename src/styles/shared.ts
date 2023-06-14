import styled from "styled-components";

export const ContentBox = styled.div`
  width: 70%;
  padding: 10px 0 10px 0;
`;
export const Heading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

/* 회원가입, 로그인 인증 페이지 공통 스타일 */
export const AuthWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* 투두리스트 공통 스타일 */
export const TodoInput = styled.input`
  padding: 10px;
  max-width: 500px;
  min-width: 450px;
  font-size: 16px;
`;
export const TodoBtn = styled.button`
  padding: 10px;
  margin-left: 5px;
  min-width: 100px;
`;
