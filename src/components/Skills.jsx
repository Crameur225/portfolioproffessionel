import React from "react";

const skills = [
  { name: "ReactJS", percentage: 45 },
  { name: "NodeJS", percentage: 30 },
  { name: "TailwindCSS", percentage: 80 },
  { name: "Bootstrap", percentage: 20 },
];

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-4">
        <div
          className="h-4 rounded"
          style={{
            width: `${percentage}%`,
            backgroundColor: "rgb(255, 94, 58)", // Rouge orangé
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-[85%] mx-auto p-4">
        <div className="py-10">
            <h2 className="text-5xl text-white text-center">SKILLS</h2>
        </div>
      <h2 className="text-lg font-bold mb-4 text-white">Compétences</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default Skills;
