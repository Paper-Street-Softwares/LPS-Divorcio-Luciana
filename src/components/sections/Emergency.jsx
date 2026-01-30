import React from 'react'
import { AlertTriangle, Phone } from 'lucide-react'
import ButtonReflexo from '../interactives/ButtonReflexo'
import content from '../../content/content'

function Emergency({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque, bgCards, borderSVG
  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryLight'
      bgCards = 'bg-primaryDark'
      borderSVG = 'border-primaryDark'

      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryLight'
      bgCards = 'bg-primaryLight'
      borderSVG = 'border-primaryLight'

      break
    default:
      backgroundMode = 'bg-secondary'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      bgCards = 'bg-primaryDark'
      borderSVG = 'border-primaryDark'
  }
  return (
    <div>
      <section className="relative py-8 bg-red-700/30 border-y border-red-900/30 overflow-hidden font-secondFont">
        {/* Background Pulse Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,58,38,0.1)_0%,transparent_70%)] animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 flex-1">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-500 border border-red-500/20 animate-pulse">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-5 w-5 text-red-800 sm:hidden" />
                  <span className="text-red-700 font-bold tracking-wider text-sm uppercase">
                    Plantão Criminal 24 Horas
                  </span>
                </div>
                <h1 className={`text-xl md:text-2xl font-bold ${text} mb-2`}>
                  Atendimento Imediato em Casos Criminais
                </h1>
                <p
                  className={`text-sm md:text-base max-w-2xl leading-relaxed ${text}`}
                  //para site de cliente específico deixar copy totalmente preto
                >
                  Se você ou um familiar foi preso ou está sendo investigado, o
                  atendimento deve ser imediato. Cada minuto é decisivo para
                  garantir direitos, evitar abusos e preparar a defesa adequada.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <ButtonReflexo
                id="ligar"
                icon={<Phone width={20} />}
                link={`tel:${content.texts.infos.phone}`}
                label="Emergência? Ligue agora!"
                colorMode={colorMode}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Emergency
