import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeader from '../sectionElements/SectionHeader'
import content from '../../content/content'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import IconButtonFeatureCard from '../cards/IconButtonFeatureCard'

function FeaturesWithCarousel({ colorMode }) {
  const bgClasses = {
    dark: 'bg-bgSectionOpacityDark',
    light: 'bg-bgSectionOpacityLight',
    default: 'squares',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'bg-transparent',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  const images = Object.values(content.texts.features.imagesFeatures).map(
    (img) => ({
      original: img,
      thumbnail: img,
    })
  )

  const features = Object.values(content.texts.features.cards)

  return (
    <SectionArea
      id="service"
      className={`py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] ${bgClass}`}
    >
      <SectionHeader
        className={`text-center ${textClass} mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-wrap justify-center desktop1:justify-evenly tablet1:max-w-[400px] desktop1:max-w-[700px] gap-[36px] tablet1:gap-[24px] rounded-md">
          <MotionDivDownToUp>
            <div className="w-[80%] tablet2:w-full desktop1:w-[80%] m-auto ">
              <ImageGallery
                items={images}
                showNav={false} // Ativando a navegação
                showFullscreenButton={false} // Desativando botão de tela cheia
                useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
                showBullets={false}
                showPlayButton={false} // Remove o botão de play
                showThumbnails={false} // Remove as miniaturas
                autoPlay={true}
                additionalClass="custom-gallery"
              />
              <style>
                {`
                    .custom-gallery .image-gallery-slide img {
                      height: auto; 
                      width: 100%;
                      border-radius: 10px;
                    }

                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                      border-radius: 10px;
                    }
                  `}
              </style>
            </div>
          </MotionDivDownToUp>
          {features.map((card, index) => (
            <MotionDivDownToUp>
              <div
                key={index}
                className="flex-1 flex flex-wrap justify-center gap-6 tablet1:gap-4 items-center tablet1:items-start"
              >
                <IconButtonFeatureCard
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  className={textClass}
                  colorMode={colorMode}
                  onOpenModal={() => openModal(card.title, card.description)}
                />
              </div>
            </MotionDivDownToUp>
          ))}
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FeaturesWithCarousel
