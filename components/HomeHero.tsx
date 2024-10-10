import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
    const image = "/placeholder.png"
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='flex flex-col-reverse md:flex-row w-full items-center justify-center grow'>
                <div className='bg-white w-full p-32 h-full flex flex-col gap-10 text-start items-center justify-center'>
                    <h1 className='text-7xl font-extrabold italic leading-[7rem] text-black'>As a Top - Quality Nationwide Provider<br /> IT Solutions</h1>
                    <p className='text-pretty text-xl font-light leading-10 text-black'>We are a Information Technology Company, and we provide business and
                        industrial IT solutions as hardware business partner / distributor and software
                        application. We also as a System Integrator, give solutions, support and services
                        to customer needs in ecosystem such as Smart Technology-Green Energy. </p>
                    <div className='flex justify-start w-full gap-12 mt-5'>
                        <input type="text" placeholder="Enter your Email ..." className="input h-16 w-full max-w-lg rounded-2xl text-xl  bg-gray-300 text-black" />
                        <button className="btn btn-lg rounded-full bg-[#1E2432] text-white">Give Appointment</button>
                    </div>

                </div>
                <div className='bg-gradient-to-tl from-slate-200 to-slate-400 w-full p-10 h-full justify-center items-center flex'>
                    <Image src={image} width={300} height={300} alt="placeholder" />
                </div>
            </div>
        </div>
    )
}

export default HomeHero