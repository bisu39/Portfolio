import React from 'react'

function Skill() {
  const skillItems = [
    {
      id: 1,
      imgsrc: "/Langues/html.png",
      text: "HTML",
    },
    {
      id: 2,
      imgsrc: "/Langues/css.jpg",
      text: "CSS",
    },
    {
      id: 3,
      imgsrc: "/Langues/javascript.png",
      text: "JavaScript",
    },
    {
      id: 4,
      imgsrc: "/Langues/reactjs.png",
      text: "ReactJS",
    },
    {
      id: 5,
      imgsrc: "/Langues/tailwind.png",
      text: "Tailwind CSS",
    },
    {
      id: 6,
      imgsrc: "/Langues/bootstrap.png",
      text: "Bootstrap",
    },
    {
      id: 7,
      imgsrc: "/Langues/git.jpeg",
      text: "git",
    },
    {
      id: 8,
      imgsrc: "/Langues/github.png",
      text: "GitHub",
    },
    {
      id: 9,
      imgsrc: "/Langues/terminal.png",
      text: "Terminal",
    }
  ]
  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6' name="Skills">
        <h1 className='md:text-3xl text-xl font-bold md:mb-5 mb-4'>Skills</h1>
        <p className='text-md md:text-xl'>I'm Skilled to work with below technologies:</p>
        <div className='flex-col flex md:flex-row flex-wrap  items-center w-full my-4'>
          {skillItems.map(({ id, imgsrc, text }) =>
            <div key={id} className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full border-[1px]  flex justify-center items-center m-1.5 hover:scale-105 duration-200'>
              <div className='flex flex-col items-center justify-center'>
                <img src={imgsrc} alt="" className='h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-full' />
                <p className='text-center w-full'>{text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Skill;
