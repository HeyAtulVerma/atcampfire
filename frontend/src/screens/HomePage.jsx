import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { FaPlay, FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import PodcastSection from '../components/PodcastSection';

const texts = ['Bermuda Triangle', 'The Mysterious Depths', 'Unsolved Enigmas'];

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <>
      <div className="homesection px-5 lg:px-28 lg:py-5">
        {/* hero text */}
        <div className="mt-10 ticker bg-[hsl(351,100%,95%)] flex space-x-2 w-fit py-1.5 rounded-full mb-5">
          <p className="newbtn bg-[#f63d68] font-[600] text-white py-2 px-4 lg:rounded-3xl lg:ml-2 rounded-full ml-2">New</p>
          <p className="ml-2 py-2 text-[#f63d68] font-[700] pr-10 flex">
            Bermuda triangle series <FaPlay className="ml-2 mt-1.5 lg:mt-1.5" size={14} />
          </p>
        </div>

        <div className="hero_text">
          <h1 className="text-white text-3xl lg:text-6xl font-[600]">Dive into the mystical stories of the</h1>
          <div className="grp flex space-x-4">
            <h1 className="text-[#f53d68] text-4xl lg:text-6xl font-[600] lg:pt-5 pt-2 min-h-[80px]">{displayedText}</h1>
          </div>
          <p className="mt-8 text-white lg:w-2/3 text-wrap text-md lg:text-xl">
            Planes vanish with no trace. Ships sink with no wreckage. Communications cut off with no warning. We explore the mysteries of the Bermuda triangle.
          </p>
        </div>
        {/* end hero text */}

        <div className="flex mt-6 w-fit space-x-2">
          <div className="btn flex bg-black space-x-2 py-2 px-3 border-white border rounded-lg">
            <FaSpotify color="#18d860" size={36} className="mt-1" />
            <div className="text">
              <p className="text-white font-semibold -mb-2">Listen on</p>
              <p className="text-[#18d860] font-bold text-xl spotify">Spotify</p>
            </div>
          </div>
          <div className="btn flex bg-black space-x-2 py-2 px-3 border-white border rounded-lg">
            <SiApplemusic color="#c265ec" size={36} className="mt-1" />
            <div className="text">
              <p className="text-white font-semibold -mb-2">Listen on</p>
              <p className="text-[#c265ec] font-bold text-xl">Apple Music</p>
            </div>
          </div>
        </div>

        {/* latest podcast */}
        <p className="text-white py-10 font-[600] text-xl">Latest podcasts about Bermuda triangle</p>
        <PodcastSection />
        <p className="text-white py-10 font-[600] text-xl">Most played on ATCampfire</p>
        <PodcastSection />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
