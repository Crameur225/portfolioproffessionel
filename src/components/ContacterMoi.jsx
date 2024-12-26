import React from 'react'
import profile from '../assets/photo1.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import Swal from 'sweetalert2';
const ContacterMoi = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "11b79496-234d-4c48-aebf-7ce3c0f76611");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Votre message à été Envoyer",
        icon: "success"
      });
    }
  };

  return (
    <div className='py-20 text-colorCustoms' id='contact'>
      <p className='text-center text-red-600 text-xl uppercase'>CONTACT</p>
      <h2 className='text-center text-5xl font-bold tracking-wider'>CONTACTEZ MOI</h2>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
          <div className='shadow-2xl border-slate-900/30 border-0 lg:w-4/5 sm:w-full my-4'>
            <img src={profile} alt="" className='border-0 border-slate-900/30 p-4 shadow-2xl  rounded-3xl lg:w-80 sm:w-full lg:h-64 sm:h-auto mx-auto my-10'/>
            <h2 className='text-3xl px-4 py-2'>Developpeur Web Fullstack</h2>
            <div className='px-4 pb-10'>
            <p className=''>
            Passionné par le code, je suis aujourd'hui développeur fullstack, avec une maîtrise aussi bien du frontend que du backend. Je suis disponible pour rejoindre votre entreprise ou tout projet lié au développement web.
              </p>
              <p >Je suis disponible au:</p>
              <p className='text-xl font-bold py-4'>Tel: <a href="tel:+2250700029598" className='text-green-600'>+225 0700029598</a> / <a className='text-green-600' href="tel:+2250585296048">+225 0585296048</a></p>
              <p className='font-bold text-xl'>Email: <a href="mailto:gaelagbe@gmail.com" className='text-green-600'>gaelagbe@gmail.com</a></p>
              <div>
                <div>
                <h3 className='text-xl uppercase font-bold'>Trouvez moi sur </h3>
                <div className='grid grid-cols-3 pt-4 gap-2'>
                    <a href='https://www.facebook.com/profile.php?id=100092984683097' target='_blank' className='text-2xl py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><FaFacebook/></a>
                    <a href='#' target='_blank' className='text-2xl py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><FaInstagram/></a>
                    <a href='www.linkedin.com/in/gael-agbe-29a689270' target='_blank' className='text-2xl py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><FaLinkedin/></a>
                </div>
            </div>
              </div>
            </div>
          </div>
          {/* Formulaire de contact */}
          <form onSubmit={onSubmit} className='shadow-2xl border-slate-900/30 border-0 my-4'>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-4">
            <div>
              <label>Votre nom: *</label>
              <input 
                type="text" 
                name="name" 
                className="w-full outline-none border-2 border-gray-800 hover:outline-red-600 bg-black py-4 rounded-xl" 
                required 
              />
            </div>
            <div>
              <label>Votre Numéro: *</label>
              <input 
                type="text" 
                name="tel" 
                className="w-full outline-none border-2 border-gray-800 hover:outline-red-600 bg-black py-4 rounded-xl" 
                required 
              />
            </div>
          </div>
            <div className='py-4 px-2'>
              <label>Email: *</label>
              <input type="email" name="email" className='outline-none border-2 border-gray-800 hover:outline-red-600 bg-black py-4 w-full rounded-xl' required/>
            </div>
            <div className='py-4 px-2'>
              <label>Objet</label>
              <input type="text" name='objet' className='outline-none border-2 border-gray-800 hover:outline-red-600 bg-black py-4 w-full rounded-xl'/>
            </div>
            <div className='pt-6 pb-4 px-2'>
              <label>Votre message: *</label>
              <textarea name="message" className='outline-none border-2 border-gray-800 hover:outline-red-600 bg-black h-48 w-full resize-none rounded-xl' required></textarea>
            </div>
            <button className='w-full hover:bg-red-500 bg-black text-center py-4 rounded-xl font-bold uppercase'>Envoyer message</button>
            <p className='text-center'>Tout les champs avec un (*) sont réquis</p>
          </form>
      </div>
    </div>
  )
}

export default ContacterMoi