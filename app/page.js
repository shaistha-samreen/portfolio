'use client'
// pages/index.js
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from './components/Content';
// import Sidebar from './components/Sider';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    // You can implement your theme toggle logic here, such as changing CSS classes or applying a theme context
  };

  return (
    <div className= 'min-h-screen'>
    <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    <main className="lg:flex justify-center items-center"> {/* Make sure flex-direction is row */}
  {/* <Sidebar isDarkTheme={isDarkTheme} /> */}
  <Content isDarkTheme={isDarkTheme} />
</main>

    <Footer />
  </div>
  

  );
}
