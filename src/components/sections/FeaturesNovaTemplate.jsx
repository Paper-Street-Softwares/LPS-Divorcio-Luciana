import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import content from '../../content/content'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import ButtonReflexo from '../interactives/ButtonReflexo'
import { ArrowLeft, ArrowRight, Phone, Scale } from 'lucide-react'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import { Button } from 'primereact/button'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const features = Object.values(content.texts.features.cards)

function FeaturesNovaTemplate({ colorMode, frasesDestaque }) {
  // Definindo classes dinamicamente conforme o colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    hoverCardBg,
    image,
    bgObservation,
    textDestaque,
    textObservation,
    hoverTextCard,
    bgAccordion

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-white'
      bgAccordion = '#fff'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-quartenary'
      iconBg = 'bg-white text-primaryDark'
      image = ' border-[8px] border-white'
      hoverCardBg = 'hover:bg-primaryDark hover:text-white'
      hoverTextCard = ' group-hover:text-white'
      bgObservation = 'bg-primaryDark'
      textObservation = 'text-white'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      bgAccordion = 'rgba(0,0,0,0.8)'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      cardBg = 'bg-dark'
      iconBg = 'bg-darkOpacity text-primaryLight'
      image = ' border-[8px] border-borderImage'
      hoverCardBg = 'hover:bg-primaryLight hover:text-black'
      hoverTextCard = ' group-hover:text-black'
      bgObservation = 'bg-primaryLight'
      textObservation = 'text-black'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      bgAccordion = '#fff'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-quartenary'
      iconBg = 'bg-white text-primaryDark'
      image = ' border-[8px] border-white'
      hoverCardBg = 'hover:bg-primaryDark hover:text-white'
      hoverTextCard = ' group-hover:text-white'
      bgObservation = 'bg-primaryDark'
      textObservation = 'text-white'
  }

  const features = Object.values(content.texts.features.cards)

  const [expanded, setExpanded] = useState(0)

  return (
    <SectionArea
      id="feature"
      data-theme={colorMode}
      className={`${backgroundMode}`}
    >
      <SectionWrapper>
        <section className="relative font-mainFont">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse desktop1:flex-row gap-16 items-center">
              {/* Imagem com destaque */}
              <div>
                {' '}
                <MotionDivDownToUp
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative order-2 lg:order-1 w-full m-auto"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl shadow-2xl  ${image}`}
                  >
                    <img
                      src={content.texts.features.imgFeatures}
                      alt={content.texts.features.alt}
                      className="w-full h-full object-cover scale-105 hover:scale-100 rounded-2xl transition-transform duration-700"
                      width={798}
                      height={798}
                    />
                  </div>

                  {frasesDestaque && (
                    <div
                      className={`absolute -bottom-6 -left-6 ${bgObservation} ${textObservation} p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs`}
                    >
                      <p className="font-secondFont text-2xl font-bold mb-2">
                        {content.texts.features.titleMessageFeature}
                      </p>
                      <p className="text-sm font-secondFont font-light">
                        {content.texts.features.subtitleMessageFeature}
                      </p>
                    </div>
                  )}
                </MotionDivDownToUp>
                {/* <MotionDivDownToUp>
                  <div className="flex flex-col gap-4 pt-4 w-fit justify-center items-start desktop1:m-auto">
                    <ButtonReflexo
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                        </svg>
                      }
                      link={content.texts.links.ctaWhatsapp}
                      label={content.texts.features.ctaButtonText}
                      colorMode={colorMode}
                      className="mt-12"
                    />
                    <ButtonReflexo
                      id="ligar"
                      icon={<Phone width={20} />}
                      link={`tel:${content.texts.infos.phone}`}
                      label="Emergência? Ligue agora!"
                      colorMode={colorMode}
                      bgClass="bg-[#ff2c2c]"
                      className="text-white"
                    />
                  </div>
                </MotionDivDownToUp> */}
              </div>

              {/* Conteúdo das features */}
              <div className="order-1 lg:order-2 space-y-8 w-[90%] desktop1:w-[50%]">
                <SectionHeaderNovo
                  miniTitle={content.texts.features.miniTag}
                  title={content.texts.features.title}
                  subtitle={content.texts.features.subtitle}
                  type="article"
                  colorMode={colorMode}
                />

                {/* <div className="w-full">
                  <div>
                    {features.map((item, index) => (
                      <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={() =>
                          setExpanded(expanded === index ? false : index)
                        }
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon className={`${textDestaque}`} />
                          }
                          aria-controls={`panel-${index}-content`}
                          id={`panel-${index}-header`}
                          sx={{
                            backgroundColor: bgAccordion,
                          }}
                        >
                          <Typography component="span" className={`${text}`}>
                            {item.title}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                          sx={{
                            backgroundColor: bgAccordion,
                          }}
                        >
                          <Typography className={`${textOpacity}`}>
                            {item.subtitle}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </div> */}

                <div className="grid tablet1:grid-cols-2 gap-6">
                  {features.slice(0, 6).map((feature, idx) => (
                    <MotionDivDownToUp>
                      <div
                        key={idx}
                        className={`group p-6 rounded-xl ${cardBg} ${hoverCardBg} transition-all duration-700 cursor-pointer`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full ${iconBg} mb-4 flex items-center justify-center shadow-sm transition-transform`}
                        >
                          {feature.icon}
                        </div>
                        <h1
                          className={`font-secondFont font-bold text-lg mb-2 ${text} ${hoverTextCard} transition-all`}
                        >
                          {feature.title}
                        </h1>
                        <p
                          className={`text-sm font-secondFont font-light ${textOpacity} ${hoverTextCard} transition-all`}
                        >
                          {feature.subtitle}
                        </p>
                      </div>
                    </MotionDivDownToUp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FeaturesNovaTemplate
