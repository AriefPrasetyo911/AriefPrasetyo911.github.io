import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  SquareArrowOutUpRight,
  Lock,
  Unlock,
  Globe,
  Building,
  Brain,
  Gamepad2,
  Briefcase,
  PencilRuler,
  LayoutGrid,
  ShieldUser,
  Smartphone,
  BookOpen,
  Activity,
  Calendar,
  Tag,
  User,
  Newspaper,
  AlertTriangle,
  Lightbulb,
  Code2,
} from "lucide-react";

export const ProjectDetailPage = ({ isLight }: { isLight: boolean }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  // otomatis scroll keatas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // load data i18n
  const projectsRaw = t("projects", { returnObjects: true }) as any[];
  const projects = projectsRaw.slice(1);
  console.log("projectsRaw", projectsRaw);

  // find project
  const currentProject = projects.find((p) => p.id === id);
  console.log("currentProject", currentProject);

  // jika project tidak ada
  if (!currentProject) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8"
        style={{ color: "var(--text)" }}>
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link to="/">
          <a className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            {t("back_home")}
          </a>
        </Link>
      </div>
    );
  }

  // determine if a link is private (disabled)
  const isLinkPrivate = (linkItem: {
    url: string;
    icon: string;
    repoType?: string;
  }) => {
    const repoType = linkItem.repoType?.toLowerCase();

    if (repoType === "public") return false;
    if (repoType === "private") return true;

    return !linkItem.url || linkItem.icon === "lock";
  };

  // get the appropriate icon for a link
  const getLinkIcon = (icon: string) => {
    switch (icon) {
      case "external":
        return <SquareArrowOutUpRight size={14} />;
      case "github":
        return <Code2 size={14} />;
      default:
        return <SquareArrowOutUpRight size={14} />;
    }
  };

  return (
    <main className="max-w-full mx-auto px-10 py-10 min-h-screen">
      <div className="inline-flex gap-2.5">
        {/* untuk tombol back */}
        <Link to={"/"}>
          <div
            className="inline-flex items-center text-[14px] font-medium transition-opacity hover:opacity-70 border-[0.1px] bg-amber-50 px-2 py-1 rounded-lg"
            style={{
              color: "var(--accent)",
              borderColor: "var(--border)",
            }}>
            &larr; {t("common.backHome")}
          </div>
        </Link>
        <span
          className="flex items-center text-[14px] font-medium "
          style={{ color: "var(--accent" }}>
          Projects &nbsp;{`>`}
        </span>
        <span
          className="flex items-center text-[14px] font-bold underline "
          style={{ color: "var(--accent" }}>
          {currentProject.name}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 mt-10">
        <div className="col-span-1 md:col-span-4 lg:col-span-4 ">
          {/* untuk image / ss project */}
          <img
            src={currentProject.image}
            alt={"Thumbnail " + currentProject.name}
            className="w-full h-[250px] object-cover rounded-lg shadow-lg "
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg)",
            }}
          />

          {/* untuk card tags */}
          <div
            className="mt-4 border-gray-200 rounded-xl px-3 py-3 shadow-lg"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text),",
              border: "1px solid var(--border)",
            }}>
            <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
              {t("common.techStack")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[13px] font-medium rounded-md bg-accent/10"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    color: "var(--text)",
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* untuk links */}
          <div
            className="mt-4 rounded-xl px-3 py-3 shadow-lg"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}>
            <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
              {t("common.links")}
            </h3>
            <div className="flex flex-col gap-2">
              {currentProject.links &&
                Array.isArray(currentProject.links) &&
                currentProject.links.map(
                  (
                    linkItem: {
                      label: string;
                      url: string;
                      icon: string;
                      repoType?: string;
                    },
                    index: number,
                  ) => {
                    const isPrivate = isLinkPrivate(linkItem);
                    return isPrivate ? (
                      <div
                        key={index}
                        className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 text-[13px] font-medium rounded-md border text-center opacity-50 cursor-not-allowed"
                        style={{
                          border: "1px solid var(--border)",
                          backgroundColor: "var(--bg)",
                          color: "var(--text)",
                        }}>
                        <Lock size={14} />
                        {linkItem.label}
                      </div>
                    ) : (
                      <a
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 text-[13px] font-medium rounded-md border bg-accent/10 text-center hover:opacity-80 transition-opacity"
                        style={{
                          border: "1px solid var(--border)",
                        }}>
                        {getLinkIcon(linkItem.icon)}
                        {linkItem.label}
                      </a>
                    );
                  },
                )}
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-8">
          <div
            className="rounded-xl px-5 py-3.5 shadow-lg"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}>
            {/* pils */}
            <div className="inline-flex items-center px-2 py-0 rounded-md border border-sky-600/40 bg-accent/10">
              <span
                className="text-[13px] font-medium flex items-center"
                style={{
                  color: "var(--text)",
                }}>
                {(() => {
                  const cat = currentProject.category.toLowerCase();
                  if (cat.includes("government") || cat.includes("pemerintah"))
                    return <Building size={14} className="mr-1" />;
                  if (
                    cat.includes("ai") ||
                    cat.includes("automation") ||
                    cat.includes("otomasi")
                  )
                    return <Brain size={14} className="mr-1" />;
                  if (
                    cat.includes("internal tools") ||
                    cat.includes("tools internal")
                  )
                    return <PencilRuler size={14} className="mr-1" />;
                  if (cat.includes("frontend"))
                    return <LayoutGrid size={14} className="mr-1" />;
                  if (cat.includes("game"))
                    return <Gamepad2 size={14} className="mr-1" />;
                  if (
                    cat.includes("corporate") ||
                    cat.includes("korporat") ||
                    cat.includes("enterprise")
                  )
                    return <Briefcase size={14} className="mr-1" />;
                  if (cat.includes("education") || cat.includes("pendidikan"))
                    return <BookOpen size={14} className="mr-1" />;
                  if (cat.includes("healthcare") || cat.includes("kesehatan"))
                    return <Activity size={14} className="mr-1" />;
                  if (cat.includes("mobile"))
                    return <Smartphone size={14} className="mr-1" />;
                  if (
                    cat.includes("data") ||
                    cat.includes("web") ||
                    cat.includes("streaming")
                  )
                    return <Globe size={14} className="mr-1" />;
                  if (cat.includes("personal"))
                    return <ShieldUser size={14} className="mr-1" />;
                  return <Globe size={14} className="mr-1" />; // default icon if none match
                })()}
                {currentProject.category}
              </span>
            </div>
            {/* title */}
            <p className="text-[28px] font-bold mt-7 mb-1">
              {currentProject.name}
            </p>
            {/* summary */}
            <p
              className="text-[18px] font-normal mt-5 leading-relaxed"
              style={{
                color: "var(--text)",
              }}>
              {currentProject.summary}
            </p>
            <hr
              className="mt-5 mb-5"
              style={{
                borderColor: "var(--border)",
              }}
            />

            {/* buat card untuk info project */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8">
              <div
                className={`rounded-[10px] px-4 py-3 shadow-lg`}
                style={{
                  border: "2px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  {t("common.companyOrganization", "COMPANY / ORG")}
                </h3>
                <div className="flex items-center text-[14px] font-semibold">
                  <Building size={14} className="mr-2 text-gray-500" />
                  <span>{currentProject.workplace}</span>
                </div>
              </div>
              <div
                className={`rounded-[10px] px-4 py-3 shadow-lg`}
                style={{
                  border: "2px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  {t("common.period", "PERIOD")}
                </h3>
                <div className="flex items-center text-[14px] font-semibold">
                  <Calendar size={14} className="mr-2 text-gray-500" />
                  <span>{currentProject.period}</span>
                </div>
              </div>
              <div
                className={`rounded-[10px] px-4 py-3 shadow-lg`}
                style={{
                  border: "2px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  {t("common.status", "STATUS")}
                </h3>
                <div className="flex items-center text-[14px] font-semibold">
                  <div
                    className={`w-[9px] h-[9px] rounded-full mr-2 ${currentProject.status.toLowerCase() === "active" || currentProject.status.toLowerCase() === "aktif" || currentProject.status.toLowerCase() === "ongoing" ? "bg-[#1e782c]" : "bg-gray-400"}`}></div>
                  <span>{currentProject.status}</span>
                </div>
              </div>
              <div
                className={`rounded-[10px] px-4 py-3 shadow-lg`}
                style={{
                  border: "2px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  {t("common.category", "CATEGORY")}
                </h3>
                <div className="flex items-center text-[14px] font-semibold">
                  <Tag size={14} className="mr-2 text-gray-500" />
                  <span>{currentProject.category}</span>
                </div>
              </div>
              <div
                className={`rounded-[10px] px-4 py-3 shadow-lg`}
                style={{
                  border: "2px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}>
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  {t("common.role", "ROLE")}
                </h3>
                <div className="flex items-center text-[14px] font-semibold">
                  <User size={14} className="mr-2 text-gray-500" />
                  <span>{currentProject.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* description */}
          <div
            className="rounded-xl px-5 py-3.5 shadow-lg mt-5"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}>
            <p className="text-[28px] font-bold mt-1 mb-7 flex ">
              <Newspaper size={28} className="mr-2.5" />{" "}
              {projectsRaw[0].descriptionLabel}
            </p>
            <p
              className="text-[18px] font-normal mt-5 leading-relaxed"
              style={{
                color: "var(--text)",
              }}>
              {currentProject.description}
            </p>
          </div>

          {/* key & highlight */}
          <div
            className="rounded-xl px-5 py-3.5 shadow-lg mt-5"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}>
            <p className="text-[28px] font-bold mt-1 mb-7 flex ">
              <Newspaper size={28} className="mr-2.5" />{" "}
              {projectsRaw[0].keyHighlightsLabel}
            </p>
            <p
              className="text-[18px] font-normal mt-5 leading-relaxed"
              style={{
                color: "var(--text)",
              }}>
              {currentProject.highlights?.map(
                (highlight: any, index: number) => (
                  <ul key={index} className="list-disc pl-4">
                    <li className="mb-1.5">
                      {typeof highlight === "object" && highlight !== null
                        ? highlight.text
                        : highlight}
                    </li>
                  </ul>
                ),
              )}
            </p>
          </div>

          {/* challenge and solution */}
          {currentProject.challenges &&
            currentProject.challenges.length > 0 && (
              <div
                className="rounded-xl px-5 py-5 shadow-lg mt-5"
                style={{
                  backgroundColor: "var(--bg)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}>
                <p className="text-[28px] font-bold mt-1 mb-6 flex items-center">
                  <Newspaper size={28} className="mr-2.5" />{" "}
                  {projectsRaw[0].challengesSolutionsLabel}
                </p>
                <div className="flex flex-col gap-4">
                  {currentProject.challenges.map(
                    (challenge: any, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden"
                        style={{ border: "1px solid var(--border)" }}>
                        {/* Challenge header */}
                        <div
                          className="flex items-start gap-3 px-4 py-3"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--accent) 8%, transparent)",
                          }}>
                          <AlertTriangle
                            size={15}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--accent)", opacity: 0.8 }}
                          />
                          <p
                            className="text-[13px] font-semibold uppercase tracking-wide leading-snug"
                            style={{ color: "var(--accent)" }}>
                            {challenge.title}
                          </p>
                        </div>
                        {/* Solution body */}
                        <div
                          className="flex items-start gap-3 px-4 py-3"
                          style={{ borderTop: "1px solid var(--border)" }}>
                          <Lightbulb
                            size={15}
                            className="mt-0.5 shrink-0 text-yellow-500"
                          />
                          <p
                            className="text-[14px] leading-relaxed"
                            style={{ color: "var(--text)", opacity: 0.85 }}>
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </main>
  );
};
