const variantes = {
  primario: 'bg-tinta text-placa hover:bg-fibra',
  whatsapp: 'bg-led-escuro text-white hover:bg-[#0f5e32]',
  contorno: 'border border-tinta/25 text-tinta hover:border-tinta hover:bg-placa',
  contornoClaro: 'border border-placa/35 text-placa hover:border-placa hover:bg-placa/10',
}

const tamanhos = {
  normal: 'h-12 px-5 text-[0.95rem]',
  pequeno: 'h-9 px-3.5 text-sm',
}

// Links com cara de botão. "externo" abre em outra aba.
export default function Botao({ href, variante = 'primario', tamanho = 'normal', externo = false, children }) {
  return (
    <a
      href={href}
      target={externo ? '_blank' : undefined}
      rel={externo ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-sm font-medium whitespace-nowrap transition-colors ${tamanhos[tamanho]} ${variantes[variante]}`}
    >
      {children}
    </a>
  )
}
