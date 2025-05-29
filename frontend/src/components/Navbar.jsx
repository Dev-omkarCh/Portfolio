import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import useTheme from '../store/themeStore';
import HamburgerMenu from './HambergerMenu';

export default function Navbar() {
  const {theme, setTheme} = useTheme();
  return (
    <nav className={`sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b-2
    ${ theme ? "bg-dark-primary border-dark" : "bg-light-primary border-light"}
    transition-all duration-500 ease-in-out w-full
    `}>
      <HamburgerMenu />
      <h1 className="hidden text-2xl font-bold w-[20%] sm:flex font-playfair">Omkar Chikhale</h1>
      <div className="hidden w-[60%] justify-center items-center gap-[10%] 
      font-extralight text-sm tracking-widest sm:flex font-playfair">
        <Link to="/" className="hover:text-dark-accent transition-all duration-300 ease-in-out">Home</Link>
        <Link to="/about" className="hover:text-dark-accent transition-all duration-300 ease-in-out">About</Link>
        <Link to="/contact" className="hover:text-dark-accent transition-all duration-300 ease-in-out">Contact</Link>
      </div>
      <div className='w-[20%] flex justify-end gap-4'>
        {/* <button className={`px-4 py-2 w-fit rounded-tl-2xl rounded-br-2xl sm:block hidden font-bold ${theme ? "bg-dark-accent" : "bg-light-accent"}`}>Hire me</button> */}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
