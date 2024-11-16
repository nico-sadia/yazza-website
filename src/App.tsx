import { useState } from "react";
import Navbar from "./components/Navbar";
import ContentContainer from "./pages/home/ContentContainer";

function App() {
  return (
    <>
      <div className="font-rubik max-w-screen overflow-x-hidden">
        <Navbar />
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
