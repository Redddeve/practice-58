import React from "react";
import Register from "./components/BaseForm/Register";
import { RegisterUnControlled } from "./components/RegisterUnControlled/RegisterUnControlled";

const App = () => {
  return (
    <>
      <Register />
      <RegisterUnControlled />
    </>
  );
};

export default App;
