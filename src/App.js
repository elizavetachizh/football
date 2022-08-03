import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home";
import ContainerPage from "./components/Container";
import Final from "./components/final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/api/groups" element={<ContainerPage />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}

export default App;
