import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './shared/LanguageSwitcher';
// import { Link } from 'react-router-dom'

export const NavigationMenu = ({ setTheme, theme }: {
    setTheme: (theme: boolean) => void;
    theme: boolean;
}) => {
    const toggleTheme = () => {
        setTheme(!theme);
    };

    const { t } = useTranslation();

    const handleHireMe = () => alert('Hire me clicked!');

    return (
        <div className="sticky top-0 z-10 glass-card shadow-lg">
            <div className='navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='navbar-start'>
                    <a className="text-base font-medium text-(--text)">
                        arief<span className="text-(--accent)">.</span>dev
                    </a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 text-xs text-(--text3) gap-2'>
                        <li>
                            <a className='nav-link' href='home'>{t('nav.home')}</a>
                        </li>
                        <li>
                            <a className='nav-link' href='about'>{t('nav.about')}</a>
                        </li>
                        <li>
                            <a className='nav-link' href='work'>{t('nav.work')}</a>
                        </li>
                        <li>
                            <a className='nav-link' href='resume'>{t('nav.resume')}</a>
                        </li>
                        <li>
                            <a className='nav-link' href='contact'>{t('nav.contact')}</a>
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