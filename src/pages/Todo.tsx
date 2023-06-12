import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "lib/client/api/toDo/toDoApi";
import { IToDoData } from "types/toDoType";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/signin");
  }, []);

  const todoInputRef = useRef<HTMLInputElement>(null);
  const [toDo, setToDo] = useState<IToDoData[]>([]);

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
      createTodo(todoValue);
      todoInputRef.current.value = "";
    }
  };

  const onCheckTodo = ({ id, isCompleted, todo }: IToDoData) => {
    isCompleted = !isCompleted;
    updateTodo({ id, isCompleted, todo }).then(() => {
      getTodo().then((res) => setToDo(res.data));
    });
  };

  const onDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then((res) => console.log(res))
      .then(() => {
        getTodo().then((res) => setToDo(res.data));
      });
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
            {toDo.map((data: IToDoData) => (
              <li key={data.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={data.isCompleted}
                    onChange={() => onCheckTodo(data)}
                  />
                  <span>{data.todo}</span>
                </label>
                <button data-testid="modify-button">수정</button>
                <button
                  data-testid="delete-button"
                  onClick={() => onDeleteTodo(data.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
