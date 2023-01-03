import React from "react";
import Service1 from '../Assets/Service1.png'
import Service2 from '../Assets/Service2.png'
import Service3 from '../Assets/Service3.png'
import Service4 from '../Assets/Service4.png'
import Service5 from '../Assets/Service5.png'
import Service6 from '../Assets/Service6.png'
import { Link } from "react-router-dom";


export default function ListService() {


    return (
        <>

            <div className="list-service md:col-span-4 xs:col-span-6 ">
                <Link to='#'>
                    <img src={Service1} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Tư vấn lựa chọn địa điểm đầu tư, thuê, mua BĐS Công nghiệp</p>
                </Link>
            </div>
            <div className="list-service md:col-span-4 xs:col-span-6 ">
                <Link to='#'>
                    <img src={Service2} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Hỗ trợ thủ tục pháp lý</p>
                </Link>
            </div>
            <div className="list-service xs:hidden md:block col-span-4">
                <Link to='#'>
                    <img src={Service3} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Tư vấn tài chính & hỗ trợ thủ tục vay vốn ngân hàng</p>
                </Link>
            </div>

            <div className=" xs:col-span-6 md:col-span-4">
                <p className="w-full h-1.5 bg-[#E66126] rounded-lg"></p>
            </div>
            <div className=" xs:col-span-6 md:col-span-4">
                <p className="w-full h-1.5 bg-[#E66126] rounded-lg"></p>
            </div>
            <div className=" col-span-4 xs:hidden md:block">
                <p className="w-full h-1.5 bg-[#E66126] rounded-lg"></p>
            </div>

            <div className="list-service xs:hidden md:block col-span-4">
                <Link to='#'>
                    <img src={Service4} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Dự toán san lấp & Xây dựng nhà xưởng</p>
                </Link>
            </div>
            <div className="list-service xs:hidden md:block col-span-4">
                <Link to='#'>
                    <img src={Service5} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Cung cấp thông tin về thị trường nguyên phụ liệu & vật liệu sản xuất</p>
                </Link>
            </div>
            <div className="list-service xs:hidden md:block col-span-4">
                <Link to='#'>
                    <img src={Service6} alt="Haven't images" className="rounded-md hover:scale-90 list-service-img" />
                    <p className="xl:font-semibold md:font-medium xl:text-xl md:text-lg text-[#252525]">Cho thuê nhà ở cho chuyên gia quản lý nhà máy</p>
                </Link>
            </div>

        </>
    )
}