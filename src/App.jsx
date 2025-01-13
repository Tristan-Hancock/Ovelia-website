import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import About from "./pages/About";


export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/Ovelia-website" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </>
  );
}
