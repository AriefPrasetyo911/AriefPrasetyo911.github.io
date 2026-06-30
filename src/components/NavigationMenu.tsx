import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './shared/LanguageSwitcher';
import { useState, useEffect } from 'react';
import NeonLogo from './shared/NeonLogo';

export const NavigationMenu = ({ setTheme, theme }: {
    setTheme: (theme: boolean) => void;
    theme: boolean;
}) => {
    const toggleTheme = () => {
        setTheme(!theme);
    };

    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'work', 'resume', 'contact'];
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const WHATSAPP_NUMBER = "6282213247456";
    const WHATSAPP_MESSAGE = encodeURIComponent("Hi Arief! I'd like to discuss a potential collaboration with you.");
    const handleHireMe = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank", "noopener,noreferrer");
    };

    const getLinkStyle = (section: string) => ({
        color: activeSection === section ? 'var(--accent)' : 'inherit',
        fontWeight: activeSection === section ? 600 : 400,
    });

    return (
        <div className="sticky top-0 z-10 glass-card shadow-lg">
            <div className='navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='navbar-start'>
                    <a className="text-base font-medium text-(--text)" href="/">
                        <NeonLogo />
                    </a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 text-[14px] text-(--text3) gap-2'>
                        <li>
                            <a className='nav-link transition-colors duration-300' href='#home' style={getLinkStyle('home')}>{t('nav.home')}</a>
                        </li>
                        <li>
                            <a className='nav-link transition-colors duration-300' href='#about' style={getLinkStyle('about')}>{t('nav.about')}</a>
                        </li>
                        <li>
                            <a className='nav-link transition-colors duration-300' href='#work' style={getLinkStyle('work')}>{t('nav.work')}</a>
                        </li>
                        <li>
                            <a className='nav-link transition-colors duration-300' href='#resume' style={getLinkStyle('resume')}>{t('nav.resume')}</a>
                        </li>
                        <li>
                            <a className='nav-link transition-colors duration-300' href='#contact' style={getLinkStyle('contact')}>{t('nav.contact')}</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end gap-2'>
                    <LanguageSwitcher />
                    <button className={`btn btn-circle btn-sm border border-(--border) bg-transparent text-(--text) ${theme ? 'hover:bg-black/5' : 'hover:bg-white/10'}`} onClick={toggleTheme}>
                        {theme ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button className="btn btn-primary btn-sm text-white border-0" style={{ backgroundColor: 'var(--accent)' }} onClick={handleHireMe}>
                        Hire me
                    </button>
                </div>
            </div>
        </div>
    )
}