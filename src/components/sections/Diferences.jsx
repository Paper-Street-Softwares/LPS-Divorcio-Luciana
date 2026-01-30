import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap, UserCheck, Clock } from 'lucide-react'
import SectionArea from '../sectionElements/SectionArea.jsx'
import SectionWrapper from '../sectionElements/SectionWrapper.jsx'
import { Check } from 'lucide-react'

export function Diferences({ colorMode }) {
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
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
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
  const differentials = [
    {
      icon: Check,
      text: 'Sigilo absoluto',
    },
    {
      icon: Check,
      text: 'Defesa técnica e imediata',
    },
    {
      icon: Check,
      text: 'Acompanhamento em delegacia',
    },
    {
      icon: Check,
      text: 'Atendimento emergencial 24h',
    },
  ]

  return (
    <SectionArea
      paddingtop={false}
      className={`py-24 relative overflow-hidden ${backgroundMode}`}
    >
      <SectionWrapper>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black border-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`text-sm font-bold tracking-wides uppercase block font-secondFont ${textDestaque}`}
                    >
                      Diferenciais do Atendimento
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`text-3xl md:text-4xl lg:text-5xl font-mainFont font-bold leading-tight ${text}`}
                    >
                      Atendimento Criminal Estratégico e Imediato
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`text-lg leading-relaxed border-l-2 ${borderSVG} font-secondFont pl-6 ${textOpacity}`}
                    >
                      Atendimento direto com advogado criminalista experiente,
                      com atuação estratégica desde a fase policial até o
                      processo judicial.
                    </motion.p>
                  </div>

                  <div className="space-y-4">
                    {differentials.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex items-center gap-4 p-4 cursor-pointer rounded-xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-colors"
                      >
                        <div
                          className={`w-auto p-1 rounded-lg flex items-center justify-center ${bgCards} group-hover:scale-110 transition-transform text-black`}
                        >
                          <span>
                            {' '}
                            <item.icon className="w-5 h-5" />
                          </span>
                        </div>
                        <span
                          className={`font-bold text-lg font-secondFont ${textOpacity}`}
                        >
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}
