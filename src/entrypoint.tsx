import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id/posts" element={<Posts />} />
      <Route path="/:id/albums" element={<Albums />} />
    </Routes>
  </Router>
);
