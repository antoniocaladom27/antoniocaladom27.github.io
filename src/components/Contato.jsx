import { contato } from '../data/perfil'
import Botao from './Botao'

export default function Contato() {
  const ano = new Date().getFullYear()

  return (
    <footer id="contato" aria-labelledby="titulo-contato" className="bg-tinta text-placa">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h2 id="titulo-contato" className="titulo text-4xl sm:text-5xl">
          Disponível para entrevistas.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-aco/85">
          Presencial, híbrido ou remoto, em Salvador. O jeito mais rápido de falar comigo é pelo WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Botao href={contato.whatsapp} variante="whatsapp" externo>
            Falar no WhatsApp
          </Botao>
          <Botao href={`mailto:${contato.email}`} variante="contornoClaro">
            {contato.email}
          </Botao>
          <Botao href={contato.linkedin} variante="contornoClaro" externo>
            LinkedIn <span aria-hidden="true">↗</span>
          </Botao>
        </div>
      </div>

      <div className="border-t border-placa/15">
        <p className="mx-auto max-w-5xl px-5 py-6 text-sm text-aco/75 sm:px-8">
          © {ano} {contato.nome}
        </p>
      </div>
    </footer>
  )
}
