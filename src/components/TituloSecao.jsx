export default function TituloSecao({ id, titulo, detalhe }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
      <h2 id={id} className="titulo text-4xl sm:text-5xl">
        {titulo}
      </h2>
      {detalhe && <p className="rotulo text-cabo">{detalhe}</p>}
    </header>
  )
}
