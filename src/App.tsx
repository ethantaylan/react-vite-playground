import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/app-layout/app-layout";
import { Component } from "./components/app-layout/component";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path=":name" element={<Component />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
