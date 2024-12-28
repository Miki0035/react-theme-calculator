import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  currentThemeIndex: number;
  displayText: string;
  setCurrentThemeIndex: Dispatch<SetStateAction<number>>;
  setDisplayText: Dispatch<SetStateAction<string>>;
};
