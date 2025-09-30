import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import "./index.css";
import Quiz from "./Quiz.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:nickname" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
);
