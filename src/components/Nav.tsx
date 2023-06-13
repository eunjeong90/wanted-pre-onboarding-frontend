import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <NavLink to="/">메인</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/todo">오늘할일</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signin">로그인</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">회원가입</NavLink>
        </NavItem>
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
const NavItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  padding: 10px 0 10px 5px;
`;
export default Nav;
