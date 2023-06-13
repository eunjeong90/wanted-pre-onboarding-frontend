import React from "react";
import AppRouter from "./AppRouter";
import Nav from "./Nav";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <AppRouter />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;
