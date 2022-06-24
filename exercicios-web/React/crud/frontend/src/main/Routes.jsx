import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

const rotas = function (props) {

    return (
        <Routes>
            <Route exact path="/" element={<Home></Home>} ></Route>
            <Route exact path="/users" element={<UserCrud></UserCrud>} ></Route>
            <Route path="*" element={<Home></Home>} ></Route>
        </Routes>
    )

}

export default rotas