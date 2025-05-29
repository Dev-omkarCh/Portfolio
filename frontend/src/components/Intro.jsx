import { FaDownload, FaFacebook, FaFileAlt, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import image from "../assets/hero1.svg";
import backgroundImage from "../assets/p10.jpg";
import { useEffect, useState } from 'react';
import useTheme from '../store/themeStore';
export default function Intro() {

  const [width, setWidth] = useState(0);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  

  return (
    <section className={`flex flex-col md:flex-row justify-around items-center px-8 h-[100dvh] 
    border border-b border-white/10 bg-none bg-cover`}
    style={{ backgroundImage: `${ width < 640 ? `url(${backgroundImage})` : 'none'}` }}
    >
      <div className="max-w-xl text-wrap">
        <h2 className="leading-tight">
          <span className=' font-playfair text-3xl tracking-widest font-light'>Hello, I’m</span>
          <span className="flex text-[4rem] font-extrabold gradient">Web Developer</span>
        </h2>
        <p className={`mt-4 text-lg ${ theme ? "text-light-tertiary" : " text-dark-tertiary" } `}>
          I build beautiful and performant web apps using React, TailwindCSS, and modern tools.
        </p>
        <div className="flex gap-4 mt-6">
          
          <button className="px-6 py-3 
          bg-dark-accent hover:bg-dark-accentHover rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out"
          >
            <a href="/resume.docx" download className='flex justify-center items-center gap-2'>
              <FaFileAlt /> Download CV
            </a>
          </button>
          
        </div>
        <div className='flex p-3 gap-10 mt-10 text-2xl'>
          <a href="https://github.com/Dev-omkarCh" target="_blank" className='text-lg hover:scale-125
           transition-all duration-300 ease-in-out hover:text-dark-accent'><FaGithub /></a>
          <a href="https://linkedin.com/in/omkar-chikhale" target="_blank" className='text-lg hover:scale-125
           transition-all duration-300 ease-in-out hover:text-dark-accent'><FaLinkedin /></a>
          <a href="https://www.facebook.com/share/1GaWrkhDEn/" target="_blank" className='text-lg hover:scale-125
           transition-all duration-300 ease-in-out hover:text-dark-accent'><FaFacebook /></a>
          <a href="https://www.instagram.com/om.kar816/" target="_blank" className='text-lg hover:scale-125
           transition-all duration-300 ease-in-out hover:text-dark-accent'><FaInstagram /></a>
        </div>
      </div>
      <img src={image} alt="hero" className="w-[30%] mt-10 md:mt-0 hidden md:block" />
    </section>
  );
}
