import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="grow min-h-screen">
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
