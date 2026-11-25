import { useCallback, useEffect, useRef, useState } from 'react'
import { projetos } from '../data/perfil'
import Tecnologias from './Tecnologias'
import TituloSecao from './TituloSecao'

function ProjetoCard({ projeto, destaque }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-linha bg-placa p-7">
      <p className="rotulo flex items-center gap-2.5 text-cabo">
        {destaque && <span className="led text-led" aria-hidden="true" />}
        {projeto.situacao}
      </p>
      <h3 className="titulo mt-3 text-2xl">{projeto.nome}</h3>
      <p className="mt-3 leading-relaxed">{projeto.resumo}</p>
      <div className="mt-5">
        <Tecnologias itens={projeto.tecnologias} />
      </div>

      <div className="mt-auto pt-6">
        {projeto.nota && <p className="text-sm text-cabo">{projeto.nota}</p>}
        {projeto.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fibra underline decoration-fibra/30 underline-offset-4 transition-colors hover:decoration-fibra"
          >
            {link.texto} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  )
}

function Seta({ direcao, desativada, onClick }) {
  const anterior = direcao === 'anterior'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={desativada}
      aria-label={anterior ? 'Projeto anterior' : 'Próximo projeto'}
      className="grid size-11 place-items-center rounded-sm border border-tinta/25 text-tinta transition-colors hover:border-tinta hover:bg-placa disabled:cursor-default disabled:opacity-30 disabled:hover:border-tinta/25 disabled:hover:bg-transparent"
    >
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <path
          d={anterior ? 'M12.5 4.5 7 10l5.5 5.5' : 'M7.5 4.5 13 10l-5.5 5.5'}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default function Projetos() {
  const trilho = useRef(null)
  const [noInicio, setNoInicio] = useState(true)
  const [noFim, setNoFim] = useState(false)

  // Liga/desliga as setas conforme a posição da rolagem.
  const atualizarSetas = useCallback(() => {
    const el = trilho.current
    if (!el) return
    setNoInicio(el.scrollLeft <= 4)
    setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trilho.current
    if (!el) return
    atualizarSetas()
    const observador = new ResizeObserver(atualizarSetas)
    observador.observe(el)
    return () => observador.disconnect()
  }, [atualizarSetas])

  // Anda um cartão por clique.
  function rolar(sentido) {
    const el = trilho.current
    const cartao = el?.querySelector('li')
    if (!el || !cartao) return
    const passo = cartao.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0)
    const semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: sentido * passo, behavior: semAnimacao ? 'auto' : 'smooth' })
  }

  const temMaisDeUmaTela = !(noInicio && noFim)

  return (
    <section aria-labelledby="titulo-projetos" id="projetos" className="border-t border-linha py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <TituloSecao id="titulo-projetos" titulo="Projetos" />
          {temMaisDeUmaTela && (
            <div className="flex gap-2">
              <Seta direcao="anterior" desativada={noInicio} onClick={() => rolar(-1)} />
              <Seta direcao="proximo" desativada={noFim} onClick={() => rolar(1)} />
            </div>
          )}
        </div>

        <ul
          ref={trilho}
          onScroll={atualizarSetas}
          aria-label="Lista de projetos, role para o lado para ver mais"
          tabIndex={0}
          className="trilho mt-10 -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 py-1"
        >
          {projetos.map((projeto, i) => (
            <li
              key={projeto.id}
              className="shrink-0 basis-[85%] snap-start sm:basis-[60%] lg:basis-[calc((100%-2.5rem)/2.4)]"
            >
              <ProjetoCard projeto={projeto} destaque={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
