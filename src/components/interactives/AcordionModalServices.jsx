// import React, { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { ChevronDown } from "lucide-react";
// import content from "../../content/content";
// import services from "../../content/services";
// import ModalComponent from "./ModalComponent";
// import ServiceDetailCard from "../cards/ServiceDetailCard";
// import { useTranslation } from "react-i18next";

// export default function AcordionModalServices() {
//   const features = Object.values(content.texts.features.cards);

//   const [expanded, setExpanded] = useState("panel1");

//   const handleChange = (panel) => (_, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const getPanelStyle = (panel) => {
//     return {
//       boxShadow:
//         expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
//       border:
//         expanded === panel
//           ? "1px solid rgba(0, 0, 0, 0.1)"
//           : "1px solid rgba(0, 0, 0, 0.1)",
//       borderTop:
//         expanded === panel
//           ? "1px solid rgba(0, 0, 0, 0.1)"
//           : "1px solid rgba(0, 0, 0, 0.1)",
//     };
//   };

//   return (
//     <div className="w-full">
//       {/* Accordion 1 */}
//       <Accordion
//         className="mb-[3%]"
//         expanded={expanded === "panel1"}
//         style={getPanelStyle("panel1")}
//       >
//         <AccordionSummary
//           expandIcon={<ChevronDown className="w-6 h-6" />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>
//             <h1 className="font-bold font-secondFont">Demais áreas</h1>
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
//               {features.map((card, index) => (
//                 <ModalComponent
//                   key={index}
//                   header={card.title}
//                   content={
//                     <ServiceDetailCard
//                       img={card.imgModal}
//                       // subtitle={content.texts.features.card9.subtitle}
//                       description={card.description}
//                       buttonLabel={card.buttonLabel}
//                       buttonIcon={card.icon}
//                       buttonLink=""
//                     />
//                   }
//                 >
//                   <button className="flex text-blue-600">
//                     <span>{services.moreServices.arrowIcon}</span>
//                     <span className="ml-2 text-left text-blue-600 text-paragraph3">
//                       {card.title}
//                     </span>
//                   </button>
//                 </ModalComponent>
//               ))}
//               {/* Link 8 */}
//             </p>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
