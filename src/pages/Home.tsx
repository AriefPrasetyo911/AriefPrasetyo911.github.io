import { HeroComponent } from "../components/HeroComponent";
import { AboutComponent } from "../components/AboutComponent";
import { TechStack } from "../components/TechStack";
import { Experience } from "../components/Experience";
import { WorkResumes } from "../components/WorkResumes";
import { ContactComponent } from "../components/ContactComponent";

export const HomePage = ({ isLight }: { isLight: boolean }) => {
    return (
        <main className="max-w-full mx-auto">
            <HeroComponent isLight={isLight} />
            <AboutComponent isLight={isLight} />
            <TechStack isLight={isLight} />
            <Experience isLight={isLight} />
            <WorkResumes isLight={isLight} />
            <ContactComponent isLight={isLight} />
        </main>
    );
}