import React from "react";

const skills = [
  { name: "ReactJS", level: "Débutant" },
  { name: "NodeJS", level: "Débutant" },
  { name: "TailwindCSS", level: "Débutant" },
  { name: "Bootstrap", level: "Débutant"},
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-red-600">{level}</span>
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
      <h2 className="text-lg font-bold mb-4 text-white uppercase">Compétences</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;
