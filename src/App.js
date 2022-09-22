import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conge from './components/conge';
import Employes from './components/employes';
import Salaire from './components/salaire';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Employes />} />
<Route path="salaire" element={<Salaire />} />
<Route path="conge" element={<Conge />} />
</Route>
</Routes>
    </BrowserRouter>
  );
}

export default App;

