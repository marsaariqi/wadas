import Image from 'next/image'
import React from 'react'

const ConsultHero = () => {
    return (
        <div className='w-full h-full flex flex-col items-center bg-white'>
            <div className='flex flex-col-reverse md:flex-row w-full items-center justify-center grow'>
                <div className='bg-white w-full p-10 h-full justify-center items-center flex'>
                    <Image src={"/consult.png"} width={600} height={600} alt="placeholder" />
                </div>
                <div className='bg-white w-full p-32 h-full flex flex-col gap-10 text-start items-center justify-center'>
                    <h1 className='text-5xl font-regular leading-[5rem] text-black'>Enhance Your Business with Expert IT Solution Consultations With Wadas</h1>
                    <p className='text-pretty text-xl font-light leading-10 text-black'>Whether you're looking to streamline processes, improve data security, or enhance your digital presence, our consultations are designed to provide you with actionable insights and recommendations </p>
                    <div className='flex justify-start w-full gap-12 mt-5'>
                        <button className="btn btn-lg rounded-full bg-[#1E2432] text-white w-full max-w-[12em]">Learn More</button>
                    </div>

                </div>

            </div>
            <div className='flex flex-col-reverse md:flex-row w-full items-center justify-center grow'>

                <div className='bg-white w-full p-32 h-full flex flex-col gap-10 text-start items-center justify-center'>
                    <h1 className='text-5xl font-regular leading-[5rem] text-black'>24 / 7 Technical Support With
                        Our Experts </h1>
                    <p className='text-pretty text-xl font-light leading-10 text-black'>The solution we give will fulfill the needs and requirements it was designed for. this includes performing tasks efficiently and effectively </p>
                    <div className='flex justify-start w-full gap-12 mt-5'>
                        <button className="btn btn-lg rounded-full bg-[#1E2432] text-white w-full max-w-[12em]">Learn More</button>
                    </div>

                </div>
                <div className='bg-white w-full p-10 h-full justify-center items-center flex'>
                    <Image src={"/consult.png"} width={600} height={600} alt="placeholder" />
                </div>
            </div>
        </div>
    )
}

export default ConsultHero