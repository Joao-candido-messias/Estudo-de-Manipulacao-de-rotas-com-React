import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/menu";
import RodaPe from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./componentes/Post"
import NaoEncontrada from "./paginas/naoEncontrada";



function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
        </Route>
        
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <RodaPe/>
    </BrowserRouter>
  )
}

export default AppRoutes;
