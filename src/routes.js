import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/menu";
import RodaPe from "./componentes/Rodape";



function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div><p>Página não encontrada</p></div>}/>
      </Routes>
      <RodaPe/>
    </BrowserRouter>
  )
}

export default AppRoutes;
