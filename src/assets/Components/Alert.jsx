import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertComponent({ error, success }) {
  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
    </div>
  );
}
export default AlertComponent;