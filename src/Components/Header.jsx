import React, { useState } from 'react'
import Logo from './Logo'
import WhatsappBtn from './WhatsappBtn'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo />
          </a>
          <nav className={`md:ml-auto md:mr-auto cursor-pointer text-2xl gap-3 flex flex-wrap items-center justify-center transition-all duration-75 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
            <a className="mr-5 text-white" href="#home">Home</a>
            <a className="mr-5 text-white" href="#frames">Frames</a>
            <a className="mr-5 text-white" href="#Sunglasses">Sun Glasses</a>
            <a className="mr-5 text-white" href="#ContactLens">Contact lenses</a>
            <a className="mr-5 text-white" href="#Contact">Contact</a>
          </nav>
          <WhatsappBtn />
          <div className="burger absolute top-0 right-0 p-5 md:hidden" onClick={toggleBurger}>
            <div className={`line w-8 bg-white h-1 my-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`line w-8 bg-white h-1 my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`line w-8 bg-white h-1 my-1 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header