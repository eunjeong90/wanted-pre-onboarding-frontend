import { createTodo } from "lib/client/api/toDo/toDoApi";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { TodoBtn, TodoInput } from "styles/shared";

interface ITodoProps {
  getToDos: () => void;
}

const MakeTodo = ({ getToDos }: ITodoProps) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const onMakeTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoValue = todoInputRef.current?.value;
    console.log(todoValue);
    if (!todoValue) {
      alert("내용을 입력해주세요!");
      return;
    } else {
      createTodo(todoValue).then(() => getToDos());
      todoInputRef.current.value = "";
    }
  };

  useEffect(() => todoInputRef.current?.focus(), []);
  return (
    <TodoForm onSubmit={onMakeTodo}>
      <TodoInput
        data-testid="new-todo-input"
        id="todo"
        ref={todoInputRef}
        placeholder="할 일을 추가해보세요!"
      />
      <TodoBtn data-testid="new-todo-add-button">추가</TodoBtn>
    </TodoForm>
  );
};

export default MakeTodo;

const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
