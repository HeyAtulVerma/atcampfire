import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
export default function PodcastCard({ title, desc, episodes, duration, bgimage, url }) {
    return (
        <>


            <div className={`relative pt-48 h-80 w-56 bg-[url(/images/plane2.jpg)] bg-cover rounded-lg overflow-hidden min-w-56 `} >

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                <div className="relative p-4 flex justify-between">
                    <div className="a">

                        <h1 className="text-white font-[600]">The Lost Black Box</h1>
                        <p className="text-white text-xs"> Mystery Story of Bermuda Triange.</p>
                        <p className="pt-2 text-sm text-white">45 EP | 3 Hours 50 Min</p>
                    </div>
                    <div className="b text-white">
                        <a href="/podcast">
                            <IoPlayCircleOutline size={42} /></a>
                    </div>
                </div>
            </div>


        </>
    )
}


