import React from 'react';

function Portfolio() {
  const CardItems = [
    {
      id: 1,
      imgsrc: "/Project-pics/Flipkart-clone.png",
      title: "Flipkart Clone",
      text: "A comprehensive clone of the Flipkart e-commerce platform landing page, built using HTML, CSS and JS for the frontend. It includes responsive layouts, and a user-friendly interface to showcase products effectively.",
      view: "https://bisu39.github.io/Flipkart_clone/",
    },
    {
      id: 2,
      imgsrc: "/Project-pics/Parallax-webpage.png",
      title: "Parallax Webpage",
      text: "A comprehensive clone of the Flipkart e-commerce platform landing page, built using HTML and CSS for the frontend to give users a parallex effect while scrolling on page. ",
      view: "https://bisu39.github.io/Parallax_website/",
    },
  ];
 
    {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6' name="Projects">
      <h1 className='md:text-3xl text-xl font-bold md:mb-5 mb-4'>Projects</h1>
      <div className='md:flex justify-around'>
        {CardItems.map(({ id, imgsrc, title, text, view }) =>
          <div key={id} className='border-[1px] md:w-[600px] md:h-[400px] p-2  mb-6 rounded-lg hover:scale-105 duration-200'>
            <img src={imgsrc} alt={title} className='rounded-lg md:h-[230px] w-full shadow-xl' />
            <h1 className='font-bold text-[16px] md:text-xl my-2'>{title}</h1>
            <p className='justify text-sm'>{text}</p>
            <a href={view} target='blank' className='text-blue-700 mt-2 hover:text-red-500' > See live</a>
          </div>)}
      </div>
    </div>
  )
}
}

export default Portfolio;
