
function Portfolio() {
  const CardItems = [
    {
      id: 1,
      imgsrc: "/Portfolio/Project-pics/carrental-front.png",
      title: "Car Rental",
      text: "A car-rental web application for browsing vehicles, viewing car details, and submitting rental bookings. The project includes a React frontend and an Express/MongoDB backend.",
      view: "https://carrental-front.netlify.app",
      code: "https://github.com/bisu39/car-rental.git",
    },
    {
      id: 2,
      imgsrc: "/Portfolio/Project-pics/prescripto-user-front.png",
      title: "My Priscripto",
      text: "Prescripto is a full-stack healthcare appointment platform built for patients, doctors, and administrators. It includes a patient-facing booking portal, a doctor/admin dashboard, secure authentication, appointment booking, payment processing, and Cloudinary-based image uploads.",
      view: "https://myprescriptoapp.netlify.app",
      code: "https://github.com/bisu39/prescripto.git",
    },

    {
      id: 3,
      imgsrc: "/Portfolio/Project-pics/project-ss-front.png",
      title: "Subhamay Sports",
      text: "An e-commerce application built with Node.js and Express, with product listings, shopping cart, user authentication, and admin management features.",
      view: "https://project-ss-h157.onrender.com/",
      code: "https://github.com/bisu39/Project-SS/tree/main.git"
    },
   
  
    {
      id:4,
      imgsrc: "/Portfolio/Project-pics/GSAP-web.png",
      title: "GSAP Animation Webpage",
      text: "A visually engaging webpage that leverages GSAP (GreenSock Animation Platform) to create smooth and dynamic animations. The site features interactive elements and transitions that enhance user experience through captivating motion design.",
      view: "https://bisu39.github.io/GSAP-web/",
      code: "https://github.com/bisu39/GSAP-web.git"
    },
  ];

  {
    return (
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6' name="Projects">
        <h1 className='md:text-3xl text-xl font-bold md:mb-5 mb-4'>Projects</h1>
        <div className='md:flex flex-wrap justify-around'>
          {CardItems.map(({ id, imgsrc, title, text, view, code }) =>
            <div key={id} className='border-[1px] md:w-[600px] md:h-fit p-2  mb-6 rounded-lg hover:scale-105 duration-200'>
              <img src={imgsrc} alt={title} className='rounded-lg md:h-[230px] w-full shadow-xl' />
              <h1 className='font-bold text-[16px] md:text-xl my-2'>{title}</h1>
              <p className='justify text-[12px]'>{text}</p>
              <div className='flex justify-between relative'>
                <a href={view} target='blank' className='text-blue-700 mt-2 hover:text-red-500 ' > See live</a>
                <a href={code} target='blank' className='text-pink-700 mt-2 hover:text-red-500 ' > See code</a>
              </div>
            </div>)}
        </div>
      </div>
    )
  }
}

export default Portfolio;
