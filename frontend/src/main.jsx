import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/Header.css";
import "./style/Banner.css";
import "./style/Feature.css";
import "./style/Main.css";
import "./style/Footer.css";
import "./style/SignIn.css";
import { Header } from "./component/Header.jsx";
import { Home } from "./page/Home.jsx";
import { Footer } from "./component/Footer.jsx";
import { SignIn } from "./page/SignIn.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
