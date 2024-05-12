'use client'
import React from 'react';
import { LinkedinFilled, GithubFilled, MailOutlined  } from '@ant-design/icons'; 
import { TypeAnimation } from 'react-type-animation';

const Content = ({ isDarkTheme }) => {
  const contentClass = isDarkTheme ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`w-full h-full  ${contentClass}`}>
      <div className='lg:flex h-screen'>

      <div className='flex gap-4 lg:flex-1 lg:p-4 sm:p-2 p-2 '>
        <div className='flex justify-center items-center lg:gap-6 sm:gap-4 gap-4'>

        <div className='flex flex-col gap-3 lg:ml-12 sm:ml-2 ml-2'>
          {/* Use LinkedinFilled icon */}
          <div><a href=''> <GithubFilled  className="sm:text-xl lg:text-2xl text-2xl"/> </a></div>
          <div><a href=''> <LinkedinFilled className="sm:text-xl lg:text-2xl text-2xl"/> </a></div>
          <div><a href=''> <MailOutlined className="sm:text-xl lg:text-2xl text-2xl"/> </a></div>

        </div>

        <div className='flex flex-col gap-1'>
          <span className='lg:text-5xl sm:text-4xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-purple-600 to-pink-500'>Hello, I'm </span>
          <span className='lg:text-5xl sm:text-4xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-purple-600 to-pink-500'><TypeAnimation
      sequence={[
        
        'Shaistha Samreen',
        1000, 
        'Frontend Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    /></span>
    <div className='flex gap-4 mt-4'>          
          <button className=" bg-gradient-to-r from-sky-600 via-purple-600 to-pink-500 rounded-full font-bold lg:text-sm sm:text-xs text-xs button lg:h-9 h-6 sm:h-6 lg:w-28 w-20 sm:w-20 sm:border-black">Access CV</button>
          <button className='lg:h-9 lg:w-24 sm:w-14 w-14 sm:h-6 h-6 lg:text-base font-bold sm:text-xs text-xs bg-purple-700'>Contact</button></div>

        </div>
      </div>
      </div>
<div className='lg:flex-1 lg:p-4 sm:p-2 p-2 lg:text-base sm:text-sm text-sm font-semibold justify-center flex flex-col'>
  <p> I began my journey in the tech world with a truly boosted energy to learn and adapt to new things in the technical environment. Being able to develop and modify the user interface made it more engaging and interesting. Apart from the learning process, I am grateful to contribute to the ever-changing landscape of technology. I believe in not limiting myself to one sector; certainly, I am open to new innovations and adapting a different approach space. </p><br></br>
       <p> In addition to my fervent dedication to learning and adaptation, I find profound satisfaction in the collaborative nature of technology. Working alongside diverse teams has enriched my perspective and fueled my creativity. I thrive on the exchange of ideas, constantly seeking out new challenges and opportunities for growth. </p>
      </div>
      </div>
    </div>
  );
};  

export default Content;

       