import { title } from 'process';
import React from 'react';

function Portfolio() {
  const CardItems = [
    {
      id: 1,
      imgsrc: "/Portfolio/Project-pics/Flipkart-clone.png",
      title: "Flipkart Clone",
      text: "A comprehensive clone of the Flipkart e-commerce platform landing page, featuring auto-sliding banners, hover-triggered dropdown menus, and categorically divided options for customers to choose from — built using HTML , CSS  and JavaScript for the frontend.",
      view: "https://bisu39.github.io/Flipkart_clone/",
      code: "https://github.com/bisu39/Flipkart_clone.git",
    },
    {
      id: 2,
      imgsrc: "/Portfolio/Project-pics/Parallax-webpage.png",
      title: "Parallax Webpage",
      text: "A comprehensive and visually appealing landing page for a website, featuring a parallax effect to enhance aesthetics — built using HTML and  CSS for the frontend. It includes responsive layouts and a user-friendly interface to effectively showcase products or services. Its clean, modern design ensures an engaging user experience across various devices.",
      view: "https://bisu39.github.io/Parallax_website/",
      code: "https://github.com/bisu39/Parallax_website.git",
    },
    {
      id: 3,
      imgsrc: "/Portfolio/Project-pics/JS-documentaion.png",
      title: "JavaScript Documentation",
      text: "A responsive JavaScript documentation webpage built with HTML and CSS. It features a clean layout, easy navigation, and is optimized for various devices to enhance user experience while accessing JavaScript resources.",
      view: "https://bisu39.github.io/JS-documentation/",
      code: "https://github.com/bisu39/JS-documentation.git",
    },
    {
      id: 4,
      imgsrc: "/Portfolio/Project-pics/Food-web.png",
      title: "Food Webpage",
      text: "A responsive food-themed webpage built using HTML and CSS. It showcases various dishes with appealing visuals and a user-friendly layout, optimized for both desktop and mobile devices.",
      view: "https://bisu39.github.io/Food_web/",
      code: "https://github.com/bisu39/Food_web"
    },
    {
      id: 5,
      imgsrc: "/Portfolio/Project-pics/Job-application.png",
      title: "Job Application Form",
      text: "A responsive job application form designed with HTML and CSS. The form includes fields for personal information, qualifications, and experience, ensuring a user-friendly interface for applicants to submit their details.",
      view: "https://bisu39.github.io/job-application/",
      code: "https://github.com/bisu39/job-application"
    },
    {
      id: 6,
      imgsrc: "/Portfolio/Project-pics/My-tune.png",
      title: "Music streaming Webpage",
      text: "A responsive music streaming webpage built using HTML and CSS. It features a sleek design, easy navigation, and showcases various music tracks and playlists for an enhanced user experience.",
      view: "https://bisu39.github.io/myTune/",
      code: "https://github.com/bisu39/myTune"
    },
    {
      id: 7,
      imgsrc: "/Portfolio/Project-pics/GSAP-web.png",
      title: "GSAP Animation Webpage",
      text: "A visually engaging webpage that leverages GSAP (GreenSock Animation Platform) to create smooth and dynamic animations. The site features interactive elements and transitions that enhance user experience through captivating motion design.",
      view: "https://bisu39.github.io/GSAP-web/",
      code: "https://github.com/bisu39/GSAP-web"
    },
    {
      id: 8,
      imgsrc: "/Portfolio/Project-pics/Blog-webpage.png",
      title: "Blog Webpage",
      text: "A responsive blog webpage designed with HTML and CSS. It features a clean layout, easy navigation, and showcases various blog posts with appealing visuals, optimized for both desktop and mobile devices.",
      view: "https://bisu39.github.io/Blog-webpage/",
      code: "https://github.com/bisu39/Blog-webpage"
    }

  ];

  {
    return (
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6' name="Projects">
        <h1 className='md:text-3xl text-xl font-bold md:mb-5 mb-4'>Projects</h1>
        <div className='md:grid grid-cols-2 justify-around'>
          {CardItems.map(({ id, imgsrc, title, text, view, code }) =>
            <div key={id} className='border-[1px] md:w-[600px] md:h-[400px] p-2  mb-6 rounded-lg hover:scale-105 duration-200'>
              <img src={imgsrc} alt={title} className='rounded-lg md:h-[230px] w-full shadow-xl' />
              <h1 className='font-bold text-[16px] md:text-xl my-2'>{title}</h1>
              <p className='justify text-sm'>{text}</p>
              <div className='flex justify-between'>
                <a href={view} target='blank' className='text-blue-700 mt-2 hover:text-red-500' > See live</a>
                <a href={code} target='blank' className='text-pink-700 mt-2 hover:text-red-500' > See code</a>
              </div>

            </div>)}
        </div>
      </div>
    )
  }
}

export default Portfolio;
