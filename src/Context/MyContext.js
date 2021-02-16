import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <MyContext.Provider
      value={{ loading, setLoading, searchTerm, setSearchTerm }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
