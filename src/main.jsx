import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './assets/css/style.css';
import Home from "./Components/Home";
import RootLayout from "./Components/RootLayout";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/service" element={ <Service/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
      </Route>

    </Routes>
  </BrowserRouter>,
);

