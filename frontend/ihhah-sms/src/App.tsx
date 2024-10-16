import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ClientePage from "./pages/cliente/cliente"
import HomePage from "./pages/home/homepage"
import PlanoPage from "./pages/plano/plano"
import MensagemPage from "./pages/mensagem/mensagem"

function App() {
 
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cliente" element={<ClientePage/>}/>
          <Route path="/plano" element={<PlanoPage/>}/>
          <Route path="/mensagem" element={<MensagemPage/>}/>

        </Routes>
      </main>

    </Router>
  )
}

export default App
