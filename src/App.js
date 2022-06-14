import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/shared/Footer";

import Navbar from "./components/shared/Navbar";

function App() {
  AOS.init();
  return (
    <>
      <div className=" bg-slate-700">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contacts></Contacts>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
