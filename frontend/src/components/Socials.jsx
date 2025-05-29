import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import useTheme from '../store/themeStore';

export default function Socials() {
  const { theme } = useTheme();
  return (
    <footer className={`px-8 py-10 text-center border-t-2 ${ theme ? "bg-black border-dark" : "bg-light-tertiary border-light"}`}>
      <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
      <div className="flex justify-center gap-6 text-2xl text-primary">
        <a href="https://linkedin.com/in/omkar-chikhale" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Dev-omkarCh" target="_blank"><FaGithub /></a>
        <a href="mailto:omkarchikhale.dev@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="text-gray-600 mt-4 text-sm">&copy; {new Date().getFullYear()} Omkar Chikhale</p>
    </footer>
  );
}
