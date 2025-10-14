import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center md:items-end md:h-[100px]'>
            <div className='flex-col items-center'>
                <h3 className='w-full text-center'>Contact infos: </h3>
                <div className='w-full text-center'>
                    <p className='text-[10px] md:text-[12px]'>Mail : biswajitr581@gmail.com</p>
                    <p className='text-[10px] md:text-[12px]'>WhatsApp : 9563409414</p>
                    <p className='text-[10px] md:text-[12px]'>Address: Bolpur-Santineketan, Birbhum, WB</p>
                </div>
            </div>
            <div>
                <h3>Social Media:</h3>
                <div className=' flex space-x-4 mt-1 md:text-3xl cursor-pointer'>
                    <a href="https://www.instagram.com/bisu_developer/" target='blank'><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/biswajit-roy-88b295234/" target='blank'><FaLinkedin /></a>
                    <a href="https://www.facebook.com/profile.php?id=100008007938370" target='blank'><FaFacebook /></a>
                </div>
            </div>
            <div>
                <p className='text-[10px]'>© 2025 Biswajit. All rights reserved.</p>
                <p className='text-[10px]'>Built with React and Tailwind CSS</p>
            </div>

        </div>
    )
}

export default Footer
