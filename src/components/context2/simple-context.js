// https://reactjs.org/docs/context.html
import { createContext } from "react";

export const ThemeContext = createContext("light");
export const SimpleContext = createContext({ name: "" });
