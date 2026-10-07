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
                        <span className='md:text-2xl'>Welcome to My Feed</span>
                        <h1 className='font-bold text-md md:text-2xl line-h md:leading-16' tabIndex={-1} >Hello, I'm a <span className='text-red-700'>
                            <div className='inline'>
                                <ReactTyped
                                    strings={[
                                        "Coder",
                                        "MERN Developer",
                                        "Programer",
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                >
                                    <input type="text" readOnly className='focus:outline-none' />
                                </ReactTyped>
                            </div></span></h1>
                        <p className='text-sm  md:text-lg text-justify'>
                            I’m a self-taught MERN Stack Developer focused on building modern, responsive, and scalable web applications. I work across the full stack using <span className="font-bold">MongoDB, Express.js, React, and Node.js</span> with a strong interest in backend development, RESTful APIs, and system design.

                            Through hands-on projects and continuous learning, I’ve developed practical experience in <span className="font-bold">API development, authentication, database management, frontend integration, and deployment</span> . I’m driven by curiosity, problem-solving, and a commitment to writing clean, maintainable code while continuously expanding my technical expertise.</p>
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

export default Home;
