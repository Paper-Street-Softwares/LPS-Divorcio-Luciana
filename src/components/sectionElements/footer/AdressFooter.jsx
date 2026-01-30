import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import content from "../../../content/content";

function AdressFooter({ showSecond = false }) {
  return (
    <>
      {/* Endereço principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90 text-paragraph3 desktop1:text-paragraph3">
          <div>
            <MapPin />
          </div>
          <p>{content.texts.infos.adress}</p>
        </div>
      </MotionDivDownToUp>

      {/* Endereço secundário */}
      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <MapPin />
            </div>

            <p>{content.texts.infos.adressSecundario}</p>
          </div>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default AdressFooter;
