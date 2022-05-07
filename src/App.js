import "./App.scss"
import React from "react";
import Contact from "./components/Footer/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import Mobile from "./components/Main/Mobile/Mobile";
import Register from "./components/Register/Register";

import {  useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  const loginModal = useSelector(state => state.setting.loginModal)
  

  return (
    <div className="App">
        <Header />

        <Main />
        <Mobile />
        <Contact />
        <Footer />

        {loginModal && <Register />}
        <Login />

    </div>
  );
}

export default App;
