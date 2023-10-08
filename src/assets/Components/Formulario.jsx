import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AlertComponent from "./Alert";

function Formulario({onSubmit}) {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarCampos = (e) => {
    e.preventDefault()
    if (
      !colaborador.nombre ||
      !colaborador.email ||
      !colaborador.edad ||
      !colaborador.cargo ||
      !colaborador.telefono
    ){
      setError("Todos los campos son obligatorios")
      setSuccess("")
      return
    }
    setError("")
      setSuccess("Colaborador agregado exitosamente")

    onSubmit(colaborador)
    setColaborador({
      nombre: '',
      email: '',
      edad: '',
      cargo: '',
      telefono: ''
    })
  }
  return (
    <Container className="mt-5">
      <Form className="border p-4" onSubmit={validarCampos}>
        <h3>Colaborador Form</h3>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre del Colaborador"
            value={colaborador.nombre}
            onChange={(e) => setColaborador({ ...colaborador, nombre: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email del Colaborador"
            value={colaborador.email}
            onChange={(e) => setColaborador({ ...colaborador, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Edad del Colaborador"
            value={colaborador.edad}
            onChange={(e) => setColaborador({ ...colaborador, edad: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cargo del Colaborador"
            value={colaborador.cargo}
            onChange={(e) => setColaborador({ ...colaborador, cargo: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Telefono del Colaborador"
            value={colaborador.telefono}
            onChange={(e) => setColaborador({ ...colaborador, telefono: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <AlertComponent error={error} success={success}/>
    </Container>
  );
}
export default Formulario;