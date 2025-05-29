import { FaMagic, FaDesktop, FaFilter, FaCalendarAlt, FaEnvelope, FaMobile, FaBook, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { FaLetterboxd } from 'react-icons/fa6';
import { WiDegrees } from 'react-icons/wi';
import useTheme from '../store/themeStore';

const features = [
  {
    icon: <FaGraduationCap className="text-white text-xl" />,
    text: "Bachelor's in Information Technology",
  },
  {
    icon: <FaEnvelope className="text-white text-xl" />,
    text: 'omkarchikhale.dev@gmail.com',
  },

];

export default function FeatureGrid() {
  const {theme, setTheme} = useTheme();
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((item, idx) => (
          <div key={idx} className={`flex items-start gap-3 p-4 ${theme ? "bg-dark-secondary border-dark" : " bg-light-tertiary border-light"} border rounded-xl`}>
            <div className="w-10 h-10 rounded-lg bg-[#6759ff] flex items-center justify-center">
              {item.icon}
            </div>
            <p className=" h-10 text-sm font-medium flex justify-center items-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
