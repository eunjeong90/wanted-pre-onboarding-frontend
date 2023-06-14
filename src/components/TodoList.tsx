import React, { useState } from "react";
import { deleteTodo, updateTodo } from "lib/client/api/toDo/toDoApi";
import { IToDoData } from "types/toDoType";
import { TodoInput } from "styles/shared";
import styled from "styled-components";

interface IToDoProps {
  data: IToDoData;
  getToDos: () => void;
}
const TodoList = ({ data, getToDos }: IToDoProps) => {
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
      getToDos();
    });
    setIsUpdate(false);
  };
  const onCheckTodo = ({ id, isCompleted, todo }: IToDoData) => {
    isCompleted = !isCompleted;
    updateTodo({ id, isCompleted, todo }).then(() => {
      getToDos();
    });
  };
  const onDeleteTodo = (id: number) => {
    deleteTodo(id).then(() => {
      getToDos();
    });
  };
  return (
    <TodoItem key={data.id}>
      <TodoLabel isUpdate={isUpdate}>
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => onCheckTodo(data)}
        />
        {isUpdate ? (
          <TodoUpdateForm onSubmit={onUpdateTodo}>
            <TodoInput
              data-testid="modify-input"
              id="modifyInput"
              onChange={onUpdateHandler}
              value={updateValue.todo}
            />
            <div>
              <TodoSmallBtn data-testid="submit-button" type="submit">
                제출
              </TodoSmallBtn>
              <TodoSmallBtn
                data-testid="cancel-button"
                onClick={() => setIsUpdate(false)}
              >
                취소
              </TodoSmallBtn>
            </div>
          </TodoUpdateForm>
        ) : (
          <span>{data.todo}</span>
        )}
      </TodoLabel>
      {isUpdate ? (
        ""
      ) : (
        <div>
          <TodoSmallBtn
            data-testid="modify-button"
            onClick={() => setIsUpdate(true)}
          >
            수정
          </TodoSmallBtn>
          <TodoSmallBtn
            data-testid="delete-button"
            onClick={() => onDeleteTodo(data.id)}
          >
            삭제
          </TodoSmallBtn>
        </div>
      )}
    </TodoItem>
  );
};

export default TodoList;

const TodoLabel = styled.label<{ isUpdate: boolean }>`
  display: ${({ isUpdate }) => (isUpdate ? "flex" : "inherit")};
  width: ${({ isUpdate }) => (isUpdate ? "100%" : "inherit")};
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;
const TodoSmallBtn = styled.button`
  padding: 10px;
  margin-left: 5px;
`;
const TodoUpdateForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
