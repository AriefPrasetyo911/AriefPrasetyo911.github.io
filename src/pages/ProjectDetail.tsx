import { useParams, Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LinkIcon, SquareArrowOutUpRight, Lock, Unlock, Globe, Building, Brain, Gamepad2, Briefcase, PencilRuler, LayoutGrid, ShieldUser, Smartphone, BookOpen, Activity, Calendar, Tag, User } from "lucide-react";

export const ProjectDetailPage = ({ isLight }: { isLight: boolean }) => {
    const { id } = useParams();
    const { t } = useTranslation();

    // otomatis scroll keatas saat halaman dibuka
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // load data i18n
    const projectsRaw = t("projects", { returnObjects: true }) as any[]
    const projects = projectsRaw.slice(1);

    // find project
    const currentProject = projects.find(p => p.id === id);

    // jika project tidak ada
    if (!currentProject) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8"
                style={{ color: "var(--text)" }}>
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Link to="/">
                    <a className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                        {t("back_home")}
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <main className="max-w-full mx-auto px-10 py-10 min-h-screen">
            <div className="inline-flex gap-2.5">
                {/* untuk tombol back */}
                <Link to={"/"}>
                    <div className="inline-flex items-center text-[14px] font-medium transition-opacity hover:opacity-70 border-[0.1px] bg-amber-50 px-2 py-1 rounded-lg"
                        style={{
                            color: "var(--accent)",
                            borderColor: "var(--border)"
                        }}>
                        &larr; {t("common.backHome")}

                    </div>
                </Link>
                <span className="flex items-center text-[14px] font-medium "
                    style={{ color: "var(--accent" }}>Projects &nbsp;{`>`}</span>
                <span className="flex items-center text-[14px] font-bold underline "
                    style={{ color: "var(--accent" }}>{currentProject.name}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 mt-10">
                <div className="col-span-1 md:col-span-4 lg:col-span-4 ">
                    {/* untuk image / ss project */}
                    <img src={currentProject.image} alt={"Thumbnail " + currentProject.name}
                        className="w-full h-[250px] object-cover rounded-lg shadow-lg "
                        style={{
                            border: "1px solid var(--border)",
                            background: "var(--bg)",
                        }}
                    />

                    {/* untuk card tags */}
                    <div className="mt-4 border-gray-200 rounded-xl px-3 py-3 shadow-lg"
                        style={{
                            backgroundColor: "var(--bg)", color: "var(--text),", border: "1px solid var(--border)",
                        }}>
                        <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
                            {t("common.techStack")}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.tags.map((tag: string, index: number) => (
                                <span key={index} className="px-2.5 py-1 text-[13px] font-medium rounded-md bg-accent/10"
                                    style={{
                                        border: "1px solid var(--border)",
                                        background: "var(--bg)",
                                        color: "var(--text)"
                                    }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* untuk links */}
                    <div className="mt-4 rounded-xl px-3 py-3 shadow-lg"
                        style={{ backgroundColor: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)" }}>
                        <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
                            {t("common.links")}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {currentProject.link && Array.isArray(currentProject.link) && currentProject.link.map((linkItem: { name: string; url: string }, index: number) => {
                                if (linkItem.name === "View Source Code" && currentProject.repo === "private") {
                                    return null;
                                }
                                return (
                                    <a href={linkItem.url} target="_blank" key={index} className="inline-flex items-center justify-center gap-2 px-2.5 py-1.5 text-[13px] font-medium rounded-md border bg-accent/10 text-center hover:opacity-80 transition-opacity"
                                        style={{
                                            border: "1px solid var(--border)",
                                        }}>
                                        {linkItem.name === "View Demo" && <SquareArrowOutUpRight size={14} />}
                                        {linkItem.name === "View Source Code" && currentProject.repo === "public" && <LinkIcon size={14} />}
                                        {linkItem.name}
                                    </a>
                                )
                            })}
                            <div className={`inline-flex items-center justify-center gap-2 px-2.5 py-1.5 text-[13px] font-medium rounded-lg border text-center ${currentProject.repo === "private"
                                ? isLight ? "bg-red-50 border-red-200 text-red-600" : "bg-red-900/30 border-red-800 text-red-400"
                                : isLight ? "bg-green-50 border-green-200 text-green-600" : "bg-green-900/30 border-green-800 text-green-400"
                                }`}>
                                {currentProject.repo === "private" ? <Lock size={14} /> : <Unlock size={14} />}
                                Repository: <span className="capitalize">{currentProject.repo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-8 lg:col-span-8">
                    <div className=" rounded-xl px-5 py-3.5 shadow-lg"
                        style={{ backgroundColor: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)" }}>
                        {/* pils */}
                        <div className="inline-flex items-center px-2 py-0 rounded-md border border-sky-600/40 bg-accent/10">
                            <span className="text-[13px] font-medium flex items-center" style={{
                                color: "var(--text)"
                            }}>
                                {(() => {
                                    const cat = currentProject.category.toLowerCase();
                                    if (cat.includes("government") || cat.includes("pemerintah")) return <Building size={14} className="mr-1" />;
                                    if (cat.includes("ai") || cat.includes("automation") || cat.includes("otomasi")) return <Brain size={14} className="mr-1" />;
                                    if (cat.includes("internal tools") || cat.includes("tools internal")) return <PencilRuler size={14} className="mr-1" />;
                                    if (cat.includes("frontend")) return <LayoutGrid size={14} className="mr-1" />;
                                    if (cat.includes("game")) return <Gamepad2 size={14} className="mr-1" />;
                                    if (cat.includes("corporate") || cat.includes("korporat") || cat.includes("enterprise")) return <Briefcase size={14} className="mr-1" />;
                                    if (cat.includes("education") || cat.includes("pendidikan")) return <BookOpen size={14} className="mr-1" />;
                                    if (cat.includes("healthcare") || cat.includes("kesehatan")) return <Activity size={14} className="mr-1" />;
                                    if (cat.includes("mobile")) return <Smartphone size={14} className="mr-1" />;
                                    if (cat.includes("data") || cat.includes("web") || cat.includes("streaming")) return <Globe size={14} className="mr-1" />;
                                    if (cat.includes("personal")) return <ShieldUser size={14} className="mr-1" />;
                                    return <Globe size={14} className="mr-1" />; // default icon if none match
                                })()}
                                {currentProject.category}
                            </span>
                        </div>
                        {/* title */}
                        <p className="text-[28px] font-bold mt-7 mb-1">
                            {currentProject.name}
                        </p>
                        {/* description */}
                        <p className="text-[18px] font-normal mt-5 leading-relaxed" style={{
                            color: "var(--text)"
                        }}>
                            {currentProject.description}
                        </p>
                        <hr className="mt-5 mb-5" style={{
                            borderColor: "var(--border)"
                        }} />
                        {/* buat card untuk info project */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8">
                            <div className={`rounded-[10px] px-4 py-3 shadow-lg`} style={{
                                border: "2px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)"
                            }}>
                                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                                    {t("common.companyOrganization", "COMPANY / ORG")}
                                </h3>
                                <div className="flex items-center text-[14px] font-semibold">
                                    <Building size={14} className="mr-2 text-gray-500" />
                                    <span>{currentProject.workplace}</span>
                                </div>
                            </div>
                            <div className={`rounded-[10px] px-4 py-3 shadow-lg`} style={{
                                border: "2px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)"
                            }}>
                                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                                    {t("common.period", "PERIOD")}
                                </h3>
                                <div className="flex items-center text-[14px] font-semibold">
                                    <Calendar size={14} className="mr-2 text-gray-500" />
                                    <span>{currentProject.period}</span>
                                </div>
                            </div>
                            <div className={`rounded-[10px] px-4 py-3 shadow-lg`} style={{
                                border: "2px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)"
                            }}>
                                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                                    {t("common.status", "STATUS")}
                                </h3>
                                <div className="flex items-center text-[14px] font-semibold">
                                    <div className={`w-[9px] h-[9px] rounded-full mr-2 ${currentProject.status.toLowerCase() === 'active' || currentProject.status.toLowerCase() === 'aktif' || currentProject.status.toLowerCase() === 'ongoing' ? 'bg-[#1e782c]' : 'bg-gray-400'}`}></div>
                                    <span>{currentProject.status}</span>
                                </div>
                            </div>
                            <div className={`rounded-[10px] px-4 py-3 shadow-lg`} style={{
                                border: "2px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)"
                            }}>
                                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                                    {t("common.category", "CATEGORY")}
                                </h3>
                                <div className="flex items-center text-[14px] font-semibold">
                                    <Tag size={14} className="mr-2 text-gray-500" />
                                    <span>{currentProject.category}</span>
                                </div>
                            </div>
                            <div className={`rounded-[10px] px-4 py-3 shadow-lg`} style={{
                                border: "2px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)"
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
                </div>
            </div>
        </main>
    )
}