import { Routes, BrowserRouter,Route } from "react-router-dom";
import HomePage from "../Paginas/HomePage";
import QuienesSomos from "../Paginas/QuienesSomos";
import Contacto from "../Paginas/Contacto";
import Login from "../Paginas/Login";
import Registrar from "../Paginas/Registrar";
import Semilleria from "../Paginas/Semilleria";
import Verduras from "../Paginas/Verduras";
import Panaderia from "../Paginas/Panaderia";
import Minisuper from "../Paginas/Minisuper";


const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element={<HomePage/>}/>
            <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Registrar/>}/>
            <Route path="/Semilleria" element={<Semilleria/>}/>
            <Route path="/Verduleria" element={<Verduras/>}/>
            <Route path="/Panaderia" element={<Panaderia/>}/>
            <Route path="/Minisuper" element={<Minisuper/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;