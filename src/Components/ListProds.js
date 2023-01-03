import React from "react";
import { Link } from "react-router-dom";
import Prod1 from "../Assets/Prod1.png"
import Prod2 from "../Assets/Prod2.png"
import Prod3 from "../Assets/Prod3.png"
import Prod4 from "../Assets/Prod4.png"
import '../index.css'

export default function ListProds() {


    return (
        <>
            <div className="xs:col-span-7 md:col-span-9 gap-3 p-3 prods ">
                <Link to='#'>
                    <div className="hover:scale-95 w-full rounded-md bg-[#E66126] ">
                        <img src={Prod1} alt="Haven't images" />
                        <div className="p-5 text-white">
                            <p className="text-xl mb-5 font-semibold">Dự án BĐS đất nền HOT nhất cuối năm 2022 tại Gia Lâm, Hà Nội</p>
                            <hr />
                            <p className="mt-5">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-cube"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Diện tích:
                                </span>
                                <span className="mr-3 text-sm">
                                    800000 - 250000 m2
                                </span>
                            </p>
                            <p className="">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-location-pin"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Địa điểm:
                                </span>
                                <span className="mr-3 text-sm">
                                    Đa Tốn, Gia Lâm, Hà Nội
                                </span>
                            </p>
                            <p className="flex justify-center mt-5">
                                <Link to='#'>
                                    <button className="border-2 border-white py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Chi tiết</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-arrow-right"></i></span>
                                    </button>
                                </Link>
                                <Link to='#'>
                                    <button className="bg-white text-[#E66126] py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Liên hệ</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-envelope"></i></span>
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='#'>
                    <div className="hover:scale-95 rounded-md bg-[#E66126] sm:block xs:hidden">
                        <img src={Prod2} alt="Haven't images" />
                        <div className="p-5 text-white">
                            <p className="text-xl mb-5 font-semibold">Dự án BĐS đất nền HOT nhất cuối năm 2022 tại Gia Lâm, Hà Nội</p>
                            <hr />
                            <p className="mt-5">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-cube"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Diện tích:
                                </span>
                                <span className="mr-3 text-sm">
                                    800000 - 250000 m2
                                </span>
                            </p>
                            <p className="">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-location-pin"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Địa điểm:
                                </span>
                                <span className="mr-3 text-sm">
                                    Đa Tốn, Gia Lâm, Hà Nội
                                </span>
                            </p>
                            <p className="flex justify-center mt-5">
                                <Link to='#'>
                                    <button className="border-2 border-white py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Chi tiết</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-arrow-right"></i></span>
                                    </button>
                                </Link>
                                <Link to='#'>
                                    <button className="bg-white text-[#E66126] py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Liên hệ</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-envelope"></i></span>
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='#'>
                    <div className="hover:scale-95 rounded-md xs:hidden md:block bg-[#E66126] ">
                        <img src={Prod3} alt="Haven't images" />
                        <div className="p-5 text-white">
                            <p className="text-xl mb-5 font-semibold">Dự án BĐS đất nền HOT nhất cuối năm 2022 tại Gia Lâm, Hà Nội</p>
                            <hr />
                            <p className="mt-5">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-cube"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Diện tích:
                                </span>
                                <span className="mr-3 text-sm">
                                    800000 - 250000 m2
                                </span>
                            </p>
                            <p className="">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-location-pin"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Địa điểm:
                                </span>
                                <span className="mr-3 text-sm">
                                    Đa Tốn, Gia Lâm, Hà Nội
                                </span>
                            </p>
                            <p className="flex justify-center mt-5">
                                <Link to='#'>
                                    <button className="border-2 border-white py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Chi tiết</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-arrow-right"></i></span>
                                    </button>
                                </Link>
                                <Link to='#'>
                                    <button className="bg-white text-[#E66126] py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Liên hệ </span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-envelope"></i></span>
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='#'>
                    <div className="hover:scale-95 rounded-md xs:hidden lg:block bg-[#E66126] ">
                        <img src={Prod3} alt="Haven't images" />
                        <div className="p-5 text-white">
                            <p className="text-xl mb-5 font-semibold">Dự án BĐS đất nền HOT nhất cuối năm 2022 tại Gia Lâm, Hà Nội</p>
                            <hr />
                            <p className="mt-5">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-cube"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Diện tích:
                                </span>
                                <span className="mr-3 text-sm">
                                    800000 - 250000 m2
                                </span>
                            </p>
                            <p className="">
                                <span className="mr-3 text-sm">
                                    <i class="fa-solid fa-location-pin"></i>
                                </span>
                                <span className="mr-3 text-sm">
                                    Địa điểm:
                                </span>
                                <span className="mr-3 text-sm">
                                    Đa Tốn, Gia Lâm, Hà Nội
                                </span>
                            </p>
                            <p className="flex justify-center mt-5">
                                <Link to='#'>
                                    <button className="border-2 border-white py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Chi tiết</span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-arrow-right"></i></span>
                                    </button>
                                </Link>
                                <Link to='#'>
                                    <button className="bg-white text-[#E66126] py-1 px-3 rounded-md xs:text-xs mr-3 xl:text-base">
                                        <span className="mr-3">Liên hệ </span>
                                        <span className="lg:inline-block xs:hidden"><i class="fa-solid fa-envelope"></i></span>
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}