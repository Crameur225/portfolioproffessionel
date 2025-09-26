import React from "react";
import { EXPERINCES, FORMATIONS } from "./FORMATIONS";

const MoiEnResumer = () => {
  return (
    <div className="py-20 text-colorCustoms bg-gray-900" id="about-me">
      <p className="text-center text-red-500 text-lg font-semibold tracking-widest">
        RESUMÉ
      </p>
      <h2 className="text-center font-extrabold text-5xl pb-16 tracking-wide text-white">
        Formations et Expérience
      </h2>

      <div className="w-11/12 md:w-4/5 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-16">
        {/* Formations */}
        <div>
          <h2 className="uppercase text-3xl py-6 text-gradient-to-r from-indigo-400 to-purple-600 font-bold">
            Formation et Certifications
          </h2>
          <div className="flex flex-col gap-8">
            {FORMATIONS.map((formation, key) => (
              <div
                key={key}
                className="w-full bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6"
              >
                <div className="pb-4 border-b border-gray-600 mb-4">
                  <h2 className="text-2xl md:text-3xl text-white font-semibold">
                    {formation.title}
                  </h2>
                  <p className="text-red-500 italic">{formation.date}</p>
                </div>
                <p className="font-medium text-gray-300">{formation.name}</p>
                <p className="py-2 text-gray-400">{formation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div>
          <h2 className="uppercase text-3xl py-6 text-gradient-to-r from-indigo-400 to-purple-600 font-bold">
            Expérience Professionnelle
          </h2>
          <div className="flex flex-col gap-8">
            {EXPERINCES.map((experience, key) => (
              <div
                key={key}
                className="w-full bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6"
              >
                <div className="pb-4 border-b border-gray-600 mb-4">
                  <h2 className="text-2xl md:text-3xl text-white font-semibold">
                    {experience.title}
                  </h2>
                  <p className="text-red-500 italic">{experience.date}</p>
                </div>
                <p className="font-medium text-gray-300">{experience.name}</p>
                <p className="py-2 text-gray-400">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiEnResumer;
