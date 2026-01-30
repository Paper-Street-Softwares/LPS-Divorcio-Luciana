import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import content from "../../../content/content";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function ParagraphSocial() {
  return (
    <MotionDivDownToUp>
      <Paragraphs className="text-white text-opacity-80 mb-[48px]">
        {content.texts.about.aboutSocial.paragraph}
      </Paragraphs>
    </MotionDivDownToUp>
  );
}

export default ParagraphSocial;
