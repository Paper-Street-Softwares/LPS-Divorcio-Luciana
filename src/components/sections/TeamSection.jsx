import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { Dialog } from 'primereact/dialog'
import content from '../../content/content'
import ButtonReflexo from '../interactives/ButtonReflexo'
import { Button } from '../interactives/ButtonNovoTemplate'
import { Phone } from 'lucide-react'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'

function TeamSectionNew({ ButtonModal, colorMode }) {
  const [visible, setVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const onClick = () => {
    setModalTitle(content.texts.about.title)
    setVisible(true)
  }

  // Definindo classes conforme colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    buttonBg,
    textDestaque,
    image,
    miniTagColor

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-white'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-white'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      cardBg = 'bg-gray-800/20'
      iconBg = 'bg-primaryLight/20 text-primaryLight'
      buttonBg = 'bg-primaryLight'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-borderImage'
      break
    default:
      backgroundMode = 'bg-white'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-white/10'
      iconBg = 'bg-primaryDark/10 text-primaryDark'
      buttonBg = 'bg-primaryDark'
      miniTagColor = 'text-primaryDark'
      image = ' border-[8px] border-white'
  }

  return (
    <SectionArea
      data-theme={colorMode}
      id="about"
      className={`${backgroundMode}`}
    >
      <SectionWrapper className="desktop1:max-w-[900px]">
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          colorMode={colorMode}
        />

        <section className="w-full relative overflow-visible">
          <div className="mx-aut flex flex-col gap-12 relative z-10">
            <div className="flex flex-col-reverse desktop1:flex-row-reverse desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="max-w-[388px]">
                  <span
                    className={`font-secondFont text-paragraph2 uppercase font-bold ${textDestaque}`}
                  >
                    {content.texts.team.cards.card1.title}
                  </span>
                  <h1
                    className={`text-3xl md:text-4xl font-mainFont font-medium flex flex-col gap-0 ${text}`}
                  >
                    {content.texts.team.cards.card1.name}
                  </h1>

                  <p
                    className={`font-secondFont font-light text-sm leading-relaxed mt-4 ${textOpacity}`}
                  >
                    {content.texts.team.cards.card1.description}
                  </p>
                </div>
              </motion.div>

              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative w-full desktop1:max-w-[400px] m-auto overflow-visible mb-6 desktop1:mb-0"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 max-w-[386px] mx-auto ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden ${image}`}
                  >
                    <img
                      src={content.texts.team.cards.card1.img1}
                      alt={content.texts.team.cards.card1.alt}
                      className="w-full max-h-96 object-cover scale-105 hover:scale-100 rounded-2xl transition-transform duration-700 "
                      width={798}
                      height={798}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col-reverse desktop1:flex-row desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="max-w-[388px]">
                  <span
                    className={`font-secondFont text-paragraph2 uppercase font-bold ${textDestaque}`}
                  >
                    {content.texts.team.cards.card1.title}
                  </span>
                  <h1
                    className={`text-3xl md:text-4xl font-mainFont font-medium flex flex-col gap-0 ${text}`}
                  >
                    {content.texts.team.cards.card2.name}
                  </h1>

                  <p
                    className={`font-secondFont font-light text-sm leading-relaxed mt-4 ${textOpacity}`}
                  >
                    {content.texts.team.cards.card2.description}
                  </p>
                </div>
              </motion.div>

              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative w-full desktop1:max-w-[400px] m-auto overflow-visible mb-6 desktop1:mb-0"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 max-w-[386px] mx-auto ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden ${image}`}
                  >
                    <img
                      src={content.texts.team.cards.card2.img2}
                      alt={content.texts.team.cards.card2.alt}
                      className="w-full max-h-96 object-cover scale-105 hover:scale-100 rounded-2xl transition-transform duration-700 "
                      width={726}
                      height={726}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modal */}
          <Dialog
            className="font-secondFont bg-white p-4 rounded-md"
            closeIcon={<X size={20} />}
            header={
              <span className="font-mainFont px-4">
                {content.texts.about.titleModal}
              </span>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: '50vw' }}
            breakpoints={{
              '4000px': '641px',
              '1024px': '641px',
              '641px': '85vw',
            }}
          ></Dialog>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default TeamSectionNew
