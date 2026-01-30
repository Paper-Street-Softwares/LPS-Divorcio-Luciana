// import { useTranslation } from "react-i18next";
// import content from "../../content/content";
// import ServicesModal from "./ServicesModal";
// import IconFeatureCard from "../cards/IconFeatureCard";
// import SectionArea from "../sectionElements/SectionArea";
// import SectionHeader from "../sectionElements/SectionHeader";
// import SectionWrapper from "../sectionElements/SectionWrapper";
// import MotionDivDownToUp from "../animation/MotionDivDownToUp";

// export default function FeaturesModalWithCards({ colorMode }) {
//   // Classes de tema
//   const bgClasses = {
//     dark: "bg-bgSectionOpacityDark",
//     light: "bg-bgSectionOpacityLight",
//     default: "squares",
//   };
//   const textClasses = {
//     dark: "text-white",
//     light: "text-black",
//     default: "bg-bgSectionDark",
//   };
//   const bgClass = bgClasses[colorMode] || bgClasses.default;
//   const textClass = textClasses[colorMode] || textClasses.default;

//   const features = Object.values(content.texts.features.cards);

//   return (
//     <SectionArea id="service" className={`${bgClass}`}>
//       <SectionHeader
//         className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
//         miniTitle={content.texts.features.miniTag}
//         sectionHeaderTitle={content.texts.features.title}
//         sectionHeaderSubtitle={content.texts.features.subtitle}
//         titleColorSet={textClass}
//         subtitleColorSet={textClass}
//       />
//       <SectionWrapper>
//         <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
//           <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
//             {features
//               .filter((_, index) => index < 2)
//               .map((card, index) => (
//                 <MotionDivDownToUp>
//                   <IconFeatureCard
//                     key={index}
//                     icon={card.icon}
//                     title={card.title}
//                     paragraph={card.subtitle}
//                     className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
//                     colorMode={colorMode}
//                   />
//                 </MotionDivDownToUp>
//               ))}
//           </div>

//           <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
//             <img
//               src={content.texts.features.imgFeatures}
//               alt={content.texts.features.alt}
//               className="hidden desktop1:flex desktop1:h-[730px] desktop2:h-[770px] w-full rounded-2xl object-cover"
//               loading="lazy"
//             />
//           </MotionDivDownToUp>

//           <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
//             {features
//               .filter((_, index) => index === 2)
//               .map((card, index) => (
//                 <MotionDivDownToUp>
//                   <IconFeatureCard
//                     key={index}
//                     icon={card.icon}
//                     title={card.title}
//                     paragraph={card.subtitle}
//                     className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
//                     colorMode={colorMode}
//                   />{" "}
//                 </MotionDivDownToUp>
//               ))}
//             {features
//               .filter((_, index) => index === 3)
//               .map((card, index) => (
//                 <MotionDivDownToUp>
//                   <IconFeatureCard
//                     key={index}
//                     icon={card.icon}
//                     title={card.title}
//                     paragraph={card.subtitle}
//                     className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
//                     colorMode={colorMode}
//                   >
//                     {" "}
//                     <ServicesModal />
//                   </IconFeatureCard>{" "}
//                 </MotionDivDownToUp>
//               ))}
//           </div>
//         </div>
//       </SectionWrapper>
//     </SectionArea>
//   );
// }
