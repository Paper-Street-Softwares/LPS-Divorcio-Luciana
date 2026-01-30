import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { CalendarCheck2 } from "lucide-react";
import content from "../../../content/content";

function ExpedienteFooter({ showSecond = false }) {

  return (
    <>
      {/* Expediente principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90 text-paragraph2">
          <div>
            <CalendarCheck2 />
          </div>

          {/* Interpreta tags HTML do JSON */}
          <p>{content.texts.infos.officeHours}</p>
        </div>
      </MotionDivDownToUp>

      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <CalendarCheck2 />
            </div>

            {/* Interpreta tags HTML do JSON */}
            <p>{content.texts.infos.officeHours}</p>
          </div>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default ExpedienteFooter;
