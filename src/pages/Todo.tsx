import { createTodo, getTodo } from "lib/client/api/toDo/toDoApi";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IToDoData } from "types/toDoType";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/signin");
  }, []);

  const todoInputRef = useRef<HTMLInputElement>(null);
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getTodo()
      .then((res) => {
        setToDo(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => todoInputRef.current?.focus());

  const onMakeTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoValue = todoInputRef.current?.value;
    if (!todoValue) {
      alert("내용을 입력해주세요!");
      return;
    } else {
      createTodo(todoValue)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

      todoInputRef.current.value = "";
    }
  };

  return (
    <>
      <div>
        <form onSubmit={onMakeTodo}>
          <input
            data-testid="new-todo-input"
            id="todo"
            ref={todoInputRef}
            placeholder="할 일을 추가해보세요!"
          />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
      </div>
      <div>
        <h2>오늘 할 일</h2>
        <div>
          <ul>
            <li>
              <label>
                <input type="checkbox" />
                <span>TODO 1</span>
              </label>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>TODO 2</span>
                <button data-testid="modify-button">수정</button>
                <button data-testid="delete-button">삭제</button>
              </label>
            </li>
            {toDo.map((todo: IToDoData) => (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" />
                  <span>{todo.todo}</span>
                </label>
                <button data-testid="modify-button">수정</button>
                <button data-testid="delete-button">삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
