import { IToDoData } from "types/toDoType";
import clientApi from "../clientApi";

export const createTodo = async (todo: string) => {
  return await clientApi({
    method: "post",
    url: `/todos`,
    data: {
      todo,
    },
  });
};
export const getTodo = async () => {
  return await clientApi({
    method: "get",
    url: `/todos`,
  });
};
export const updateTodo = async ({ id, isCompleted, todo }: IToDoData) => {
  return await clientApi({
    method: "put",
    url: `/todos/${id}`,
    data: { isCompleted, todo },
  });
};
export const deleteTodo = async (id: number) => {
  return await clientApi({
    method: "delete",
    url: `/todos/${id}`,
  });
};
