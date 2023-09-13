import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        className=" text-4xl
 text-center text-orange-500 border-b-2 bg-blue-400">
        Blp Dream Bangladesh
      </h1>
      <Home></Home>
    </>
  );
}

export default App;
