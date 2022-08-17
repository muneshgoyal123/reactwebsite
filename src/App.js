import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";
import Nabbar from "./Nabbar";
import Footer from "./Footer";
const App = () => {

    return (<>
        <Nabbar />
        <Routes>
            {/* <Route path="/" element={<About />} /> */}
            {/* if we want pass a props in our page */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />



        </Routes>
        <Footer />
    </>)
}
export default App;