import {BrowserRouter, Routes, Route, Form, } from
"react-router-dom"


import Home from "./pages/Home/home"

function AppRoutes(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
           
         </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes