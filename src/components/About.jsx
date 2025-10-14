import React from 'react'
function About() {
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10' name="About" >
            <h1 className='md:text-3xl text-xl font-bold mb-5'>About</h1>
            <p className='text-justify text-sm'>
                <span className='block font-bold md:text-2xl text-sm mb-2'>Hello, I'm a Frontend Developer.</span>
                I've always had an innate interest in computer technologies, and as I've grown, that curiosity has evolved into a true passion. Currently, I build web applications using <span className='font-bold'> HTML, CSS, JavaScript, React, Vite, GSAP,</span> and <span className='font-bold'> Tailwind CSS </span> and deploy them using <span className='font-bold'> Git </span> and <span className='font-bold'> GitHub </span>. My goal is to learn, build, and grow simultaneously—continuously improving my skills and creating impactful digital experiences.
            </p>
            <div>
            <h1 className='text-green-600 font-semibold text-[16px] md:text-xl my-1 md:my-2 '>Education & Training</h1>
               <h3 className='my-0.5 text-[12px] md:text-[14px]'> UG, BU(Burdwan Univercity), 2021</h3>
               <h3 className='my-0.5 text-[12px] md:text-[14px]'> Delta(Fullstack Developer), Apna College(online), 2024</h3>
            </div>
            <div>
            <h1 className='text-green-600 font-semibold text-[16px] md:text-xl my-1 md:my-2 '>Skills & Expertises</h1>
               <h3 className='my-0.5 text-[12px] md:text-[14px]'> Proficient in <span className='font-bold'>HTML, CSS, JavaScript </span> 
               Exprienced with <span className='font-bold'>VS Code, Terminal, NPM, Git, Github, Libaries</span> and <span className='font-bold'>Frameworks </span> and more. 
               Excellent Problem-solving skills. For me occurrence of problem means an opportunity to go one Level Up in growth.
               Effective Communinicator and Collaborator.
               </h3>
            </div>
            <div>
            <h1 className='text-green-600 font-semibold text-[16px] md:text-xl my-1 md:my-2 '>Mission Statement</h1>
               <h3 className='my-0.5 text-[12px] md:text-[14px]'>My Mission is to leverage my skills and creativity to deliver 
                innovative Frontend Development solutions that exceeds clint expectations and contribute positively to the digital landscape. 
                I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</h3>
            </div>
        </div>
    )
}

export default About
