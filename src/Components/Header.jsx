import React from 'react'
import Logo from './Logo'
import WhatsappBtn from './WhatsappBtn'

function Header() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo />
          </a>
          <nav class="md:ml-auto md:mr-auto cursor-pointer text-3xl gap-3 flex flex-wrap items-center  justify-center">
            <a class="mr-5  text-white " href="#home">Home</a>
            <a class="mr-5  text-white " href="#frames">Frames</a>
            <a class="mr-5  text-white" href="#Sunglasses">Sun Glasses</a>
            <a class="mr-5  text-white" href="#ContactLens">Contact lenses</a>
            <a class="mr-5  text-white " href="#Contact">Contact </a>
          </nav>
          <WhatsappBtn />
        </div>
      </header>
    </>
  )
}

export default Header