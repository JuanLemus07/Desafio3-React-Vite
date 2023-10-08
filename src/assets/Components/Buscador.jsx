import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Buscador = ({ onChange, search }) => {
  return (
    <>
      <Form className="d-flex mt-5 mb-5">
        <Form.Control
          type="search"
          placeholder="Buscar un Colaborador"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={onChange}
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </>
  )
}
export default Buscador;