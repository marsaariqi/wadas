import React from 'react'
import { FaDhl } from 'react-icons/fa'

const StatHero = () => {
    return (
        <div className="stats stats-horizontal inset-0 h-full w-full bg-white bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] py-24 overflow-hidden flex flex-col gap-32">
            <div className="z-10 w-full">
                <div className='bg-white w-full -my-8 flex gap-20 '>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-[5rem]'>
                        <FaDhl size={300} />
                    </div>
                </div>
            </div>
            <div className="z-10 w-full">
                <div className='bg-[#E6E6E6] w-full -my-8 flex gap-20 '>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                    <div className='-my-24'>
                        <FaDhl size={300} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StatHero