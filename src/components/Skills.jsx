import React from "react";

const skills = [
  // Développement Web
  { name: "ReactJS", level: "Intermédiaire" },
  { name: "NodeJS", level: "Intermédiaire" },
  { name: "TailwindCSS", level: "Avancé" },
  { name: "Bootstrap", level: "Débutant" },
  { name: "WordPress", level: "Intermédiaire" },

  // Langages
  { name: "Python", level: "Avancé" },
  { name: "JavaScript", level: "Avancé" },
  { name: "HTML", level: "Avancé" },
  { name: "CSS", level: "Avancé" },

  // Intelligence Artificielle & Data Science
  { name: "TensorFlow", level: "Intermédiaire" },
  { name: "PyTorch", level: "Débutant" },
  { name: "Scikit-learn", level: "Intermédiaire" },
  { name: "Transformers (NLP)", level: "Intermédiaire" },
  { name: "Pandas", level: "Intermédiaire" },
  { name: "NumPy", level: "Intermédiaire" },
  { name: "Matplotlib", level: "Débutant" },
];

const SkillBar = ({ name, level }) => {
  const levelWidths = {
    Débutant: "w-1/4",
    Intermédiaire: "w-2/4",
    Avancé: "w-3/4",
  };

  // Couleur plus douce (dégradé bleu → violet)
  const gradientColors = {
    Débutant: "bg-gradient-to-r from-sky-400 to-blue-500",
    Intermédiaire: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Avancé: "bg-gradient-to-r from-indigo-500 to-purple-600",
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-gray-300 italic">{level}</span>
      </div>
      <div className="w-full bg-gray-700/60 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${levelWidths[level]} ${gradientColors[level]}`}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-2/4 mx-auto py-12">
      <div className="pb-10 text-center">
        <h2 className="text-4xl font-bold text-white tracking-wider">
          Mes Compétences
        </h2>
        <p className="text-gray-400 mt-2">
          Développement Web • IA & Data Science • Outils
        </p>
      </div>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;
