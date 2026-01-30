import Button from '../interactives/Button'

export default function IconButtonFeatureCard(props) {
  const { icon, title, subtitle, className, modal = false, colorMode } = props

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: 'bg-buttonColor',
    light: 'bg-buttonColor',
    default: 'bg-buttonColor',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-black',
  }

  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  return (
    <div
      className={`w-[250px] phone2:w-[300px] phone3:w-[350px] tablet1:h-auto tablet1:max-w-[150px] tablet2:max-w-[180px] desktop1:max-w-[200px flex flex-col items-center py-4 px-6 rounded-md bg-white shadow ${className}`}
    >
      <div
        className={`h-[64px] mb-4 w-[64px] rounded-md flex justify-center items-center text-labelButtons ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={`h-auto mb-4 font-bold font-mainFont text-title1 text-center flex items-start  ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center opacity-70 font-secondFont w-[90%] ${textClass}`}
      >
        {subtitle}
      </p>
      {modal && (
        <Button
          onClick={props.onOpenModal}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-corner-down-right"
            >
              <path d="m15 10 5 5-5 5" />
              <path d="M4 4v7a4 4 0 0 0 4 4h12" />
            </svg>
          }
          size="small"
          className=" mt-4"
          label="A_Definir"
        />
      )}
    </div>
  )
}
