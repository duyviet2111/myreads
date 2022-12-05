import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById("root")
);
