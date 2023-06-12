import clientApi from "../clientApi";

export const createTodo = async (todo: string) => {
  await clientApi({
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
