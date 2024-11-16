import React from "react";

import { Welcome, StepOne, StepTwo, Thanks } from './pages';

import "./App.css";
import "./styles/main.css";

export const App = () => {
  return (
    <div className="App">
      <Welcome />
      {/* <Welcome /> */}
      {/* <StepOne />
      <StepTwo />
      <Thanks /> */}
    </div>
  );
};
