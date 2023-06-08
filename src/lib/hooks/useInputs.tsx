import React, { useCallback, useState } from "react";

const useInputs = () => {
  const [value, setValue] = useState<{
    [key: string]: string;
  }>({});
  const onHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const testId = e.target.dataset["testid"] as string;
      setValue({
        ...value,
        [testId]: e.target.value,
      });
      console.log(value);
    },
    [value]
  );
  return [value, onHandler] as const;
};

export default useInputs;
