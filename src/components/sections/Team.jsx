import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";
import { useTranslation } from "react-i18next";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  const team = Object.values(content.texts.team.members);
  return (
    <SectionArea
      className="bg-bgSectionOpacityLight"
      paddingtop={true}
      id="team"
    >
      <SectionHeader
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={content.texts.team.miniTag}
        sectionHeaderTitle={content.texts.team.title}
        sectionHeaderSubtitle={content.texts.team.subtitle}
        titleColorSet="text-black"
        subtitleColorSet="text-black"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-wrap justify-evenly tablet1:items-start tablet1:gap-[20px]">
            <div className="flex flex-wrap justify-center gap-6 items-start">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  img={member.img.img}
                  alt={member.img.alt}
                  name={member.name}
                  role={member.role}
                  modalTitle={member.name}
                  modalContent={member.description}
                />
              ))}
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
