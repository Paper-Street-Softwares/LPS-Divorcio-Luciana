import React, { useEffect, useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
function LinksNavegationFooter({ mode = "blog" }) {
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    const updateVisible = () => {
      const allIds = content.texts.navbar.menuId;
      const allLabels = content.texts.navbar.menuItems;

      const paired = allIds.map((id, index) => ({
        id,
        label: allLabels[index] || id,
      }));

      // FILTRAR SOMENTE OS IDS PRESENTES NO DOM
      const onlyExisting = paired.filter(({ id }) => {
        return document.getElementById(id);
      });

      setVisibleLinks(onlyExisting);
    };

    // roda uma vez ao carregar
    updateVisible();

    // observa alterações no DOM (se uma seção aparecer depois)
    const observer = new MutationObserver(updateVisible);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(visibleLinks.length / 2);
  const firstHalf = visibleLinks.slice(0, half);
  const secondHalf = visibleLinks.slice(half);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const renderLink = (id, label) => {
    const commonProps = {
      "aria-label": label,
      title: label,
      "data-track": id,
      className: "cursor-pointer",
    };

    if (mode === "blog") {
      return (
        <a
          href={`#${id}`}
          {...commonProps}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(id);
          }}
        >
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </a>
      );
    } else {
      const to = id === "inicio" ? "/" : `/${id.toLowerCase()}`;
      return (
        <a href={to} {...commonProps}>
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </a>
      );
    }
  };

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ id, label }) => (
            <div key={id} className="h-auto">
              {renderLink(id, label)}
            </div>
          ))}
        </div>

        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ id, label }) => (
            <div key={id} className="h-auto">
              {renderLink(id, label)}
            </div>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
