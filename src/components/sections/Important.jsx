import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import CardsImportants from '../cards/CardsImportants'
import content from '../../content/content'
import ButtonReflexo from '../../components/interactives/ButtonReflexo'
import MotionDivDownUp from '../animation/MotionDivDownToUp'

function Important({ colorMode }) {
  const listCards = Object.values(content.texts.important.cards)

  return (
    <SectionArea className={`bg-terciary/60`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.important.miniTag}
          title={content.texts.important.title}
          colorMode={colorMode}
        />

        <div className="grid gap-12 tablet1:grid-cols-2">
          {listCards.map((item) => (
            <CardsImportants title={item.title} paragraph={item.paragraph} />
          ))}
        </div>

        <MotionDivDownUp>
          <p className="flex justify-center font-secondFont text-center w-full my-12 text-black/70">
            {content.texts.important.fraseObs}
          </p>
        </MotionDivDownUp>

        <MotionDivDownUp>
          <ButtonReflexo
            label={content.texts.important.ctaButtonText}
            icon={content.texts.svgs.wpp}
            link={content.texts.links.ctaWhatsapp}
          />
        </MotionDivDownUp>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Important
