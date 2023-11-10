// Importando o necessario para fazer as rotas entre as paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importando as minhas paginas
import EncerrandoAtendimento from './Paginas/EncerrandoChamdo';
import Endereco from './Paginas/Endereco';
import IniciandoAtendimento from './Paginas/IniciandoAtendimento';
import Home from "./Paginas/Home"
import Cadastro from './Paginas/Cadastro';
function App() {
  

  return (
    <>
       {/* Criando a minha rota entre as paginas */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/inicio" element={<IniciandoAtendimento/>} />
          <Route path="/encerrar" element={<EncerrandoAtendimento/>} />
          <Route path="/endereco" element={<Endereco/>} />
          <Route path="/cadastrar" element={<Cadastro/>} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
