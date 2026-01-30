import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../interactives/FaqNovo'
import content from '../../content/content'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import ButtonReflexo from '../../components/interactives/ButtonReflexo'

function FaqNovoTemplate({ colorMode }) {
  const faqs = Object.values(content.texts.faq.questions)

  // Classes dinâmicas conforme colorMode
  let text, textOpacity, hoverText, backgroundMode
  switch (colorMode) {
    case 'light':
      text = 'text-corTitulosPreto'
      text = 'text-corTitulosPreto'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-white'

      break
    case 'dark':
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      hoverText = 'hover:text-primaryLight'
      backgroundMode = 'bg-darkOpacity'
      break
    default:
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-white'
  }

  return (
    <SectionArea className={`${backgroundMode}`} id="faq">
      <SectionWrapper>
        <section className={` w-full`}>
          <div className="container mx-auto max-w-3xl">
            {/* Header */}
            <SectionHeaderNovo
              miniTitle={content.texts.faq.miniTag}
              title={content.texts.faq.title}
              subtitle={content.texts.faq.subtitle}
              colorMode={colorMode}
            />
            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger
                    colorMode={colorMode}
                    className={`text-lg font-medium font-secondFont text-left py-6 ${text}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`font-secondFont font-light pb-6 leading-relaxed ${textOpacity}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex justify-center mt-12">
            <ButtonReflexo
              icon={content.texts.svgs.wpp}
              link={content.texts.links.ctaWhatsapp}
              label={content.texts.hero.ctaButtonText}
              colorMode={colorMode}
              className="my-0"
            />
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FaqNovoTemplate
