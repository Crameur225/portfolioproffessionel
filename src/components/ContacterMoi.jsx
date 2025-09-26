import React from "react";
import profile from "../assets/photo1.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Swal from "sweetalert2";

const ContacterMoi = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "11b79496-234d-4c48-aebf-7ce3c0f76611");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Votre message a été envoyé",
        icon: "success",
      });
    }
  };

  return (
    <div className="py-20 bg-gray-900 text-colorCustoms" id="contact">
      <p className="text-center text-red-500 text-lg uppercase font-semibold tracking-widest">
        CONTACT
      </p>
      <h2 className="text-center text-5xl font-extrabold tracking-wider text-white pb-12">
        CONTACTEZ MOI
      </h2>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 w-11/12 mx-auto">
        {/* Profil */}
        <div className="bg-black/50 backdrop-blur-md shadow-2xl rounded-3xl p-6 flex flex-col items-center transition-all duration-500 hover:shadow-3xl">
          <img
            src={profile}
            alt="Profile"
            className="rounded-3xl shadow-lg w-72 h-72 object-cover mb-6"
          />
          <h2 className="text-3xl text-white font-bold mb-4">Développeur Web Fullstack</h2>
          <p className="text-gray-300 text-center mb-4">
            Passionné par le code, je suis développeur fullstack avec maîtrise du frontend et backend. 
            Je suis disponible pour rejoindre votre entreprise ou tout projet lié au développement web.
          </p>
          <p className="text-gray-300 mb-2">Je suis disponible au:</p>
          <p className="text-green-500 font-bold mb-2">
            Tel: <a href="tel:+2250700029598">+225 0700029598</a> / <a href="tel:+2250585296048">+225 0585296048</a>
          </p>
          <p className="text-green-500 font-bold mb-4">
            Email: <a href="mailto:gaelagbe@gmail.com">gaelagbe@gmail.com</a>
          </p>
          <div className="w-full text-center">
            <h3 className="text-xl uppercase font-bold mb-3">Trouvez-moi sur</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100092984683097"
                target="_blank"
                className="text-2xl p-3 bg-gray-800 rounded-full shadow-lg hover:bg-red-500 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-2xl p-3 bg-gray-800 rounded-full shadow-lg hover:bg-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="www.linkedin.com/in/gael-agbe-29a689270"
                target="_blank"
                className="text-2xl p-3 bg-gray-800 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={onSubmit}
          className="bg-black/50 backdrop-blur-md shadow-2xl rounded-3xl p-6 transition-all duration-500 hover:shadow-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom *"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
            />
            <input
              type="text"
              name="tel"
              placeholder="Votre numéro *"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Votre email *"
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none mb-4"
          />
          <input
            type="text"
            name="objet"
            placeholder="Objet"
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none mb-4"
          />
          <textarea
            name="message"
            placeholder="Votre message *"
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none h-48 resize-none mb-4"
          />
          <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 text-white py-4 rounded-xl font-bold uppercase transition-all duration-300 mb-2">
            Envoyer message
          </button>
          <p className="text-center text-gray-400 text-sm">
            Tous les champs avec (*) sont requis
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContacterMoi;
