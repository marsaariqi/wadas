"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar px-24 gap-10">
            {/* navbar mobile */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/about'>Solution</Link></li>
                        <li><Link href='/#services'>Services</Link></li>
                        <li>
                            <a>Blog</a>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Blog 1</a></li>
                                <li><a href='/blog/blog-two'>Blog 2</a></li>
                                <li><a href='/blog/blog-three'>Blog 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-2xl">Logo</Link>
            </div>
            {/* navbar desktop */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li className='w-32'>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Retail Solutions</a></li>
                                <li><a href='/blog/blog-two'>Hospitality Solutions</a></li>
                                <li><a href='/blog/blog-two'>Logistic Solutions</a></li>
                                <li><a href='/blog/blog-three'>Manufacture</a></li>
                                <li><a href='/blog/blog-three'>FMCG Solutions</a></li>
                                <li><a href='/blog/blog-three'>Education</a></li>
                                <li><a href='/blog/blog-three'>Goverment Solution</a></li>
                                <li><a href='/blog/blog-three'>Healthcare</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className='w-44'>
                        <details>
                            <summary>Our Products</summary>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Barcode & Line Matrix Printer</a></li>
                                <li><a href='/blog/blog-two'>Barcode Scanner</a></li>
                                <li><a href='/blog/blog-three'>Point Of Sales (POS)</a></li>
                                <li><a href='/blog/blog-three'>Mobile Computer</a></li>
                                <li><a href='/blog/blog-three'>Smart Security Solution</a></li>
                                <li><a href='/blog/blog-three'>RFID Solution</a></li>
                                <li><a href='/blog/blog-three'>Asset Management System</a></li>
                                <li><a href='/blog/blog-three'>Human Resource Information Systems</a></li>
                                <li><a href='/blog/blog-three'>Warehouse Management Systems</a></li>
                                <li><a href='/blog/blog-three'>Consumable Products</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className='w-56'>
                        <details>
                            <summary>Service & Support</summary>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>FAQ Questions</a></li>
                                <li><a href='/blog/blog-two'>Consult With Our Team</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className='w-48'>
                        <details>
                            <summary>News & Articles</summary>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Discover News & Events</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>

            </div>
            <div className="navbar-center">
                <Link href='/#contact' className="text-white btn bg-gradient-to-r bg-[#1E2432] hover:from-[#F00] hover:to-[#FFF002] 
                rounded-full w-40">Get in touch</Link>
            </div>
        </div>
    )
}

export default Navbar