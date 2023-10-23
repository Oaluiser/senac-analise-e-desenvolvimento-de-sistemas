import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, setFocus, watch } = useForm()
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [viagens, setViagens] = useState([])
  const [viagemAtual, setViagemAtual] = useState([])

  function gravaDados(data) {
    setViagens([...viagens, data])
    localStorage.setItem("viagens", JSON.stringify([...viagens, data]))

    reset()
    setFocus("destino")
  }

  function excluiViagem(viagem) {
    setViagens(viagens.filter((v) => v !== viagem))
    localStorage.setItem("viagens", JSON.stringify(viagens.filter((v) => v !== viagem)))
  }

  function alteraViagem(viagem) {
    setOpen3(true)
    setViagemAtual(viagem)
  }

  function alteraPreco() {
    localStorage.setItem("viagens", JSON.stringify(viagens.filter((v) => v !== viagemAtual)))

    viagemAtual.preco = watch("mudaPreco")

    localStorage.setItem("viagens", JSON.stringify([...viagens, viagemAtual]))

    setOpen3(false)
  }

  function consultaViagem(viagem) {
    setOpen2(true)
    setViagemAtual(viagem)
  }

  function filtrar() {
    setViagens(JSON.parse(localStorage.getItem("viagens")).filter((v) => v.destino === watch("pesquisaDestino")))

    if (watch("pesquisaDestino") === "") {
      setViagens(JSON.parse(localStorage.getItem("viagens")))
    }
  }

  function verTodos() {
    setViagens(JSON.parse(localStorage.getItem("viagens")))
  }

  const listaViagens = viagens.map((viagem, i) => (
    <tr key={i}>
      <td><img src={viagem.foto} alt={`Foto do carro ${viagem.destino}`}
        width={150} height={100} /></td>
      <td>{viagem.destino}</td>
      <td>{viagem.data}</td>
      <td>{viagem.duracao}</td>
      <td>{viagem.preco}</td>
      <td>        
        <i className="bi bi-airplane fs-4 text-danger ms-2"
        style={{ cursor: 'pointer' }}
        title="Consulta Viagem"
          onClick={() => consultaViagem(viagem)}
        ></i>
        <i className="bi bi-pencil-square fs-4 text-danger ms-2"
        style={{ cursor: 'pointer' }}
        title="Alterar Viagem"
          onClick={() => alteraViagem(viagem)}
        ></i>
        <i className="bi bi-trash3 fs-4 text-danger ms-2"
        style={{ cursor: 'pointer' }}
        title="Excluir Viagem"
          onClick={() => excluiViagem(viagem)}
        ></i>
      </td>
    </tr>
  ))

  useEffect(() => {
    if (localStorage.getItem("viagens")) {
      setViagens(JSON.parse(localStorage.getItem("viagens")))
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.webp" alt="Logo" width="48" height="30"
              className="d-inline-block align-text-top me-2" />
            App Viagens: Controle as viagens disponíveis.
          </a>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem dos Viagens Disponíveis</span>
          <button className="btn btn-danger px-3"
            onClick={() => setOpen(true)}>
            Adicionar
          </button>
        </h2>

      <div className="d-flex justify-content-end">
        <div className="d-flex">
          <input type="text" className="form-control w-50" id="pesquisaDestino" {...register("pesquisaDestino")} />
          <button className="btn btn-danger px-3"
            onClick={() => filtrar()}>
            Filtrar Destino
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
              <th>Destino</th>
              <th>Data</th>
              <th>Duração</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {listaViagens}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="card">
          <div className="card-header">
            Inclusão da Viagem
          </div>
          <form className="card-body" onSubmit={handleSubmit(gravaDados)}>
            <h5 className="card-title">Informe os Detalhes da Viagem</h5>
            <div className="mb-3">
              <label htmlFor="destino" className="form-label">Destino:</label>
              <input type="text" className="form-control"
                id="destino" required {...register("destino")} />
            </div>
            <div className="mb-3">
              <label htmlFor="data" className="form-label">Data:</label>
              <input type="text" className="form-control"
                id="data" required {...register("data")} />
            </div>
            <div className="mb-3">
              <label htmlFor="duracao" className="form-label">Duração:</label>
              <input type="text" className="form-control"
                id="duracao" required {...register("duracao")} />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">Preço:</label>
              <input type="text" className="form-control"
                id="preco" required {...register("preco")} />
            </div>
            <div className="mb-3">
              <label htmlFor="atracoes" className="form-label">Atraçoes:</label>
              <textarea type="text" className="form-control"
                id="atracoes" required {...register("atracoes")} />
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
            <img src={watch("foto")} alt="Foto da Viagem"
              className='rounded mx-auto d-block'
              width={240} height={200} />
          }
        </div>
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)} center>
        <div className="card">
          <div className="card-header">
            Detalhes da Viagem
          </div>

          <div className="card-body">
            <h5 className="card-title">Destino</h5>
            <p className="card-text">{viagemAtual.destino}</p>

            <h5 className="card-title">Data</h5>
            <p className="card-text">{viagemAtual.data}</p>

            <h5 className="card-title">Duração</h5>
            <p className="card-text">{viagemAtual.duracao}</p>

            <h5 className="card-title">Preço</h5>
            <p className="card-text">{viagemAtual.preco}</p>

            <h5 className="card-title">Atrações</h5>
            <p className="card-text">{viagemAtual.atracoes}</p>

            <h5 className="card-title">Foto</h5>
            <img src={viagemAtual.foto} alt="Foto da Viagem"
              className='rounded mx-auto d-block'
              width={240} height={200} />
          </div>
        </div>
      </Modal>

      <Modal open={open3} onClose={() => setOpen3(false)} center>
        <div className="card">
          <div className="card-header">
            Detalhes da Viagem
          </div>

          <div className="card-body">
            <h5 className="card-title">Preço</h5>
            <p className="card-text">{viagemAtual.preco}</p>

            <label htmlFor="mudaPreco" className="form-label">Novo Preço:</label>
            <input type="text" className="form-control"
              id="mudaPreco" required {...register("mudaPreco")} />
            <button className="btn btn-danger px-3"
              onClick={() => alteraPreco()}>
              Alterar Preço
            </button>
            
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default App