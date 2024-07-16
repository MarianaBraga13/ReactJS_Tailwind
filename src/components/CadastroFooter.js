import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLitecoinSign } from '@fortawesome/free-solid-svg-icons';

const CadastroFooter = () => {
  const {name, setName} = useState('');
  const [email, setEmail] = useState('');
  const {icon, FontAwesomeIcon} = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Email:", email, "Nome Completo:", name);
  };

  return (
    <footer className="bg-slate-300 py-8 container mx-auto px-0 w-full flex items-center">
      <div className="container w-full px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="col-span-2 md:col-span-2">
            <div className=" flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                {}
              </div>  
              <div className="container w-1/2 flex-5 col-span-1 md:w-2/3 ">
                <img src="https://tailwindui.com/img/og-image.png" alt="Img" className="px-0 h-72 w-full max-w-md rounded shadow-lg" />
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <form onSubmit={handleLogin} className="max-w-xs px-3 mx-auto md:mx-0 w-96">
              <div className="mb-4">
                <button className="bg-white py-2 px-4 rounded focus:outline-none shadow-lg mb-4">
                  NEWSLETTER
                </button>
                <p className="text-gray-700 font-bold mb-2 text-left">Cadastre-se agora para não perder:</p>
                <p className="text-gray-700 font-bold text-sm text-left">ofertas, novidades e conteúdos exclusivos</p>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  icon={faEnvelope}
                  placeholder="Nome Completo" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="E-mail">
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="E-mail"
                  type="E-mail"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CadastroFooter;


