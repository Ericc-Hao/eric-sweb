import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true);
    } else if (scrolled <= 300){
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button 
      className={`hover:text-green-500 hover:bg-white fixed top-1/2 right-10 z-50 bg-emerald-400 text-black rounded-full p-2 ${visible ? 'visible' : 'invisible'}`} 
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="text-3xl"/>
    </button>
  );
}

export default ScrollToTop;