import React, { Dispatch, SetStateAction, useState } from "react";
import { deleteTodo, getTodo, updateTodo } from "lib/client/api/toDo/toDoApi";
import { IToDoData } from "types/toDoType";

interface IToDoProps {
  data: IToDoData;
  setToDo: Dispatch<SetStateAction<IToDoData[]>>;
}
const TodoList = ({ data, setToDo }: IToDoProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateValue, setUpdateValue] = useState(data);

  const onUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, isCompleted } = updateValue;
    const update = e.target.value;
    setUpdateValue({ id, todo: update, isCompleted });
  };
  const onUpdateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo(updateValue).then(() => {
      getTodo().then((res) => setToDo(res.data));
    });
    setIsUpdate(false);
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
    <li key={data.id}>
      <label>
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => onCheckTodo(data)}
        />
        {isUpdate ? (
          <form onSubmit={onUpdateTodo}>
            <input
              data-testid="modify-input"
              id="modifyInput"
              onChange={onUpdateHandler}
              value={updateValue.todo}
            />
            <button data-testid="submit-button" type="submit">
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={() => setIsUpdate(false)}
            >
              취소
            </button>
          </form>
        ) : (
          <span>{data.todo}</span>
        )}
      </label>
      <button data-testid="modify-button" onClick={() => setIsUpdate(true)}>
        수정
      </button>
      <button data-testid="delete-button" onClick={() => onDeleteTodo(data.id)}>
        삭제
      </button>
    </li>
  );
};

export default TodoList;
