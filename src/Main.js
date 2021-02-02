import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./css/index.scss";
import 'antd/dist/antd.css';

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
