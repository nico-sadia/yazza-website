import { useState } from "react";
import Navbar from "./components/Navbar";
import ContentContainer from "./pages/home/ContentContainer";

function App() {
  return (
    <>
      <div className="font-rubik w-screen">
        <Navbar />
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
