import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const CopyRight = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-300">
      <div className="container mx-auto px-4 lg:px-0 max-w-4xl">
        <p className="text-center text-gray-600 text-sm">
        <FontAwesomeIcon icon={faCopyright} className="mr-1" />      
        General Store, todos os direitos reservados.
        </p> 
        </div>
    </footer>
  );
};

export default CopyRight;




