import React from "react";
import { NavLink, useLocation, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import URL from "../lib/client/routerPath";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onRedirect = () => {
    if (!localStorage.getItem("token") && location.pathname === "/") {
      navigate("/signin");
    }
  };
  return (
    <Navigation>
      <NavList>
        {Object.keys(URL).map((urlKey: string) => {
          const urlObj = URL[urlKey];
          const currentMatch = useMatch(urlObj.path);
          return (
            <>
              <NavItem isActive={currentMatch !== null} onClick={onRedirect}>
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
