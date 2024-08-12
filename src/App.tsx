import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/app-layout/app-layout";
import { Component } from "./components/app-layout/component";
import Home from "./home/page";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<Component />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
