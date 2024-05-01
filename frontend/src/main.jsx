import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store } from "./services/store.js";
import "./style/Header.css";
import "./style/Banner.css";
import "./style/Feature.css";
import "./style/Main.css";
import "./style/Footer.css";
import "./style/SignIn.css";
import "./style/TransactionCard.css";
import "./style/EditButton.css";
import "./style/Welcome.css";
import { Header } from "./component/Header.jsx";
import { Home } from "./page/Home.jsx";
import { Footer } from "./component/Footer.jsx";
import { SignIn } from "./page/SignIn.jsx";
import { User } from "./page/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  // </Provider>
);
