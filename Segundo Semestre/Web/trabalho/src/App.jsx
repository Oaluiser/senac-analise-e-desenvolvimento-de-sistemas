import { useState } from "react"
import _ from "lodash"
import { useForm } from 'react-hook-form'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2 = _.shuffle(array)

function App() {
  const { register, handleSubmit, reset } = useForm()
  const [acertou, setAcertou] = useState(false)
  const [tentativa, setTentativa] = useState(0)
  const [bloquearClick, setBloquearClick] = useState(false)
  const [sorte, setSorte] = useState("")
  const [adivinha, setAdivinha] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [valor, setValor] = useState("")
  const [img1, setImg1] = useState('./poke' + array2[0] + '.png')
  const [img2, setImg2] = useState('./poke' + array2[1] + '.png')
  const [img3, setImg3] = useState('./poke' + array2[2] + '.png')
  const [img4, setImg4] = useState('./poke' + array2[3] + '.png')
  const [img5, setImg5] = useState('./poke' + array2[4] + '.png')
  const [img6, setImg6] = useState('./poke' + array2[5] + '.png')
  const [img7, setImg7] = useState('./poke' + array2[6] + '.png')
  const [img8, setImg8] = useState('./poke' + array2[7] + '.png')
  const [img9, setImg9] = useState('./poke' + array2[8] + '.png')
  const [img10, setImg10] = useState('./poke' + array2[9] + '.png')

  const numeroMaximoTentativas = 1

  function trocaFigura() {
    if (tentativa < numeroMaximoTentativas) {
      setTentativa(tentativa + 1)

      setImg1("./verso.png")
      setImg2("./verso.png")
      setImg3("./verso.png")
      setImg4("./verso.png")
      setImg5("./verso.png")
      setImg6("./verso.png")
      setImg7("./verso.png")
      setImg8("./verso.png")
      setImg9("./verso.png")
      setImg10("./verso.png")

      const indiceSorteado = Math.floor(Math.random() * array.length)
      const sorte = './poke' + array2[indiceSorteado] + '.png'
      setSorte(sorte)

      setAdivinha(<span className="text-danger">Onde está o pokemon?</span>)

      setAcertou(false)
      setMensagem('')
      setBloquearClick(false)
    }
  }

  function clique(index) {
    if (!acertou && !bloquearClick) {
      switch (index) {
        case 0:
          setImg1('./poke' + array2[0] + '.png')
          break
        case 1:
          setImg2('./poke' + array2[1] + '.png')
          break
        case 2:
          setImg3('./poke' + array2[2] + '.png')
          break
        case 3:
          setImg4('./poke' + array2[3] + '.png')
          break
        case 4:
          setImg5('./poke' + array2[4] + '.png')
          break
        case 5:
          setImg6('./poke' + array2[5] + '.png')
          break
        case 6:
          setImg7('./poke' + array2[6] + '.png')
          break
        case 7:
          setImg8('./poke' + array2[7] + '.png')
          break
        case 8:
          setImg9('./poke' + array2[8] + '.png')
          break
        case 9:
          setImg10('./poke' + array2[9] + '.png')
          break
        default:
          break
      }

      verificarAcerto(index)
    }
  }

  function recebeDados(dados) {
    setValor(+dados.valor)
  }

  function verificarAcerto(index) {
    const cartaSelecionada = './poke' + array2[index] + '.png'

    if (cartaSelecionada === sorte) {
      setAcertou(true)
      const premio = valor * 2
      setMensagem(
        `Parabéns! Você ganhou: R$ ${premio.toFixed(2)}!`
      )
    } else {
      setMensagem('Você errou. Tente novamente.')
      setBloquearClick(true)
    }
  }

  function reiniciarJogo() {
    array2 = _.shuffle(array)
    setTentativa(0)
    setAcertou(false)
    setSorte("")
    setAdivinha("")
    setMensagem("")
    setBloquearClick(false)
    setImg1('./poke' + array2[0] + '.png')
    setImg2('./poke' + array2[1] + '.png')
    setImg3('./poke' + array2[2] + '.png')
    setImg4('./poke' + array2[3] + '.png')
    setImg5('./poke' + array2[4] + '.png')
    setImg6('./poke' + array2[5] + '.png')
    setImg7('./poke' + array2[6] + '.png')
    setImg8('./poke' + array2[7] + '.png')
    setImg9('./poke' + array2[8] + '.png')
    setImg10('./poke' + array2[9] + '.png')
    reset()
  }

  return (
    <div className="container-fluid">
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="text-white"><img src="./verso.png" alt="Logo" width="50" height="40" className="d-inline-block me-3" />Jogo da Memória: pokemon</div>
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <form onSubmit={handleSubmit(recebeDados)}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control"
                  placeholder="Nome do Apostador" required {...register("nome")} />
              </div>
              <div className="col">
                <input type="number" className="form-control"
                  placeholder="Valor R$" required {...register("valor")} />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-success" onClick={trocaFigura}>Apostar</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary" onClick={reiniciarJogo}>Novo Jogo</button>
              </div>
            </div>
          </div>
        </form>
        <div className="card-body">
          <div className="text-primary">
            <h6 className="text-start my-3">Memorize a posição dos pokemons. {adivinha} {sorte && <img src={sorte}
              width="70" height="50" />}</h6>
            <div className="row">
              <div className="col">
                <img src={img1} alt="img1" width="160" height="140" onClick={() => clique(0)} />
              </div>
              <div className="col">
                <img src={img2} alt="img2" width="160" height="140" onClick={() => clique(1)} />
              </div>
              <div className="col">
                <img src={img3} alt="img3" width="160" height="140" onClick={() => clique(2)} />
              </div>
              <div className="col">
                <img src={img4} alt="img4" width="160" height="140" onClick={() => clique(3)} />
              </div>
              <div className="col">
                <img src={img5} alt="img5" width="160" height="140" onClick={() => clique(4)} />
              </div>
              <div className="col">
                <img src={img6} alt="img6" width="160" height="140" onClick={() => clique(5)} />
              </div>
              <div className="col">
                <img src={img7} alt="img7" width="160" height="140" onClick={() => clique(6)} />
              </div>
              <div className="col">
                <img src={img8} alt="img8" width="160" height="140" onClick={() => clique(7)} />
              </div>
              <div className="col">
                <img src={img9} alt="img9" width="160" height="140" onClick={() => clique(8)} />
              </div>
              <div className="col">
                <img src={img10} alt="img10" width="160" height="140" onClick={() => clique(9)} />
              </div>
            </div>
          </div>
          <div className="card-footer text-body-secondary">
            {acertou ? (
              <h3>{mensagem}</h3>
            ) : (
              <p>{mensagem}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
