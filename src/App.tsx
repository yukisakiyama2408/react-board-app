import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThreadIndex } from "./Thread/ThreadIndex";
import { ThreadNew } from "./Thread/ThreadNew";

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
