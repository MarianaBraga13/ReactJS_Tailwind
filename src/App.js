
import React from 'react';
import './App.css';
import CadastroFooter from './components/CadastroFooter';
import Footer from './/components/Footer';
import CopyRight from './/components/CopyRight';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex-grow">
        {/* */}
      </div>
      <CadastroFooter />
      <div>
      <Footer />
      </div>
      <div>
      <CopyRight />
      </div>
      
    </div>
  );
}

export default App;

