import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import LayoutPrincipal from "./components/LayoutPrincipal/LayoutPrincipal";
import "./styles/style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <LayoutPrincipal/>
      </BrowserRouter>
    </React.StrictMode>
);
