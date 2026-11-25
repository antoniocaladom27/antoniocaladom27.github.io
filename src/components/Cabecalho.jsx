import { contato } from '../data/perfil'
import Botao from './Botao'

export default function Cabecalho() {
  return (
    <header className="sticky top-0 z-20 border-b border-linha bg-aco/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#topo" className="titulo text-base whitespace-nowrap sm:text-lg">
          {contato.nomeCurto}
        </a>
        <Botao href={contato.whatsapp} variante="whatsapp" tamanho="pequeno" externo>
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </Botao>
      </div>
    </header>
  )
}
