import React from 'react';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';

const experiences = [
  {
    company: 'OpenAI',
    role: 'Frontend Developer Intern',
    description: 'Built interactive dashboards and optimized UI for responsiveness.',
    duration: '3 Months',
    image: '', // Insert image URL or leave blank
    type: 'internship',
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    description: 'Worked on scalable microservices and real-time data processing.',
    duration: '1 Year',
    image: '',
    type: 'job',
  },
  {
    company: 'StartupX',
    role: 'Full Stack Developer',
    description: 'Developed MVP for a product launch using MERN stack.',
    duration: '6 Months',
    image: '',
    type: 'job',
  },
];

const Experience = () => {
  return (
    <div className="bg-[#0f0f1b] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#1a1a2e] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative">
            <div className="h-40 bg-gray-700 flex items-center justify-center relative">
              {exp.image ? (
                <img src={exp.image} alt={exp.company} className="h-full w-full object-cover" />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
              <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full shadow-lg">
                {exp.type === 'internship' ? <FaUserGraduate size={16} /> : <FaBriefcase size={16} />}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
              <p className="text-sm text-blue-400 mb-1">{exp.role}</p>
              <p className="text-sm text-gray-300 mb-2">{exp.description}</p>
              <p className="text-xs text-gray-400">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
