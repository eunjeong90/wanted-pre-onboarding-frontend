import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodo } from "lib/client/api/toDo/toDoApi";
import { IToDoData } from "types/toDoType";
import MakeTodo from "components/MakeTodo";
import TodoList from "components/TodoList";
import { ContentBox, Heading } from "styles/shared";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/signin");
  }, []);

  const [toDo, setToDo] = useState<IToDoData[]>([]);
  useEffect(() => {
    getToDos();
  }, []);
  const getToDos = useCallback(() => {
    getTodo()
      .then((res) => {
        setToDo(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, [toDo]);

  return (
    <ContentBox>
      <Heading>오늘 할 일</Heading>
      <div>
        <MakeTodo getToDos={getToDos} />
      </div>
      <div>
        <div>
          <ul>
            {toDo.map((data: IToDoData) => (
              <TodoList key={data.id} data={data} getToDos={getToDos} />
            ))}
          </ul>
        </div>
      </div>
    </ContentBox>
  );
};

export default Todo;
