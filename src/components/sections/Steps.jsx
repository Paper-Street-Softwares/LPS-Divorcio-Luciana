import React from "react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
// import GalleryAbout from "../sectionElements/about/GalleryAbout";

export default function Steps({ colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgSectionOpacityLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  const cards = Object.values(content.texts.steps.cards);

  return (
    <SectionArea className={`${bgClass}`} paddingbot={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl shadow-custom-opacity shadow-shadowSteps/20">
          {/* <GalleryAbout /> */}
          <picture>
            <source
              srcSet={content.texts.steps.imgMobile}
              media="(max-width: 424px)"
            />
            <img
              src={content.texts.steps.img}
              alt={content.texts.steps.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl"
              loading="lazy"
            />
          </picture>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            type="article"
            titleColorSet={titleColor}
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color={colorMode ? "light" : ""}
            type={colorMode ? "" : "article"}
            titleColorSet={titleColor}
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
            {cards.map((card, index) => (
              <HowItWorksCard
                key={index}
                number={card.stepNumber}
                title={card.cardTitle}
                description={card.cardDescription}
                animation
                colorMode={colorMode}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
