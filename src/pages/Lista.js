import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Lista() {
  const navigate = useNavigate();

  const [tarefas, settarefas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/tarefas")
      .then((res) => res.json())
      .then((res) => {
        settarefas(res);
      });
  }, []);

  const handleChange = (id, nome, feito) => {
    feito = !feito
    fetch("http://localhost:3002/tarefa/" + id, {
      method: 'PUT',
      body: JSON.stringify({
        nome: nome,
        feito: feito
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Lista de tarefas</h1>
            {tarefas.map((tarefa) => {
              return (
                <div className="row" id={tarefa.id}>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-header text-capitalize">{tarefa.nome}</h5>
                          <input type="checkbox" label="1" 
                            defaultChecked={tarefa.feito ? true : false} 
                            value={1} name="tarefaFeito" 
                            onChange={() => {handleChange(tarefa.id, tarefa.nome, tarefa.feito)}} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
