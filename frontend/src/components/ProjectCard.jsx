import image from "../assets/react.svg";
export default function ProjectCard() {
  return (
    <div className="flex items-center space-x-4 w-full max-w-xl">
        <div>
            <img
                src={image}
                alt="Informatica Interview"
                className="w-32 h-20 object-cover rounded-xl"
            />
        </div>
        
        <div>
            <h3 className="text-base font-semibold text-gray-200">
            The Ultimate Guide to Informatica Interview Questions
            </h3>
            <p className="text-sm text-gray-500">May 25, 2025</p>
        </div>
    </div>
  );
}
