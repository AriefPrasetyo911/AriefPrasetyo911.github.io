import { Moon, Sun } from 'lucide-react';
// import { Link } from 'react-router-dom'

export const NavigationMenu = ({ themeToggle, theme }: {
    themeToggle: (theme: boolean) => void;
    theme: boolean;
}) => {
    const toggleTheme = () => {
        themeToggle(!theme);
    };

    const handleHireMe = () => alert('Hire me clicked!');

    return (
        // <nav className="px-6 py-4 bg-gray-900 text-white flex justify-between border-b-2 border-gray-500">
        //     <div>
        //         <span className="text-xl font-bold">Arief.dev</span>
        //     </div>
        //     <div>
        //         <ul className="flex">
        //             <li className="mx-4">
        //                 <Link to={'/'} className='nav-link'>Home</Link>
        //             </li>
        //             <li className="mx-4">
        //                 <Link to={'about'} className='nav-link'>About</Link>
        //             </li>
        //             <li className="mx-4">
        //                 <Link to={'work'} className='nav-link'>Work</Link>
        //             </li>
        //             <li className="mx-4">
        //                 <Link to={'resume'} className='nav-link'>Resume</Link>
        //             </li>
        //             <li className="mx-4">
        //                 <Link to={'contact'} className='nav-link'>Contact</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     <div>
        //         <label className="flex cursor-pointer gap-2 items-center">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 width="20"
        //                 height="20"
        //                 viewBox="0 0 24 24"
        //                 fill="none"
        //                 stroke="currentColor"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round">
        //                 <circle cx="12" cy="12" r="5" />
        //                 <path
        //                     d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        //             </svg>
        //             <input type="checkbox" value="synthwave" className="toggle theme-controller" />
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 width="20"
        //                 height="20"
        //                 viewBox="0 0 24 24"
        //                 fill="none"
        //                 stroke="currentColor"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round">
        //                 <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        //             </svg>
        //         </label>
        //     </div>
        // </nav>
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
                            <a className='nav-link' href='home'>Home</a>
                        </li>
                        <li>
                            <a className='nav-link' href='about'>About</a>
                        </li>
                        <li>
                            <a className='nav-link' href='work'>Work</a>
                        </li>
                        <li>
                            <a className='nav-link' href='resume'>Resume</a>
                        </li>
                        <li>
                            <a className='nav-link' href='contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end gap-2'>
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