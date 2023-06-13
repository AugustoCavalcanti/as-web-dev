import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./pages/Lista";
import NovaTarefa from "./pages/NovaTarefa";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Lista />} />
            <Route path="adicionar-tarefa/" element={<NovaTarefa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
