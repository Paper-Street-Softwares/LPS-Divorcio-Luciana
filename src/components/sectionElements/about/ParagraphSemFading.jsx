import Paragraphs from "../Paragraphs";
import { useTranslation, Trans } from "react-i18next";

export default function ParagraphSemFading() {
  return (
    <Paragraphs className="text-white text-opacity-80">
      <Trans i18nKey="about.paragraph" components={{ br: <br /> }} />
    </Paragraphs>
  );
}
