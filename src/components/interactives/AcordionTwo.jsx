import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => ({
    boxShadow:
      expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
    border:
      expanded === panel
        ? "1px solid transparent"
        : "1px solid rgba(0, 0, 0, 0.1)",
    borderTop: expanded === panel ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
  });

  const faq = Object.values(content.texts.faq.questions);

  return (
    <div>
      {faq.map((item, index) => (
        <Accordion
          key={`panel${index}`}
          className="mb-[3%]"
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={getPanelStyle(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={24} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="div">
              <h1 className="font-bold font-secondFont text-black">
                {item.question}
              </h1>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className="font-secondFont text-paragraph4 text-paragraphLight">
              {item.answer}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
