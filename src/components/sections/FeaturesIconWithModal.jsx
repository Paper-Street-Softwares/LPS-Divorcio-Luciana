// import content from "../../content/content";
// import IconFeatureCard from "../cards/IconFeatureCard";
// import SectionArea from "../sectionElements/SectionArea";
// import SectionHeader from "../sectionElements/SectionHeader";
// import SectionWrapper from "../sectionElements/SectionWrapper";
// import MotionDivDownToUp from "../animation/MotionDivDownToUp";
// import ServicesModal from "./ServicesModal";
// import { useTranslation } from "react-i18next";

// export default function FeaturesIconWithModal({ colorMode }) {
//   const features = Object.values(content.texts.features.cards);

//   // Define background and text colors based on colorMode
//   const bgClasses = {
//     dark: "bg-bgSectionOpacityDark",
//     light: "bg-bgSectionOpacityLight",
//     default: "squares",
//   };
//   const textClasses = {
//     dark: "text-white",
//     light: "text-black",
//     default: "text-black",
//   };

//   const bgClass = bgClasses[colorMode] || bgClasses.default;
//   const textClass = textClasses[colorMode] || textClasses.default;

//   return (
//     <SectionArea id="service" className={`${bgClass} `} paddingbot={true}>
//       <SectionHeader
//         className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
//         miniTitle={content.texts.features.miniTag}
//         sectionHeaderTitle={content.texts.features.title}
//         sectionHeaderSubtitle={content.texts.features.subtitle}
//         titleColorSet={textClass}
//         subtitleColorSet={textClass}
//       />
//       <SectionWrapper>
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {features.map((card, index) => (
//             <MotionDivDownToUp>
//               <IconFeatureCard
//                 key={index}
//                 icon={card.icon}
//                 title={card.title}
//                 paragraph={card.subtitle}
//                 className={`m-auto ${textClass}`}
//                 colorMode={colorMode}
//               />
//             </MotionDivDownToUp>
//           ))}
//           <MotionDivDownToUp>
//             <IconFeatureCard
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-circle-plus"
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M8 12h8" />
//                 </svg>
//               }
//               title="Conheça outras áreas"
//               paragraph="Saiba em quais áreas também atuamos"
//             >
//               <ServicesModal />
//             </IconFeatureCard>
//           </MotionDivDownToUp>{" "}
//         </div>
//       </SectionWrapper>
//     </SectionArea>
//   );
// }
