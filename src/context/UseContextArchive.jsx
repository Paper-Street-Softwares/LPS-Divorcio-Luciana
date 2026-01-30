import { createContext, useContext, useState } from 'react'

const ColorModeContext = createContext(null)

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState('light') // default, light, dark
  const [whatsAppColor] = useState(true) // ativa cor do WhatsApp
  const [showGlobalButton] = useState(false) // ativa as os botões e caixa de alerta

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        whatsAppColor,
        showGlobalButton,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export const whatsAppThemes = {
  light: 'bg-wppDark text-corTitulosBranca border-green-600/30',
  dark: 'bg-wppDark text-corTitulosBranca border-green-600/30',
  default: 'bg-green-500 text-black',
}

export const defaultButtonThemes = {
  light: 'bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ',
  dark: 'bg-primaryLight text-corTitulosPreto',
  default: 'bg-secondary text-corTitulosPreto border border-primaryDark/20',
}

export const alertTheme = {
  light: 'bg-[#fff] text-corTitulosBranca border border-primaryDark/20',
  dark: 'bg-red-800 text-corTitulosBranca border border-primaryDark/20 shadow-white',
}

export function useColorMode() {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('useColorMode must be used within ColorModeProvider')
  }
  return context
}
