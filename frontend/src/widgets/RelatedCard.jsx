import React from 'react';
import { ImPlay2 } from 'react-icons/im';
import { MdDragHandle } from 'react-icons/md';

export default function RelatedCard() {
    return (
        <div className="horz-card flex items-center relative group">
            <div className="relative">
                <img src="/images/plane2.jpg" className="h-20 w-20" alt="" />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImPlay2 size={40} color="white" />
                </div>
            </div>
            <div className="textd ml-5">
                <p className="title text-white">The Lost black Box in Bermuda</p>
                <p className="duration text-white">02:53</p>
            </div>
            <MdDragHandle color="white" size={30} className="ml-10" />
        </div>
    );
}
