import React, { useRef } from 'react';
import PodcastCard from '../screens/PodcastCard';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

export default function PodcastSection() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300, // Adjust this value to control the scroll amount
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, // Adjust this value to control the scroll amount
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="cover lg:px-[30px] relative">
            <button
                onClick={scrollLeft}
                className="z-10 hidden lg:block leftbtn absolute top-[50%] left-0 translate-y-[-50%] bg-[#f63d68] rounded-full p-1 ml-2"
            >
                <FaAngleDoubleLeft color='white' />
            </button>

            <div
                ref={scrollContainerRef}
                className="relative px-4 flex space-x-6 pb-7 flex-nowrap overflow-x-auto overflow-y-hidden scroll-smooth scroll-images w-full hide-scrollbar"
            >
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
            </div>

            <button
                onClick={scrollRight}
                className="hidden lg:block rightbtn absolute top-[50%] right-0 translate-y-[-50%] bg-[#f63d68] rounded-full p-2 mr-2"
            >
                <FaAngleDoubleRight color='white' />
            </button>
        </div>
    );
}