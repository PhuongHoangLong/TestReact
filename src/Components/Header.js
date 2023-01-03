import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/logo.png'
import '../index.css'
import { useState } from "react";
export default function Header() {


    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const searchBtn = () => {
        document.querySelector('.search-btn').addEventListener('click', function () {
            this.parentElement.classList.toggle('open')
            this.previousElementSibling.focus()
        })

    }

    return (
        <>
            <div className="top-header bg-[#E66126]">
                <div className="container xl:px-40 xs:px-5 py-2">
                    <div className="grid grid-cols-12 md:text-xs text-center lg:text-sm xs:text-xl">
                        <div className="phone-contacts-header col-start-1 md:col-span-2 xs:col-span-3 text-white  ">
                            <a href="tel:098 290 2468" className="">
                                <i class="fa-solid fa-phone-volume mr-2 text-lg"></i>
                                <span className="md:inline-block xs:hidden"> 098 290 2468</span>
                            </a>
                        </div>
                        <div className=" mail-contacts-header md:col-span-2 xs:col-span-3 text-white">
                            <a href="mailto:info@dtj.com.vn" className=" search-btn">
                                <i class="fa-regular fa-envelope mr-2 text-lg "></i>
                                <span className="md:inline-block xs:hidden">info@dtj.com.vn</span>
                            </a>
                        </div>

                        <div className=" search-box md:col-start-9 col-span-3 text-white" >
                            <button onClick={() => searchBtn()} className=" border-none search-btn" >
                                <i class="fa-solid fa-magnifying-glass mr-2 text-lg "></i>
                            </button>
                            <span className="search-input border-b-2 border-white md:inline-block xs:hidden ">
                                <input type="text" className="bg-inherit" placeholder="Tìm kiếm..." />
                            </span>
                        </div>
                        <div className=" language md:col-span-1 xs:col-span-3 text-white">
                            <i class="fa-solid fa-globe mr-2 text-lg  md:inline-block xs:hidden"></i>
                            <select className="bg-inherit">
                                <option className="text-black">
                                    VIE
                                </option>
                                <option className="text-black">
                                    EN
                                </option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>
            <div className="header-navbar container xl:px-40 xs:px-5 grid grid-cols-12 2xl:text-base lg:text-sm text-center font-semibold">
                <div className="logo col-span-3 w-full h-full">
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>
                </div>

                <div className=" col-span-9 py-5 h-full  text-[#252525]">
                    <div className="cursor-pointer md:hidden mb-10">
                        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                        <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none xs:float-right" for="menu-btn">
                            <span onClick={handleToggle} class="navicon bg-black flex items-center relative"></span>
                        </label>
                    </div>
                    <ul className={toggleMenu ? "md:flex w-full md:w-auto" : " justify-around hidden md:flex"} id="menu">
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Giới thiệu</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Tin tức - Sự kiện</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Dự án xúc tiến đầu tư</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Dịch vụ</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">M&A</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Góc nhìn chuyên gia</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Nhà cung cấp</li>
                        </Link>
                        <Link to='#'>
                            <li className="md:inline-block border-b md:border-none hover:text-[#E66126]">Liên hệ</li>
                        </Link>
                    </ul>

                </div>




            </div>
        </>
    )
}