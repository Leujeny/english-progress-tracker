export default function Header() {
    return (
        <div className="navbar bg-base-200 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow">
                        <li><a className="text-base p-4" href='/'>Accueil</a></li>
                        <li><a className="text-base p-4" href='/session'>Mes sessions</a></li>
                        <li><a className="text-base p-4" href='/ressource'>Mes ressources</a></li>
                        <li><a className="text-base p-4" href='/about'>A propos</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="text-xl hidden md:block" href="/">Suivi des progrès en anglais</a>
                <a className="text-xl md:hidden" href="/">S.P.A</a>
            </div>
            <div className="navbar-end">
                <button className="btn">[theme]</button>
            </div>
        </div>
    );
}
