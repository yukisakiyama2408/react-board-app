import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThreadIndex } from "./ThreadIndex";
import { ThreadNew } from "./ThreadNew";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreadIndex />} />
          <Route path="/thread/new" element={<ThreadNew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
