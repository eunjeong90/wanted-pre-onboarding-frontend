import clientApi from "../clientApi";
import { IAuthData } from "types/authType";

export const authPost = async (data: IAuthData, url: string) => {
  return await clientApi({
    method: "post",
    url: `/auth/${url}`,
    data,
  });
};
