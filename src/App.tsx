import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardIndex } from "./BoardIndex";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<BoardIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
