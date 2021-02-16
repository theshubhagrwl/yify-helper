import React from "react";
import Navbar from "./components/Navbar";
import { MyContextProvider } from "./Context/MyContext";
import Movies from "./components/Movies";

function App() {
  return (
    <MyContextProvider>
      <div>
        <Navbar />
        <Movies />
      </div>
    </MyContextProvider>
  );
}

export default App;
