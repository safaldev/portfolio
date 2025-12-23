import React, {useState, useEffect} from 'react'
import { CornerLeftUp } from "lucide-react";
import { HashLink } from 'react-router-hash-link';

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };

const getPostition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        

        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [])
    return scrollPosition;
}

function BackTop() {
  return (
    <HashLink smooth to="#">
    <div className={getPostition()>800?'fixed z-40 bottom-9 lg:bottom-24 -right-8 transition-all duration-200 ease-in-out -translate-x-9  text-right':' fixed bottom-8 lg:bottom-24 translate-x-20 z-40 transition-all duration-200 ease-in-out right-0 text-4xl'}>
        <div className='bg-secondary w-12 h-12 rounded-full justify-center items-center flex border-2 border-white'>
            <CornerLeftUp />
        </div>
    </div>
        
    </HashLink>
  )
}

export default BackTop