import useTheme from "../store/themeStore";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.avif";

const projects = [
  {
    title: 'Video Call Interview App',
    description: 'A video interview platform using GetStream, Next.js and Convex.',
    image: project1, // You can use a real image path or leave empty
    start: 'Jan 2024',
    end: 'Mar 2024',
    skills: ['Next.js', 'GetStream', 'Convex', 'Tailwind'],
  },
  {
    title: 'Realtime Chat App',
    description: 'Real-time chat app using MERN stack with socket integration.',
    image: project2,
    start: 'Nov 2023',
    end: 'Jan 2024',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Muliplayer Chess Game',
    description: 'Multiplayer chess game built with MERN and custom logic.',
    image: project3,
    start: 'Aug 2023',
    end: 'Oct 2023',
    skills: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
  },
];

const Projects = () => {
  const { theme } = useTheme();

  const handleClick = (title) => {
    switch (title) {
      case 'Video Call Interview App':
        window.open('https://github.com/Dev-omkarCh/Interview-App', '_blank');
        break;
      case 'Realtime Chat App':
        window.open('https://github.com/Dev-omkarCh/Chat-app/tree/master', '_blank');
        break;
      case 'Muliplayer Chess Game':
        window.open('https://github.com/Dev-omkarCh/PlayChess', '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 border-t-2
    ${ theme ? "bg-dark-primary border-dark" : "bg-light-primary border-light"}`}>
      <h2 className="text-[3rem] font-bold mb-10 text-center gradient ">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
          key={index} 
          className={`rounded-lg overflow-hidden shadow-lite
            hover:shadow-medium transition duration-300 hover:cursor-pointer border
            ${theme ? "bg-dark-secondary  border-dark" : "bg-light-secondary border-light"}`
          }
          >
            <div className="h-48 bg-gray-700 flex items-center justify-center" onClick={() => handleClick(project.title)}>
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className={`text-sm text-gray-300 mb-2 ${theme ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
              <p className="text-xs text-gray-400 mb-2">
                {project.start} - {project.end}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-xs ${theme ? "bg-dark-tertiary border-dark" : "bg-light-tertiary border-light"} px-3 py-2 rounded-full font-medium border-2 `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
