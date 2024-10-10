import React from 'react'
import { BsCheckSquare } from 'react-icons/bs'
import { PiBuilding, PiBuildingLight, PiCertificate, PiMedalMilitary, PiOfficeChair, PiUsers } from 'react-icons/pi'

const AchievementHero = () => {
    return (
        <div className="hero bg-white h-full pt-32">
            <div className="hero-content text-center max-w-[85rem] w-full">
                <div className="w-full">
                    <h1 className="text-3xl font-medium mb-10">Why Choose Us? <br /> Key Milestones in Our <span className='font-extrabold'>Growth and Success</span></h1>
                    <div className="flex shadow-2xl w-full rounded-[2rem] bg-white text-start px-8 py-5 mb-12">
                        <div className="stat w-1/3">
                            <PiMedalMilitary size={50} color='black' />
                            <div className="font-extrabold text-black text-3xl mt-8">38+ Years</div>
                            <div className="text-sm text-wrap mt-3 pr-16">With more than 38 years of experience, PT Wadas has a proven track record of delivering reliable and innovative IT solutions.</div>
                        </div>

                        <div className="stat w-1/3">
                            <PiOfficeChair size={50} color='black' />
                            <div className="font-extrabold text-black text-3xl mt-8">4 Rep Office</div>
                            <div className="text-sm text-wrap mt-3">With over 500 satisfied customers, PT Wadas has a proven track record of delivering high-quality IT solutions that meet diverse needs </div>
                        </div>
                        <div className="stat w-1/3">
                            <PiCertificate size={50} color='black' />
                            <div className="font-extrabold text-black text-3xl mt-8">10+ Certification</div>
                            <div className="text-sm text-wrap mt-3">This collective expertise ensures that we provide top-notch IT solutions and support, backed by the latest knowledge and best practices.</div>
                        </div>
                    </div>
                    <div className="flex shadow-2xl w-full rounded-[2rem] bg-white text-start px-8 py-5 mb-20">
                        <div className="stat w-1/3">
                            <PiUsers size={50} color='black' />
                            <div className="font-extrabold text-black text-2xl mt-8">500+ Satisfed Customer</div>
                            <div className="text-sm text-wrap mt-3 pr-16">With over 500 satisfied customers, PT Wadas has a proven track record of delivering high-quality IT solutions that meet diverse needs </div>
                        </div>

                        <div className="stat w-1/3">
                            <PiBuilding size={50} color='black' />
                            <div className="font-extrabold text-black text-3xl mt-8">50+ Company Partners</div>
                            <div className="text-sm text-wrap mt-3">We are proud to have partnered with over 50 large companies across Indonesia, delivering tailored IT solutions that drive success and innovation.</div>
                        </div>
                        <div className="stat w-1/3">
                            <BsCheckSquare size={50} color='black' />
                            <div className="font-extrabold text-black text-3xl mt-8">500+ Finished Projects</div>
                            <div className="text-sm text-wrap mt-3">PT Wadas demonstrates a solid track record of successfully implementing IT solutions across industries.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementHero