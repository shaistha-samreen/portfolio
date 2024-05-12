// components/Footer.js
import { LinkedinFilled, GithubFilled, MailOutlined  } from '@ant-design/icons'; // Import icons


export default function Footer() {
  return (
    <footer className="bg-purple-100 p-6 gap-4 flex flex-col">
      <div className="flex justify-center items-center lg:gap-10 sm:gap-4 gap-4">
        {/* Links */}
        <a href='' className='font-normal text-gray-400 lg:text-sm sm:text-xs text-xs'>About</a>
        <a href='' className='font-normal text-gray-400 lg:text-sm sm:text-xs text-xs'>Projects</a>
        <a href='' className='font-normal text-gray-400 lg:text-sm sm:text-xs text-xs'>Contact</a>

        {/* Icons */}
        <div><a href='https://github.com/shaistha-samreen'> <GithubFilled  className="sm:text-xl lg:text-2xl text-xl text-gray-400"/> </a></div>
        <div><a href=''> <LinkedinFilled className="sm:text-xl lg:text-2xl text-xl text-gray-400"/> </a></div>
        <div><a href=''> <MailOutlined className="sm:text-xl lg:text-2xl text-xl text-gray-400"/> </a></div>
      </div>
      <div><p className='text-gray-400 font-semibold lg:text-sm sm:text-xs text-xs text-center'>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p></div>
    </footer>
  );
}
