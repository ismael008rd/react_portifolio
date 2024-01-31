import {BrowserRouter, Routes, Route, Form, } from
"react-router-dom"
import Header from "./pages/HEADER/Header"
import Watch from "./pages/Watch/watch"
import Home from "./pages/Home/home"
import Sotecnologia from "./pages/SeparadasPaginas/Sotecnologia/sotecn.js"
import Soprojetos from "./pages/SeparadasPaginas/Soprojetos/soprojetos.js"
function AppRoutes(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/soprojetos" element={<Soprojetos/>}></Route>
            <Route path="/tecnologias" element={<Sotecnologia/>}></Route>
            <Route path="*" element={<Watch/>}></Route>
         </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes