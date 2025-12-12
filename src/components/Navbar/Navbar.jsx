import React, { useState, useEffect } from 'react'
import Logo from '../../img/Logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="relative w-full flex items-center justify-between px-8 py-4 bg-[#0a0e17] text-white z-50">
            
            <div className="flex items-center z-50">
                <a href="#hero" onClick={() => setIsOpen(false)}>
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                </a>
            </div>

            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
                <li className="cursor-pointer hover:text-white transition-colors"><a href="#solutions">Products</a></li>
                <li className="cursor-pointer hover:text-white transition-colors"><a href="#about">About Us</a></li>
                <li className="cursor-pointer hover:text-white transition-colors"><a href="#why-trust">Data & Security</a></li>
                <li className="cursor-pointer hover:text-white transition-colors"><a href="#how-we-build">Teams</a></li>
                <li className="cursor-pointer hover:text-white transition-colors"><a href="#contact">Contact</a></li>
            </ul>

            <div className="hidden md:block">
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-colors text-sm">
                    Get started
                </a>
            </div>

            <div className="md:hidden flex items-center z-50">
                <button onClick={toggleMenu} className="focus:outline-none text-white p-2">
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>

            <div className={`fixed inset-0 bg-[#0a0e17] z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                
                <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-300">
                    <li className="cursor-pointer hover:text-emerald-400 transition-colors">
                        <a href="#solutions" onClick={toggleMenu}>Products</a>
                    </li>
                    <li className="cursor-pointer hover:text-emerald-400 transition-colors">
                        <a href="#about" onClick={toggleMenu}>About Us</a>
                    </li>
                    <li className="cursor-pointer hover:text-emerald-400 transition-colors">
                        <a href="#why-trust" onClick={toggleMenu}>Data & Security</a>
                    </li>
                    <li className="cursor-pointer hover:text-emerald-400 transition-colors">
                        <a href="#how-we-build" onClick={toggleMenu}>Teams</a>
                    </li>
                    <li className="cursor-pointer hover:text-emerald-400 transition-colors">
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>

                <div className="mt-12">
                    <a href="#contact" onClick={toggleMenu} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 text-lg">
                        Get started
                    </a>
                </div>
            </div>
        </nav>
    )
}