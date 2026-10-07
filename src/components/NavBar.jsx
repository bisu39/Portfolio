import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

function NavBar() {
    const [menu, setMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Contact"
        },
        {
            id: 4,
            text: "Skills"
        },
        {
            id: 5,
            text: "Projects"
        },
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed z-50 top-0 h-16 bg-white'>
            <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-2 items-center'>
                    <img src="/Portfolio/mern-logo.webp" alt="" className='h-12 w-22 rounded-xl' />
                    <h1 className='font-semibold text-2xl'>Biswaji<span className='text-green-500'>t</span>
                        <p className='text-sm'>MERN Developer</p>
                    </h1>
                </div>
                {/* Desktop Menu */}
                <div>
                    <ul className='hidden md:flex justify-between space-x-4 '>
                        {navItems.map(({ id, text }) => (
                            <li className={`${activeNav === text ? "text-blue-500" : "text-black"} hover:scale-105 duration-200 cursor-pointer`} key={id}>
                                <Link to={text} smooth={true} duration={500} offset={-70} onClick={() => setActiveNav(text)}>
                                    {text}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
                {/* Mobile menu*/}
                <div onClick={() => setMenu(!menu)} className='md:hidden'>
                    {menu ? <IoMdClose size={24} /> : <IoMenu size={24} />}
                </div>
            </div>
            {menu && (
                <div>
                    <ul className='md:hidden flex flex-col items-center justify-center  h-screen  bg-white space-y-4 z-50'>
                        {navItems.map(({ id, text }) => (
                            <li key={id}  >
                                <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' onClick={() => {
                                    setActiveNav(text);
                                    setMenu(false);
                                }}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBar;
