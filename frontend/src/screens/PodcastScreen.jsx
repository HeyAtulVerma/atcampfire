import React from 'react';
import { Slider } from '@mui/material';
import { ImHeart, ImNext, ImPlay2, ImPrevious } from 'react-icons/im';
import { FaRegHeart } from 'react-icons/fa';
import RelatedCard from '../widgets/RelatedCard';
import CommentSection from '../components/CommentSection';

export default function PodcastScreen() {
    return (
        <div className="podcast-screen mt-16 lg:mt-6 lg:flex lg:space-x-8">
            <div className="left-section lg:w-2/3 p-5">
                <div className="img-section flex justify-center">
                    <img src="/images/plane2.jpg" alt="" className="w-60 h-60 rounded-md object-cover shadow-lg shadow-slate-800" />
                </div>
                <div className="other text-white mt-6 mx-10">
                    <p className="category">Mysterious</p>
                    <p className="text-3xl font-[500] overflow-hidden whitespace-nowrap shadow-sm">The Lost Black Box in Bermuda</p>
                    <p className="text-slate-500 font-[500] mt-0.5">The Bermuda Mysteries</p>
                </div>
                <div className="podcast-player mx-10 mt-5">
                    <Slider defaultValue={0} aria-label='' valueLabelDisplay='off' className='mt-2' />

                    <div className="music-timer flex justify-between text-slate-400 -mt-3">
                        <p className="start">00:00</p>
                        <p className="end">60:00</p>
                    </div>
                    <div className="controls flex space-x-8 justify-center text-white mt-8">
                        <FaRegHeart className='hidden' />
                        <ImPrevious size={60} />
                        <ImPlay2 size={60} />
                        <ImNext size={60} />
                        <FaRegHeart size={20} className='mt-5' />
                    </div>
                </div>

                {/* <div className="hidden lg:block">
                    <CommentSection />
                </div> */}
            </div>

            <div className="related-section lg:w-1/3 lg:mr-10 p-5">
                <p className="text-white text-2xl font-semibold">Related Podcasts</p>
                <div className="related-container mt-10 space-y-6">
                    <RelatedCard />
                    <RelatedCard />
                    <RelatedCard />
                    <RelatedCard />
                </div>
            </div>
        </div>
    );
}
