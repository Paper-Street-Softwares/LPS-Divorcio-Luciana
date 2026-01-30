import React from 'react'
import imgIcon from '../../assets/imgs/icons/exclamation.webp'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function CardsImportants({ title, paragraph, colorMode }) {
  //precisa fazer colorMode
  let bgCircle, bgCircleHover
  switch (colorMode) {
    case 'light':
      bgCircle = 'text-corTitulosPreto'
      bgCircleHover =
        'group-hover:bg-white group-hover:border-2 group-hover:border-black'

      break
    case 'dark':
      bgCircle = 'text-corTitulosPreto'
      bgCircleHover =
        'group-hover:bg-white group-hover:border-2 group-hover:border-black'
      break
    default:
      bgCircle = 'text-corTitulosPreto'
      bgCircleHover =
        'group-hover:bg-white group-hover:border-2 group-hover:border-black'
  }
  return (
    <MotionDivDownToUp>
      <div className="relative h-fit bg-white shadow-lg max-w-[400px] py-12 px-10 rounded-[18px] flex flex-col gap-4 font-secondFont group hover:bg-primaryDark hover:text-white transition-all duration-700">
        <h1 className="text-start font-bold text-corTitulosPreto group-hover:text-white">
          {title}
        </h1>
        <p className="text-start text-corOutrosTextosPreto group-hover:text-white">
          {paragraph}
        </p>

        <div className="absolute bg-primaryDark border-2 group-hover:bg-white group-hover:border-2 group-hover:border-black duration-700 transition-all rounded-full p-3 -top-6 left-6">
          <img
            src={imgIcon}
            width={32}
            height={32}
            alt="Ícone de exclamação"
            className="w-8 group-hover:invert duration-700 transition-all"
          />
        </div>
      </div>
    </MotionDivDownToUp>
  )
}

export default CardsImportants
