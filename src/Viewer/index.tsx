import "../styles/global.css.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import Viewer from "./Viewer";

ReactDOM.createRoot(document.getElementById("viewer-root")!).render(<Viewer />);
