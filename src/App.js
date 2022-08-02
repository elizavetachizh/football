import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home";
import ContainerPage from "./components/Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/api/groups" element={<ContainerPage />} />
    </Routes>
  );
}

export default App;
