import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Logo from "../components/template/Logo";

const app = props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React." />
        <Footer />
    </div>

export default app