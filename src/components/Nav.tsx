import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styled from "styled-components";

export interface IUrlInfo {
  path: string;
  name: string;
}

export interface IUrl {
  [key: string]: IUrlInfo;
}

const URL: IUrl = {
  main: { path: "/main", name: "메인" },
  todo: { path: "/todo", name: "오늘할일" },
  signin: { path: "/signin", name: "로그인" },
  signup: { path: "/signup", name: "회원가입" },
};

const Nav = () => {
  return (
    <Navigation>
      <NavList>
        {Object.keys(URL).map((urlKey: string) => {
          const currentMatch = useMatch(urlKey);
          const urlObj = URL[urlKey];
          return (
            <>
              <NavItem isActive={currentMatch !== null}>
                <NavLink to={urlObj.path}>{urlObj.name}</NavLink>
              </NavItem>
            </>
          );
        })}
      </NavList>
    </Navigation>
  );
};

const Navigation = styled.nav`
  width: 30%;
`;
const NavList = styled.ul`
  height: 100vh;
`;
const NavItem = styled.li<{ isActive: boolean }>`
  padding: 10px 0 10px 5px;
  font-size: 25px;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  color: ${({ isActive }) => (isActive ? "#2a2ac6" : "black")};
`;
export default Nav;
