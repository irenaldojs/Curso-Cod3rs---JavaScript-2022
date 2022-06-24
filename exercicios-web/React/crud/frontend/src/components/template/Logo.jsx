import './Logo.css'
import React from "react";
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';


const _logo = props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>

export default _logo