import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function NovaTarefa() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    // Prevent the browser from reloading the page
    e.preventDefault(); // Read the form data

    const form = e.target;
    const formData = new FormData(form);
    const json = Object.fromEntries(formData.entries()); // You can pass formData as a fetch body directly:

    fetch("http://localhost:3002/tarefas", {
      method: "POST",
      body: JSON.stringify({
        nome: json.postTitulo,
        feito: json.postFeito
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(json => {
      navigate("/");
    });
  };

  return <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Nova Tarefa</h1>
          <Form method="post" id="cadastrar-post" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postTitulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Digite o título da tarefa" name="postTitulo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postFeito">
              <Form.Check type="checkbox" label="1" value={1} name="postFeito" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </>;
}

export { NovaTarefa as default };