export default function Tecnologias({ itens }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
      {itens.map((item) => (
        <li key={item} className="rounded-sm border border-linha bg-aco px-2 py-1 font-mono text-xs text-tinta">
          {item}
        </li>
      ))}
    </ul>
  )
}
