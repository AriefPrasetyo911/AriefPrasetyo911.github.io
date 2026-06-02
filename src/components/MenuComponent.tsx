import { useTranslation } from "react-i18next";
import { House, CircleQuestionMarkIcon, Newspaper, LayoutDashboard, Mail } from "lucide-react"
export const MenuComponent = () => {
  const { t } = useTranslation();
  return (
    <header
      id="header"
      className="header flex flex-col justify-center">
      <i className="header-toggle xl:hidden bi bi-list"></i>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active">
              <House size={20} />
              <span>{t("nav.home")}</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <CircleQuestionMarkIcon size={20} />
              <span>{t("nav.about")}</span>
            </a>
          </li>
          <li>
            <a href="#resume">
              <Newspaper size={20} />
              <span>{t("nav.resume")}</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <LayoutDashboard size={20} />
              <span>{t("nav.portfolio")}</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Mail size={20} />
              <span>{t("nav.contact")}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
