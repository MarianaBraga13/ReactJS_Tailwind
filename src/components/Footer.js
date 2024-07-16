import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border">
      <div className="container mx-auto px-4 lg:px-0 max-w-4xl">
        <div className=" mt-6 pt-0 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <h2 className="font-bold text-gray-700 mb-2">LOGIN</h2>
            <ul className="text-gray-600">
              <li className="mb-2">Minha Conta</li>
              <li className="mb-2">Meus Pedidos</li>
              <li className="mb-2">Encontre uma Loja</li>
              <li className="mb-2">Trabalhe Conosco</li>
              <li className="mb-2">Sobre a Loja Y</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold text-gray-700 mb-2">AJUDA</h2>
            <ul className="text-gray-600">
              <li className="mb-2">Dúvidas Frequentes</li>
              <li className="mb-2">Trocas e Devoluções</li>
              <li className="mb-2">Entregas e Retiradas</li>
              <li className="mb-2">Pagamentos e Promoções</li>
              <li className="mb-2">Privacidade e Cookies</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold text-gray-700 mb-2">CONTATO E SOCIAL</h2>
            <ul className="text-gray-600">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                0800
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                email@
              </li>
              <div className="flex space-x-2 mt-2">
                <FontAwesomeIcon icon={faFacebook} className="text-gray-600" />
                <FontAwesomeIcon icon={faInstagram} className="text-gray-600" />
                <FontAwesomeIcon icon={faYoutube} className="text-gray-600" />
                <FontAwesomeIcon icon={faTiktok} className="text-gray-600" />
              </div>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold text-gray-700 mb-2">PAGAMENTO</h2>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faCreditCard} className="text-gray-600" />
              <FontAwesomeIcon icon={faCreditCard} className="text-gray-600" />
              <FontAwesomeIcon icon={faCreditCard} className="text-gray-600" />
            </div>
            <h2 className="font-bold text-gray-700 mt-4 mb-2">SEGURANÇA</h2>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-600" />
              <FontAwesomeIcon icon={faLock} className="text-gray-600" />
              <FontAwesomeIcon icon={faLock} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
