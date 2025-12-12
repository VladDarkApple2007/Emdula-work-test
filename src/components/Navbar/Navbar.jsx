import React from 'react'
import Logo from '../../img/Logo.png'

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-8 bg-[#0a0e17] text-white">
            <div className="flex items-center">
                <a href="#hero">
                    <img src={Logo} alt="" />
                </a>
            </div>

            <ul className="flex gap-8 text-sm font-medium text-gray-300">
                <li className="cursor-pointer hover:text-white transition-colors">
                    <a href="#solutions">Products</a>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                    <a href="#about">About Us</a>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                    <a href="#why-trust">Data & Security</a>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                    <a href="#how-we-build">Teams</a>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div>
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-full transition-colors">
                    Get started
                </a>
            </div>
        </nav>
    )
}