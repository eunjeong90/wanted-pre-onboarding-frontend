import React, { useCallback, useState } from "react";
import { IAuthData } from "types/authType";

interface IInput extends IAuthData {
  [key: string]: string;
}

const useInputs = (initValue: IInput) => {
  const [value, setValue] = useState(initValue);
  const onHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue({
        ...value,
        [e.target.id]: e.target.value,
      });
    },
    [value]
  );
  return [value, onHandler] as const;
};

export default useInputs;
