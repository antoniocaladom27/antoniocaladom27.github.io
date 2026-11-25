import { apresentacao, contato } from '../data/perfil'
import Botao from './Botao'

export default function Topo() {
  const [primeiro, ...resto] = contato.nome.split(' ')

  return (
    <section id="topo" aria-labelledby="nome" className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-24">
      <p className="rotulo flex flex-wrap gap-x-3 text-cabo">
        <span>{apresentacao.local}</span>
        <span aria-hidden="true">·</span>
        <span>{apresentacao.cargo}</span>
      </p>

      <h1 id="nome" className="titulo mt-6 text-[clamp(2.5rem,7vw,4.5rem)]">
        {primeiro}
        {resto.map((parte) => (
          <span key={parte} className="block">
            {parte}
          </span>
        ))}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-tinta/85 sm:text-xl">{apresentacao.resumo}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Botao href={contato.whatsapp} variante="whatsapp" externo>
          Falar no WhatsApp
        </Botao>
        <Botao href={`mailto:${contato.email}`} variante="contorno">
          Enviar e-mail
        </Botao>
        <Botao href={contato.github} variante="contorno" externo>
          GitHub <span aria-hidden="true">↗</span>
        </Botao>
        <Botao href={contato.linkedin} variante="contorno" externo>
          LinkedIn <span aria-hidden="true">↗</span>
        </Botao>
      </div>
    </section>
  )
}
