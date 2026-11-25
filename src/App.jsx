import Cabecalho from './components/Cabecalho'
import Contato from './components/Contato'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Topo from './components/Topo'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30 focus:bg-placa focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Topo />
        <Projetos />
        <Habilidades />
      </main>
      <Contato />
    </>
  )
}
