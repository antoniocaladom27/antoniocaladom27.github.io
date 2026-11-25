import { habilidades, idioma } from '../data/perfil'
import TituloSecao from './TituloSecao'

export default function Habilidades() {
  return (
    <section aria-labelledby="titulo-habilidades" id="habilidades" className="border-t border-linha py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <TituloSecao id="titulo-habilidades" titulo="Habilidades" />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {habilidades.map((item) => (
            <li key={item} className="rounded-sm border border-linha bg-placa px-3.5 py-2 font-medium">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-cabo">{idioma}</p>
      </div>
    </section>
  )
}
