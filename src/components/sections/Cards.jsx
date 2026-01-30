import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import { motion } from 'framer-motion'
import { Scale, HomeIcon, Building2, Coins } from 'lucide-react'

function Cards({ colorMode }) {
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image,
    borderT

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-dark'
      stepNumberBg = 'bg-dark'
      stepNumberText = 'text-primaryLight'
      lineColor = 'bg-primaryLight/20'
      textDestaque = 'text-primaryLight'
      image = ' border-[8px] border-borderImage'
      borderT = 'border-t-primaryLight'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-secondary/60'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
  }
  return (
    <SectionArea className={`bg-gray-50`}>
      <SectionWrapper>
        <section id="serviços">
          <div className="container mx-auto">
            <SectionHeaderNovo
              miniTitle="Atuação Estratégica em Inventários"
              title="O Inventário conectado ao Direito Civil: Soluções Completas"
              subtitle="Diferente de uma atuação genérica, aplicamos o Direito Civil de forma integrada para resolver gargalos que travam o processo:"
              colorMode={colorMode}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  {' '}
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Scale className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Sucessões + Família
                    </h3>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Analisamos o regime de bens do casamento ou união estável
                      para definir exatamente o que é meação (da viúva/o) e o
                      que é herança. Isso evita cálculos errados e pagamentos
                      indevidos de imposto.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <HomeIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Sucessões + Direito Imobiliário
                    </h3>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Muitas vezes, os bens deixados estão irregulares. Atuamos
                      na regularização de escrituras e registros no cartório de
                      imóveis dentro do próprio inventário, garantindo que a
                      partilha seja definitiva e legalizada.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  {' '}
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Sucessões + Direito Empresarial
                    </h3>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Se o falecido era sócio de uma empresa, o inventário pode
                      paralisar o negócio. Atuamos na apuração de haveres e na
                      representação do espólio perante a sociedade, garantindo
                      que as quotas não percam valor.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Coins className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Sucessões + Obrigações e Contratos
                    </h3>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Gerimos as dívidas deixadas pelo falecido. Negociamos com
                      credores para que as obrigações sejam pagas apenas dentro
                      das forças da herança, protegendo o patrimônio particular
                      dos herdeiros.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Cards
