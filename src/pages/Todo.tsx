import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/signin");
  }, []);
  return <div>todo page</div>;
};

export default Todo;
