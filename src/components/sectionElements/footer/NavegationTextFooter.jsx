import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";
import content from "../../../content/content";
function NavegationTextFooter() {
  return (
    <MotionDivDownToUp>
      <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
        {content.texts.footer.footerNavegacaoText}
      </h1>
    </MotionDivDownToUp>
  );
}

export default NavegationTextFooter;
