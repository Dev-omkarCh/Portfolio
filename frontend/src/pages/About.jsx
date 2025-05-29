import FeatureGrid from "../components/FeatureGrid";
import useTheme from "../store/themeStore";

export default function About() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="px-8 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className=" leading-7">
        I'm a passionate web developer with expertise in React and the MERN stack.
        I love building engaging user interfaces and functional full-stack apps.
        With a background in IT and a strong eye for design, I aim to create seamless web experiences.
      </p>
      <FeatureGrid />
    </div>
  );
}
