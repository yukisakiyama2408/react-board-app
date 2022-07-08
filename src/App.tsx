import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardIndex } from "./BoardIndex";
import { ThreadNew } from "./threadNew";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardIndex />} />
          <Route path="/thread/new" element={<ThreadNew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
