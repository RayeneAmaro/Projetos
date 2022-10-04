import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro from "./pages/erro/Erro";
import Login from "./pages/login/Login";
import Descricao from "./pages/painel/descricao/Descricao";
import Painel from "./pages/painel/Painel";


const Rotas = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/painel' element={<Painel/>}/>
            <Route path='/filme/:id' element={<Descricao/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Rotas