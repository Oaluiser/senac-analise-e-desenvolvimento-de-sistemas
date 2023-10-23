import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, setFocus, watch } = useForm()
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [carros, setCarros] = useState([])

  function gravaDados(data) {
    setCarros([...carros, data])
    localStorage.setItem("carros", JSON.stringify([...carros, data]))

    reset()
    setFocus("Modelo")
  }

  function excluiCarro(carro) {
    setCarros(carros.filter((c) => c !== carro))
    localStorage.setItem("carros", JSON.stringify(carros.filter((c) => c !== carro)))
  }

  function filtrar() {
    setCarros(JSON.parse(localStorage.getItem("carros")).filter((c) => c.modelo === watch("pesquisaModelo")))

    if (watch("pesquisaModelo") === "") {
      setCarros(JSON.parse(localStorage.getItem("carros")))
    }
  }

  function verTodos() {
    setCarros(JSON.parse(localStorage.getItem("carros")))
  }

  const listaCarros = carros.map((carro, i) => (
    <tr key={i}>
      <td><img src={carro.foto} alt={`Foto do carro ${carro.nome}`}
        width={150} height={100} /></td>
      <td>{carro.modelo}</td>
      <td>{carro.marca}</td>
      <td>{carro.ano}</td>
      <td>{carro.preco}</td>
      <td>        
        <i className="bi bi-trash3 fs-4 text-danger ms-2"
        style={{ cursor: 'pointer' }}
        title="Excluir Carro"
          onClick={() => excluiCarro(carro)}
        ></i>
      </td>
    </tr>
  ))

  useEffect(() => {
    if (localStorage.getItem("carros")) {
      setCarros(JSON.parse(localStorage.getItem("carros")))
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo" width="48" height="40"
              className="d-inline-block align-text-top me-2" />
            App Revenda de Carros: Controle dos carros a venda.
          </a>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem dos Carros Disponíveis</span>
          <button className="btn btn-danger px-3"
            onClick={() => setOpen(true)}>
            Adicionar
          </button>
        </h2>

      <div className="d-flex justify-content-between">
        <button className="btn btn-danger px-3"
          onClick={() => setOpen2(true)}>
          Estatísticas
        </button>
          
        <div className="d-flex">
          <input type="text" className="form-control w-50" id="pesquisaModelo" {...register("pesquisaModelo")} />
          <button className="btn btn-danger px-3"
            onClick={() => filtrar()}>
            Filtrar Modelo
          </button>
        </div>
          
        <button className="btn btn-danger px-3"
            onClick={() => verTodos()}>
            Ver Todos
        </button>  
      </div>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {listaCarros}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="card">
          <div className="card-header">
            Inclusão do Carro
          </div>
          <form className="card-body" onSubmit={handleSubmit(gravaDados)}>
            <h5 className="card-title">Informe os Detalhes do carro</h5>
            <div className="mb-3">
              <label htmlFor="modelo" className="form-label">Modelo:</label>
              <input type="text" className="form-control"
                id="modelo" required {...register("modelo")} />
            </div>
            <div className="mb-3">
              <label htmlFor="marca" className="form-label">Marca:</label>
              <input type="text" className="form-control"
                id="marca" required {...register("marca")} />
            </div>
            <div className="mb-3">
              <label htmlFor="ano" className="form-label">Ano:</label>
              <input type="text" className="form-control"
                id="ano" required {...register("ano")} />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">Preço:</label>
              <input type="text" className="form-control"
                id="preco" required {...register("preco")} />
            </div>
            <div className="mb-3">
              <label htmlFor="foto" className="form-label">URL da Foto:</label>
              <input type="url" className="form-control"
                id="foto" required {...register("foto")} />
            </div>
            <input type="submit" value="Enviar"
              className="btn btn-primary px-5" />
          </form>
          {watch("foto") &&
            <img src={watch("foto")} alt="Foto do Carro"
              className='rounded mx-auto d-block'
              width={240} height={200} />
          }
        </div>
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)} center>
        <div className="card">
          <div className="card-header">
            Estatísticas
          </div>

          <div className="card-body">
            <h5 className="card-title">Quantidade de Carros</h5>
            <p className="card-text">{carros.length}</p>

            <h5 className="card-title">Preço Médio</h5>
            <p className="card-text">{(carros.reduce((acc, cur) => acc + parseFloat(cur.preco), 0) / carros.length).toFixed(2).replace(".", ",")}</p>

            <h5 className="card-title">Carro Mais Caro</h5>
            <p className="card-text">
              {carros.filter((c) => c.preco === carros.reduce((acc, cur) => acc > parseFloat(cur.preco) ? acc : parseFloat(cur.preco), 0).toString())[0]?.modelo ? `Modelo: ${carros.filter((c) => c.preco === carros.reduce((acc, cur) => acc > parseFloat(cur.preco) ? acc : parseFloat(cur.preco), 0).toString())[0].modelo}` : "Nenhum carro cadastrado"}
            </p>
            <p className="card-text">
              {`Valor: ${carros.reduce((acc, cur) => acc > parseFloat(cur.preco) ? acc : parseFloat(cur.preco), 0).toFixed(2).replace(".", ",")}`}
            </p>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default App