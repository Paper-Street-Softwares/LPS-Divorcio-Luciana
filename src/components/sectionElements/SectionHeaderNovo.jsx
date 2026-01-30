import React from 'react'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function SectionHeaderNovo({
  miniTitle,
  title,
  subtitle,
  colorMode,
  type,
  usage,
  className,
}) {
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    borderCard,
    arrowColor,
    imageBorder,
    miniTag

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      cardBg = 'bg-white'
      borderCard = 'border-border'
      arrowColor = 'text-mutedForeground group-hover:text-primaryDark'
      imageBorder = 'border-white'
      miniTag = 'text-primaryDark'
      break

    case 'dark':
      backgroundMode = 'bg-black'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      cardBg = 'bg-gray-900'
      borderCard = 'border-gray-700'
      arrowColor = 'text-mutedForeground group-hover:text-primaryLight'
      imageBorder = 'border-borderImage'
      miniTag = 'text-primaryLight'
      break

    default:
      backgroundMode = 'bg-white'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      cardBg = 'bg-white'
      borderCard = 'border-border'
      arrowColor = 'text-mutedForeground group-hover:text-primaryDark'
      imageBorder = 'border-white'
      miniTag = 'text-primaryLight'
  }

  if (type === 'article') {
    usage = 'text-start mb-8'
  } else {
    usage = 'text-center mb-16'
  }

  return (
    <MotionDivDownToUp>
      <div className={`max-w-2xl mx-auto ${className} ${usage}`}>
        {miniTitle && (
          <span
            className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTag}`}
          >
            {miniTitle}
          </span>
        )}

        {title && (
          <h2
            className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p className={`font-secondFont font-light ${textOpacity}`}>
            {subtitle}
          </p>
        )}
      </div>
    </MotionDivDownToUp>
  )
}

export default SectionHeaderNovo
