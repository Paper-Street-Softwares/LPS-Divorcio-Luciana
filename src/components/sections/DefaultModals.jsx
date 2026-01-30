import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setVisible(true);
  };

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const features = Object.values(content.texts.features.cards);

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode={colorMode}
        miniTitleBgColor="bg-minititleDark"
      />

      <SectionWrapper>
        <div className="flex flex-wrap justify-center items-center tablet1:items-center w-full gap-6 tablet1:gap-12 desktop1:gap-16">
          {/* Coluna esquerda */}{" "}
          {features.map((card, index) => (
            <MotionDivDownToUp>
              <div
                key={index}
                className="flex-1 flex flex-wrap justify-center gap-6 tablet1:gap-4 items-center tablet1:items-start"
              >
                <IconButtonFeatureCard
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  className={textClass}
                  colorMode={colorMode}
                  onOpenModal={() => openModal(card.title, card.description)}
                />
              </div>
            </MotionDivDownToUp>
          ))}
        </div>

        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={
            <div className="w-full border-b border-gray-300 pb-2">
              <span dangerouslySetInnerHTML={{ __html: modalTitle }} />
            </div>
          }
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{
            "4000px": "641px",
            "1024px": "641px",
            "641px": "85vw",
          }}
        >
          {modalContent}
        </Dialog>
      </SectionWrapper>
    </SectionArea>
  );
}
