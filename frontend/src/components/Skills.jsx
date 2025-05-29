import useTheme from "../store/themeStore";
import FeatureGrid from "./FeatureGrid";

const skills = [
  { name: 'React', level: 'Intermediate', group: 'frontend' },
  { name: 'JavaScript', level: 'Expert', group: 'frontend' },
  { name: 'TypeScript', level: 'Intermediate', group: 'frontend' },
  { name: 'NextJs', level: 'Intermediate', group: 'frontend' },
  { name: 'Tailwind CSS', level: 'Expert', group: 'frontend' },
  { name: 'Node', level: 'Intermediate', group: 'backend' },
  { name: 'MongoDB', level: 'Intermediate', group: 'backend' },
  { name: 'Java', level: 'Intermediate', group: 'backend' },
  { name: 'Git', level: 'Expert', group: 'tools' },
  { name: 'Excel', level: 'Intermediate', group: 'tools' },
  { name: 'SQL', level: 'Intermediate', group: 'backend' },
  { name: 'firebase', level: 'Beginner', group: 'backend' },
];


const getProgressWidth = (level) => {
  switch (level) {
    case 'Beginner':
      return 'w-1/4';
    case 'Intermediate':
      return 'w-2/3';
    case 'Expert':
      return 'w-full';
    default:
      return 'w-0';
  }
};

const getColor = (level) => {
  switch (level) {
    case 'Beginner':
      return 'bg-yellow-400';
    case 'Intermediate':
      return 'bg-purple-500';
    case 'Expert':
      return 'bg-green-500';
    default:
      return 'bg-gray-300';
  }
};

const SkillGroup = ({ group }) => {
  const { theme } = useTheme();
  return (
    <div className={` ${theme ? " bg-dark-secondary border-dark" : " bg-light-secondary border-light"} translate-y-0 border rounded-large p-8 shadow-medium flex flex-grow flex-col`} >
      <h3 className=" gradient font-bold text-2xl mb-6 capitalize">{group}</h3>
      {skills.map((skill, index) => {
        if (skill.group === group) {
          return (
            <div key={index} className="w-full">
              <div className="flex justify-between items-center w-full mb-4">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}</span>
              </div>
              <div className={`w-full h-2.5 mb-6 ${theme ? "bg-dark-tertiary" : "bg-light-tertiary"} rounded-full`}>
                <div
                  className={`h-full rounded-full ${getProgressWidth(skill.level)} ${getColor(skill.level)}`}
                ></div>
              </div>
            </div>
          )
        }
        return <></>
      })}
    </div>
  )
}

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className=
      {`skills w-full flex justify-center items-center flex-col mx-auto px-6 
    py-10 shadow-md border-t-2 ${ theme ? "bg-dark-primary border-dark" : "bg-light-primary border-light"}`}
    id="skills">
      {/* <FeatureGrid /> */}
      <h2 className="text-[3rem] font-bold mb-10 w-full text-center gradient">Skills & Technologies</h2>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillGroup group={"frontend"} />
        <SkillGroup group={"backend"} />
        <SkillGroup group={"tools"} />
      </div>
      

    </div>
  );
};

export default Skills;
