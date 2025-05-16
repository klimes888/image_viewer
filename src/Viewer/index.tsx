import "../styles/global.css";

import ReactDOM from "react-dom/client";
import Viewer from "./Viewer";
import { ImageProvider } from "../context/image.context.js";

ReactDOM.createRoot(document.getElementById("viewer-root")!).render(
  <ImageProvider>
    <Viewer />
  </ImageProvider>
);
