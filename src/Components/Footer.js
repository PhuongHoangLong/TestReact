import React from "react";
import logo from "../Assets/logo.png"


export default function Footer() {


    return (
        <>

            <div className="container  xl:px-40 xs:px-5 md:py-20 xs:p-10">
                <div className="grid grid-cols-12 footer gap-5">
                    <div className="md:col-span-8 xs:col-span-12 flex">
                        <img className="w-[233px]" src={logo} alt="haven't images" />
                        <div className="ml-5 mt-10">
                            <p className="text-[#252525] text-2xl font-semibold">Công ty CP Đầu tư & Phân phối DTJ</p>
                            <p className="text-[#454545] text-xl ">Đồng hành kiến tạo tương lai</p>
                            <p className="mt-5">
                                <i class="fa-brands rounded-full bg-[#454545] text-white p-2 w-8 h-8 mr-5 fa-facebook-f"></i>
                                <i class="fa-brands rounded-full bg-[#454545] text-white p-2 mr-5 fa-linkedin-in"></i>
                                <i class="fa-brands rounded-full bg-[#454545] text-white p-2 mr-5 fa-youtube"></i>
                                <i class="fa-brands rounded-full bg-[#454545] text-white p-2 mr-5 fa-twitter"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 xs:hidden md:block">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20764.53561950057!2d105.8396452672541!3d21.02959313980961!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1672456721553!5m2!1svi!2s" style={{ border: 0 }} width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="footer-nav xs:col-span-12 md:col-span-3">
                        <p className="font-semibold text-xl">Thông tin liên hệ</p>
                        <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                        <p>
                            <span><i class="mr-3 mt-5 text-[#E66126] fa-solid fa-location-dot"></i></span>
                            <span>Địa chỉ: Tầng 3 tòa nhà Vinata, 289 Khuất Duy Tiến, quận Cầu Giấy, Hà Nội</span>
                        </p>
                        <p>
                            <span><i class="mr-3 mt-5 text-[#E66126] fa-solid fa-phone-volume"></i></span>
                            <span>Phone: 098 290 2468</span>
                        </p>
                        <p>
                            <span><i class="mr-3 mt-5 text-[#E66126] fa-solid fa-envelope"></i></span>
                            <span>Email: info@dtj.com.vn</span>
                        </p>
                    </div>
                    <div className="footer-nav xs:col-span-12 md:col-span-3 text-[#252525]">
                        <p className="font-semibold text-xl">Dịch vụ</p>
                        <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                        <p className="mt-4">
                            Mua bất động sản
                        </p>
                        <p className="mt-5">
                            Mua bất động sản
                        </p>
                        <p className="mt-5">
                            Mua bất động sản
                        </p>
                        <p className="mt-5">
                            Mua bất động sản
                        </p>
                        <p className="mt-5">
                            Mua bất động sản
                        </p>

                    </div>
                    <div className="footer-nav xs:col-span-12 md:col-span-3 text-[#252525]">
                        <p className="font-semibold text-xl">Link nhanh</p>
                        <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                        <p className="mt-4">
                            Về DTJ
                        </p>
                        <p className="mt-5">
                            Hệ sinh thái dịch vụ
                        </p>
                        <p className="mt-5">
                            Dự án
                        </p>
                        <p className="mt-5">
                            Tài nguyên dữ liệu
                        </p>
                        <p className="mt-5">
                            Đối tác
                        </p>
                    </div>
                    <div className="footer-nav xs:col-span-12 md:col-span-3 text-[#252525]">
                        <p className="font-semibold text-xl">Điều khoản chính sách</p>
                        <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                        <p className="mt-4">
                            Chính sách cho thuê
                        </p>
                        <p className="mt-5">
                            Bảo mật thông tin khách hàng
                        </p>
                        <p className="mt-5">
                            Chính sách hợp tác
                        </p>
                        <p className="mt-5">
                            Chính sách hợp tác
                        </p>
                        <p className="mt-5">
                            Chính sách hợp tác
                        </p>
                    </div>
                    <div className="md:col-span-6 xs:col-span-12 text-[#888888] text-sm">
                        <p>Copyright © 2022 DTJ DROUP.</p>
                    </div>
                    <div className="md:col-span-6 footer-nav xs:col-span-12 md:text-right xs:text-left text-[#888888] text-sm">
                        <span className="mr-3"><i class="fa-solid fa-phone-volume"></i></span>
                        <span className="mr-5">(84 24) 6269 0124</span>
                        <span className="mr-3"><i class="fa-solid fa-envelope"></i></span>
                        <span>info@dtj.com.vn</span>
                    </div>
                </div>
            </div>

        </>
    )
}