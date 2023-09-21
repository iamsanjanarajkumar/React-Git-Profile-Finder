import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu";
import Home from "./components/Home";
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Pnf from "./components/Pnf";

function App(props){
  return(
    <BrowserRouter>
    <Menu/>

    <Routes>
      <Route path= {`/`} element={<Home/>}/>
      <Route path={`/ex1`} element={<Ex1/>}/>
      <Route path ={`/ex2`} element={<Ex2/>}/>
      <Route path= {`/*`} element={<Pnf/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App