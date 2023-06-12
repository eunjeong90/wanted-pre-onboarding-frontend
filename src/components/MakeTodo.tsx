import { createTodo } from "lib/client/api/toDo/toDoApi";
import { useRef, useEffect } from "react";

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
    <form onSubmit={onMakeTodo}>
      <input
        data-testid="new-todo-input"
        id="todo"
        ref={todoInputRef}
        placeholder="할 일을 추가해보세요!"
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};

export default MakeTodo;
