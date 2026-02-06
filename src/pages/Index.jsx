import { lazy, Suspense } from 'react'

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import('../components/sections/FeaturesNovaTemplate'),
)

const CtaNovoTemplate = lazy(
  () => import('../components/sections/CtaNovoTemplate'),
)
const AboutNovoTemplate = lazy(
  () => import('../components/sections/AboutNovoTemplate'),
)

const FooterNovoTemplate = lazy(
  () => import('../components/sections/FooterNovoTemplate'),
)
const WhatsappAnimated = lazy(
  () => import('../components/interactives/WhatsAppAnimated'),
)
import { useContext } from 'react'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'

import Important from '../components/sections/Important'

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        <NavbarNovaTemplate colorMode={colorMode} />

        <main>
          {/* LCP — NÃO usar lazy */}
          <HeroTemplateNovo colorMode={colorMode} obs={true} obsTwo={false} />
          <Suspense>
            <Important colorMode={colorMode} />
          </Suspense>
          <Suspense fallback={null}>
            <FeaturesNovaTemplate
              colorMode={colorMode}
              frasesDestaque={true}
              accordion={false}
            />
          </Suspense>

          <Suspense>
            <AboutNovoTemplate
              colorMode={colorMode}
              ButtonModal={false}
              benefits={false}
            />
          </Suspense>
          <Suspense>
            <CtaNovoTemplate colorMode={colorMode} />
          </Suspense>
          <Suspense>
            <FooterNovoTemplate
              colorMode={colorMode}
              mapa={false}
              phone={true}
              phoneSecond={false}
              expediente={false}
              adress={true}
              email={true}
              emailSecond={false}
              fraseFooter={true} // frase Google LLC
              obs={false}
            />
          </Suspense>
          <Suspense>
            <WhatsappAnimated colorMode={colorMode} />
          </Suspense>
        </main>
      </ColorModeProvider>
    </>
  )
}
