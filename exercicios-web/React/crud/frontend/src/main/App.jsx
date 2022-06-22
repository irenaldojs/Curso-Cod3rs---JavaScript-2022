import React from "react";
import './App.css';
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Logo from "../components/template/Logo";

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>