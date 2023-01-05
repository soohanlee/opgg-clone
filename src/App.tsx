import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@app/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={"로딩"}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
