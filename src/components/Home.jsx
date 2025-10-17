import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";


function Home() {
    
    return (
        <div name="Home"  >
            <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 '>
                <div className='flex flex-col md:flex-row mt-12 md:mt-20'>
                    <div className='md:w-1/2 flex flex-col items-center space-y-2 order-2 md:order-1'>
                        <span className='md:text-2xl'>Welcome In My Feed</span>
                        <h1 className='font-bold text-md md:text-2xl line-h md:leading-16' tabIndex={-1} >Hello, I'm a <span className='text-red-700'>
                            <div className='inline'>
                                <ReactTyped
                                    strings={[
                                        "Coder",
                                        "Frontend Developer",
                                        "Programer",
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                >
                                    <input type="text" className='focus:outline-none'/>
                                </ReactTyped>
                            </div></span></h1>
                        <p className='text-sm  md:text-lg text-justify'>Hi, I'm Biswajit—a self-taught frontend developer blending artistic intuition with modern web technologies. With a background in Arts and a passion for clean, expressive interfaces, I specialize in building responsive, interactive websites using <span className='font-bold'> JavaScript, HTML, CSS, React, Tailwind CSS, GSAP,</span> and more.
                            My journey began with curiosity and a commitment to clarity. Today, I craft dynamic user experiences, debug complex workflows, and design scalable components that feel intuitive and perform beautifully.
                            I believe in learning by doing, refining by sharing, and building tools that empower others.</p>
                        {/* Social media Icons */}

                        <div className='flex justify-between w-[90%]'>
                            <div>
                                <h1 className='font-bold text-l md:text-xl mt-4'>Availabe on</h1>
                                <div className=' flex space-x-4 mt-2 md:text-3xl cursor-pointer'>
                                    <a href="https://www.instagram.com/bisu_developer/" target='blank'><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/in/biswajit-roy-88b295234/" target='blank'><FaLinkedin /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100008007938370" target='blank'><FaFacebook /></a>
                                </div>
                            </div>

                            <div>
                                <h1 className='font-bold text-l md:text-xl mt-4 text-center'>Skilled on</h1>
                                <div className=' flex space-x-4 mt-2 md:text-3xl cursor-pointer'>
                                    <FaHtml5 className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />
                                    <IoLogoCss3 className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />
                                    <FaJsSquare className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />
                                    <FaBootstrap className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />
                                    <FaReact className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />
                                    <RiTailwindCssFill className='hover:scale-110 duration-200 rounded-full border-[1px] p-[1px]' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center order-1'>
                        <img src="/Portfolio/Profile-pic.jpg" alt="" className='md:h-[400px] md:w-[400px] h-[250px] w-[250px] mt-2 md:mt-0 rounded-full ml-4 ' />
                    </div>
                </div>
            </div>
            <hr className='mt-12 hidden md:block' />
        </div>
    )
}

export default Home
