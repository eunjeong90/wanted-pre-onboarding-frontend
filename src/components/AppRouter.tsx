import { Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Todo from "pages/Todo";

const Router = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default Router;
