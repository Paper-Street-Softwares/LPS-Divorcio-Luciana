import React from "react";
import { useTranslation } from "react-i18next";
import content, { infos } from "../../../content/content"; // importa direto a const infos

function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col">
      <p className="w-full opacity-75">
        {`${content.texts.footer.copyrightLine}`}
      </p>
      <p>
        <a
          className="transition hover:underline"
          target="_blank"
          href="https://www.paperstreet.com.br"
        >
          {content.texts.footer.footerDivulgacaoText}
        </a>
      </p>
    </div>
  );
}

export default CopyrightFooter;
