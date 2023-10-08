import { useState } from 'react'
import Formulario from './assets/Components/Formulario.jsx'
import Listado from './assets/Components/Listado.jsx'
import { BaseColaboradores } from './assets/BaseColaboradores.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, steSearch] = useState("");
  const handleChange = (e) => {
    steSearch(e.target.value);
  };
  const filterColaboradores = colaboradores.filter((c) => {
    if (c.nombre.toLowerCase().includes(search.toLowerCase()) ||
      c.correo.toLowerCase().includes(search.toLowerCase()) ||
      c.edad.toLowerCase().includes(search.toLowerCase()) ||
      c.cargo.toLowerCase().includes(search.toLowerCase()) ||
      c.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  })
  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador,
      id: colaboradores.length + 1,
    };
    setColaboradores([...colaboradores, colaboradorConId]);
  }
  return (
    <>
      <Listado colaboradores={filterColaboradores} onChange={handleChange} search={search} />
      <Formulario onSubmit={handleSubmit} />
    </>
  )
}

export default App