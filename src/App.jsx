import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ViewResume from "./pages/ViewResume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
