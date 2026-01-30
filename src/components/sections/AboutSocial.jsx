import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import SocialPrint from '../sectionElements/aboutInstagram/SocialPrint'
import DefaultInstagram from '../sectionElements/aboutInstagram/DefaultInstagram'
import RedesSociais from '../sectionElements/aboutInstagram/RedesSociais'
import Button from '../interactives/Button'
import ParagraphSocial from '../sectionElements/aboutInstagram/ParagraphSocial'
import content from '../../content/content'

export default function AboutSocial({ socialPrint, colorMode }) {
  // Definir classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-bgSectionDark',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-white',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  return (
    <SectionArea id="about" className={`${bgClass}`} paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-between">
        {socialPrint ? (
          <SocialPrint colorMode={colorMode} />
        ) : (
          <DefaultInstagram colorMode={colorMode} />
        )}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className={`text-center`}
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              type="article"
              titleColorSet={textClass}
              subtitleColorSet={textClass}
            />
          </MotionDivDownToUp>
          <ParagraphSocial />
          <div>
            <RedesSociais
              tiktok={true}
              instagram={true}
              facebook={true}
              linkedin={true}
              x={true}
              youtube={true}
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}
