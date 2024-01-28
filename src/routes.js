import {BrowserRouter, Routes, Route, Form, } from
"react-router-dom"
import Header from "./pages/HEADER/Header"
import Watch from "./pages/Watch/watch"
import Home from "./pages/Home/home"
function AppRoutes(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/watch" element={<Watch/>}></Route>
            <Route path="*" element={<Watch/>}></Route>
         </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes