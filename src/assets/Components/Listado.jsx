import Table from 'react-bootstrap/Table'
import Title from './Title/Title.jsx';
import Buscador from './Buscador.jsx';

function Listado({ colaboradores, onChange, search }) {
  return (
    <>
      <Title />
      <Buscador onChange={onChange} search={search} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th width="200">Nombre</th>
            <th width="200">Correo</th>
            <th width="200">Edad</th>
            <th width="200">Cargo</th>
            <th width="200">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map(colaborador => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default Listado