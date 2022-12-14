import React from "react";
import Header from "../Components/Header";
import '../index.css'
import Introduces from '../Assets/introduces.png'
import ListService from "../Components/ListServices";
import ListProds from "../Components/ListProds";
import logo1 from "../Assets/CEOG.png"
import logo2 from "../Assets/vinG.png"
import logo3 from "../Assets/bimG.png"
import logo4 from "../Assets/basl.png"
import logo5 from "../Assets/bwG.png"
import news2 from "../Assets/news2.png"
import news3 from "../Assets/news3.png"
import video2 from "../Assets/video2.png"
import video3 from "../Assets/video3.png"
import video4 from '../Assets/video4.png'
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
export default function Home() {

    const openTab = () => {
        var acc = document.getElementsByClassName("tabs");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";


                } else {
                    panel.style.display = "block";

                }
            });
        }
    }

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        console.log(value);
    };
    const saveForm = () => {
        console.log('save data', test);
        let method = 'POST';
        let id = '';

        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(test),
        };
        fetch(
            'https://62bafae8573ca8f832901b9c.mockapi.io/test' + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };


    return (

        <>
            <div className="overflow-hidden font-lato">
                <Header />
                <div className="banner container xl:px-40 xs:px-5 text-center w-full h-[640px] grid grid-cols-12 content-end">
                    <div className=" col-start-4 col-span-7 text-white  grid grid-cols-12 -mt-20">
                        <p className="text-base font-extrabold  tracking-md col-span-12 mb-6">DTJ GROUP</p>
                        <p className="xl:text-4xl md:text-2xl xl:font-bold md:font-semibold  col-span-12">
                            ????n V??? X??c Ti???n ?????u T?? B???t ?????ng S???n C??ng Nghi???p Uy T??n H??ng ?????u Vi???t Nam
                        </p>
                        <div className="mt-10 col-end-10 col-start-4 lg:gap-8 xs:gap-4 lg:text-base xs:text-xs md:flex xs:flex-none">
                            <button type="button" className="hover:bg-[#E66126] transition ease-in-out bg-none border-2 rounded-md p-2 w-full ">V??? ch??ng t??i</button>
                            <button type="button" className="hover:bg-[#E66126] transition ease-in-out bg-none border-2 xs:mt-3 md:mt-0 rounded-md p-2 w-full ">T??m d??? ??n</button>
                        </div>
                    </div>

                    <div className=" banner-navbar col-span-12 mt-28 mb-5">
                        <div className="navbar-nav xs:hidden lg:block">
                            <table className="border-collapse bg-white rounded-lg text-center w-full">
                                <tr >
                                    <td className=" text-white 2xl:text-base md:text-sm font-medium p-3 w-3/12">
                                        <button className="hover:bg-[#FFFFFF] hover:text-[#E66126] hover:border-[#E66126] hover:border-2 transition ease-in-out bg-[#E66126] rounded-md p-3 mr-3">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <span>Mua B??S </span>
                                        </button>
                                        <button className="border-[#E66126] hover:bg-[#E66126] hover:text-white border-2 p-3 rounded-md text-[#E66126]">
                                            <i class="fa-solid fa-house-flag"></i>
                                            <span>Thu?? B??S</span>
                                        </button>
                                    </td>
                                    <td className="  border-l-2 px-3 2xl:text-base md:text-sm p-3 w-1/5">
                                        <select className="w-full text-[#454545]">
                                            <option>Lo???i b???t ?????ng s???n</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                        </select>
                                    </td>
                                    <td className="  border-l-2 2xl:text-base md:text-sm p-3 px-3 w-1/5">
                                        <select className="w-full text-[#454545]">
                                            <option>Di???n t??ch</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                        </select>
                                    </td>
                                    <td className="border-l-2 2xl:text-base md:text-sm p-3 px-3 w-1/5  ">
                                        <input type="text" placeholder="T??m theo khu v???c..." />
                                    </td>
                                    <td className="px-2 2xl:text-base md:text-sm p-3  ">
                                        <div className="bg-[#E66126] py-3 text-center text-white rounded-md">
                                            <span className="border-r-2 p-3">
                                                T??m Ki???m
                                            </span>
                                            <span className="p-3"> <i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="navbar-more xs:text-xs md:text-base ">

                            <button onClick={() => openTab()} className="tabs xs:ml-10 md:ml-20  text-[#E66126] bg-white px-3 py-2  lg:rounded-bl-xl xs:rounded-xl lg:rounded-br-xl lg:rounded-tl-none lg:rounded-tr-none " >
                                <span className="rounded-full p-1 text-xs  border-[#E66126] border-2 mr-3">
                                    <i class="fa-solid fa-plus w-4"></i>
                                </span>
                                <span className="oke">
                                    M??? r???ng b??? l???c
                                </span>
                            </button>
                            <div className=" panel text-5xl bg-white p-5">
                                <p>Hello World</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" fixed top-[70%] right-[2%]">
                    <a className="contact-phone block text-white rounded-full bg-[#E66126] p-1 " href="tel:098 290 2468">
                        <button type="button" class="contact-phone-btn  border-2 border-white rounded-full text-2xl w-14 h-14 bg-[#F8862C] ">
                            <i class="fa-solid fa-phone-volume"></i>
                        </button>
                    </a>

                    <a className="contact-email block mt-5 text-white rounded-full bg-[#E66126] p-1 " href="mailto:info@dtj.com.vn">
                        <button type="button" class="contact-phone-btn  border-2 border-white rounded-full text-2xl w-14 h-14 bg-[#F8862C] ">
                            <i class="fa-regular fa-envelope"></i>
                        </button>
                    </a>
                </div>
                <div className="container xl:px-40 xs:px-5">
                    <div className="introduces grid grid-cols-12 gap-5 mt-5">
                        <div className="introduces-video xs:col-span-12 md:col-span-6 pb-3 pr-3 bg-[#E66126] rounded-md ">
                            <img src={Introduces} alt="Haven't images" className="rounded-md w-full h-full" />
                        </div>
                        <div className="introduces-text xs:col-span-12 md:col-span-6 grid grid-cols-12 gap-8">
                            <div className="col-start-1 col-span-12">
                                <p className="xl:font-bold text-[#252525] md:font-semibold xs:font-medium xl:text-4xl md:text-2xl mt-5">V??? DTJ Group</p>
                                <p className="bg-[#E66126] xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                                <p className="text-base mt-10 text-[#454545]">V???i kinh nghi???m h??n 15 n??m trong l??nh v???c ph??n ph???i v?? ?????u t?? b???t ?????ng s???n, DTJ GROUP t??? tin mang l???i nh???ng gi?? tr??? t???t ?????p nh???t cho qu?? ?????i t??c, qu?? kh??ch h??ng. Ch??ng t??i hi???u ???????c nh???ng kh?? kh??n c???a qu?? doanh nghi???p trong vi???c l???a ch???n th??? tr?????ng c??ng nh?? c??c th??? t???c ph??p l?? trong qu?? tr??nh ?????u t??, t??? l??? ???? ch??ng t??i cho ra m???t h??? sinh th??i b???t ?????ng s???n c??ng nghi???p ????? h??? tr??? m???i v?????ng m???c c???a qu?? doanh nghi???p.</p>
                            </div>
                            <Link to='#' className="col-span-12">
                                <button className=" bg-[#E66126] rounded-md  xs:w-4/12 md:w-2/5 xl:w-4/12 text-white xs:text-xs md:text-base p-2">
                                    <span className="lg:border-r-2 xs:border-r-0 border-white p-3">T??m hi???u th??m</span>
                                    <span className=" lg:inline-block xs:hidden p-3">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                            </Link>

                            <div className="col-span-4 col-start-1">
                                <p className=" text-[#E66126] xl:font-extrabold xs:font-semibold md:text-2xl xl:text-3xl ">5000,88</p>
                                <p className=" text-[#252525] h-12">Di???n t??ch cho thu?? (m2)</p>
                                <p className="bg-[#E66126] xl:w-[100px] md:w-[60px] h-1"></p>
                            </div>
                            <div className="col-span-4">
                                <p className=" text-[#E66126] xl:font-extrabold xs:font-semibold md:text-2xl xl:text-3xl ">482,55</p>
                                <p className=" text-[#252525] h-12">Di???n t??ch b??n (m2)</p>
                                <p className="bg-[#E66126] xl:w-[100px] md:w-[60px] h-1"></p>
                            </div>
                            <div className="col-span-4">
                                <p className=" text-[#E66126] xl:font-extrabold xs:font-semibold md:text-2xl xl:text-3xl ">122 +</p>
                                <p className=" text-[#252525] h-12">v</p>
                                <p className="bg-[#E66126] xl:w-[100px] md:w-[60px] h-1"></p>
                            </div>

                        </div>
                    </div>
                    <div className="service grid grid-cols-12 gap-5 mt-20 mb-20 ">
                        <div className=" col-span-6">
                            <p className="xl:text-3xl md:text-xl xl:font-bold md:font-medium">D???ch v???</p>
                            <p className="xl:w-20 md:w-14 xs:w-10 h-1 mt-3 bg-[#E66126]"></p>
                        </div>
                        <div className="col-span-6 text-right text-[#E66126] mt-5">
                            <Link to='#'>
                                <button type="button">
                                    <span className="mr-3">Xem th??m</span>
                                    <span><i class="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </Link>
                        </div>
                        <ListService />
                    </div>

                </div>

                <div className="projects grid grid-cols-12 gap-4 bg-[#F5F5F5] py-16">
                    <div className="col-span-6  xl:ml-40 xs:ml-5">
                        <p className="xl:text-3xl md:text-2xl xs:text-xl font-bold text-[#252525]">D??? ??n b???t ?????ng s???n c??ng nghi???p</p>
                        <p className="xl:w-20 md:w-16 xs:w-14 h-1 bg-[#E66126] mt-3 rounded-lg"></p>
                    </div>
                    <div className="col-span-6 text-right px-5  text-[#E66126] mt-5">
                        <Link to='#'>
                            <button type="button">
                                <span className="mr-3">Xem th??m</span>
                                <span><i class="fa-solid fa-arrow-right"></i></span>
                            </button>
                        </Link>
                    </div>
                    <div className="col-span-3 xl:ml-40 xs:ml-5 mt-10 relative md:col-span-3 xs:col-span-5">
                        <p className="text-xl  text-[#E66126] w-full">
                            Khu kinh t???
                            <i class="lg:ml-20 md:ml-12 lg:inline-block xs:hidden fa-solid fa-arrow-right"></i>
                        </p>
                        <p className="h-1 rounded-lg bg-[#E66126]"></p>
                        <p className="mt-10 text-xl hover:text-[#E66126]  font-semibold text-[#888888]">Khu c??ng nghi???p</p>
                        <p className="mt-10 text-xl hover:text-[#E66126]  font-semibold text-[#888888]">C???m c??ng nghi???p</p>
                        <p className="text-[#888888] bottom-5 absolute">
                            <button className="mr-5 text-xl">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <span className="mr-5">
                                <span className="text-xl">01</span>
                                <span>/08</span>
                            </span>
                            <button className="text-xl text-[#E66126]">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </p>

                    </div>
                    <ListProds />
                </div>

                <div className="projects grid grid-cols-12 gap-4 py-16">
                    <div className="col-span-6  xl:ml-40 xs:ml-5">
                        <p className="xl:text-3xl md:text-2xl xs:text-xl font-bold text-[#252525]">M&A</p>
                        <p className="xl:w-20 md:w-16 xs:w-14 h-1 bg-[#E66126] mt-3 rounded-lg"></p>
                    </div>
                    <div className="col-span-6 text-right px-5  text-[#E66126] mt-5">
                        <Link to='#'>
                            <button type="button">
                                <span className="mr-3">Xem th??m</span>
                                <span><i class="fa-solid fa-arrow-right"></i></span>
                            </button>
                        </Link>
                    </div>
                    <div className="md:col-span-3 xs:col-span-5 xl:ml-40 xs:ml-5 mt-10 relative">
                        <p className="text-xl  text-[#E66126] w-full">
                            D??? ??n
                            <i class="lg:ml-32 lg:inline-block xs:hidden fa-solid fa-arrow-right"></i>
                        </p>
                        <p className="h-1 rounded-lg bg-[#E66126]"></p>
                        <p className="mt-10 text-xl hover:text-[#E66126]  font-semibold text-[#888888]">Nh?? m??y</p>
                        <p className="mt-10 text-xl hover:text-[#E66126]  font-semibold text-[#888888]">Kho x?????ng</p>
                        <p className="text-[#888888] bottom-5 absolute">
                            <button className="mr-5 text-xl">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <span className="mr-5">
                                <span className="text-xl">01</span>
                                <span>/08</span>
                            </span>
                            <button className="text-xl text-[#E66126]">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </p>

                    </div>
                    <ListProds />
                </div>

                <div className="bg-[#F9F9F9] py-10 mt-10 partner ">

                    <div className=" container xl:px-40 xs:px-5">
                        <p className="text-3xl font-bold text-[#252525]  ">?????i t??c c???a ch??ng t??i</p>
                        <p className="bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>

                        <div className="grid grid-cols-10 gap-4 w-full mt-10">
                            <img className="col-span-2" src={logo1} alt="Haven't iamges" />
                            <img className="col-span-2" src={logo2} alt="Haven't iamges" />
                            <img className="col-span-2" src={logo3} alt="Haven't iamges" />
                            <img className="col-span-2" src={logo4} alt="Haven't iamges" />
                            <img className="col-span-2" src={logo5} alt="Haven't iamges" />

                        </div>
                    </div>
                </div>
                <div className="container xl:px-40 xs:px-5 mt-10">
                    <div className="grid grid-cols-12 h-full ">
                        <div className="md:col-span-6 xs:col-span-12 grid grid-cols-12 gap-4 px-5 xs:border-r-0 md:border-r-2">
                            <div className="col-span-6">
                                <p className=" xl:text-2xl md:text-xl font-bold text-[#252525] ">Video</p>
                                <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                            </div>
                            <div className=" col-span-6 text-end text-[#E66126] mt-5">
                                <Link to='#'>
                                    <button type="button" >
                                        <span className="mr-3">Xem th??m</span>
                                        <span><i class="fa-solid fa-arrow-right"></i></span>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-span-12 video rounded-md relative p-3 text-white xs:mt-0 md:mt-10 h-[446px]">
                                <p className="text-md font-semibold absolute bottom-0 ">Lorem ipsum dolor sit amet consectetur. Aliquet mauris pellentesque in et etiam. Nunc imperdiet purus tempus mauris mattis purus maecenas leo. Molestie et.</p>
                            </div>
                            <div className="col-span-4">
                                <img src={video4} alt="Haven't images" />
                                <p className="text-[#252525]">Lorem ipsum dolor sit amet tara sectetur. Amet lacinia men.</p>
                            </div>
                            <div className="col-span-4">
                                <img src={video2} alt="Haven't images" />
                                <p className="text-[#252525]">Lorem ipsum dolor sit amet tara sectetur. Amet lacinia men.</p>
                            </div>
                            <div className="col-span-4">
                                <img src={video3} alt="Haven't images" />
                                <p className="text-[#252525]">Lorem ipsum dolor sit amet tara sectetur. Amet lacinia men.</p>
                            </div>
                        </div>


                        <div className="md:col-span-6 xs:col-span-12 md:mt-0 xs:mt-10 px-5 grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <p className=" xl:text-2xl md:text-xl font-bold text-[#252525] ">??i???m tin</p>
                                <p className=" bg-[#E66126] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                            </div>
                            <Link to='#' className=" col-span-6 text-end">
                                <button type="button" className="  text-[#E66126] mt-5">
                                    <span className="mr-3">Xem th??m</span>
                                    <span><i class="fa-solid fa-arrow-right"></i></span>
                                </button>
                            </Link>
                            <div className="col-span-12 news relative rounded-md p-3  justify-end text-white xs:mt-0 md:mt-10 h-[378px]">
                                <div className="absolute bottom-0">
                                    <p className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur. Sit aliquam at consectetur aliquam odio aliquam. Ac ultrices et in blandit.</p>
                                    <span >
                                        <span className="mr-2"><i class="fa-solid fa-calendar-days"></i></span>
                                        <span className="mr-5">Th??ng 11, 2022</span>
                                    </span>
                                    <span className="">
                                        <span className=" mr-2 "><i class="fa-regular fa-circle-user"></i></span>
                                        <span >b???i Admin</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <img src={news2} alt="Haven't Images " />
                                <p className="text-[#252525] font-semibold">Lorem ipsum dolor sit amet consectetur. Amet iaculis tellus.</p>
                                <span className="text-[#888888]" >
                                    <span className="mr-2"><i class="fa-solid fa-calendar-days"></i></span>
                                    <span className="mr-5 text-sm">Th??ng 11, 2022</span>
                                </span>
                                <span className=" text-[#888888] xs:block md:inline">
                                    <span className=" mr-2 "><i class="fa-regular fa-circle-user"></i></span>
                                    <span className="text-sm" >b???i Admin</span>
                                </span>
                            </div>
                            <div className="col-span-6">
                                <img src={news3} alt="Haven't Images " />
                                <p className="text-[#252525] font-semibold">Lorem ipsum dolor sit amet consectetur. Faucibus egestas.</p>
                                <span className="text-[#888888]" >
                                    <span className="mr-2"><i class="fa-solid fa-calendar-days"></i></span>
                                    <span className="mr-5 text-sm">Th??ng 11, 2022</span>
                                </span>
                                <span className="text-[#888888] xs:block md:inline ">
                                    <span className=" mr-2 "><i class="fa-regular fa-circle-user"></i></span>
                                    <span className="text-sm" >b???i Admin</span>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="contacts mt-10">
                    <div className="container xl:px-40 xs:px-5 md:py-20 xs:py-10">
                        <div className="contacts-head text-center">
                            <p className="text-[#252525] text-3xl font-bold ">Li??n h??? v???i ch??ng t??i</p>
                            <p className="text-[#454545] ">H??y cho ch??ng t??i bi???t y??u c???u c???a b???n v?? ch??ng t??i s??? li??n h??? l???i v???i b???n trong th???i gian s???m nh???t</p>
                            <p className=" bg-[#E66126] ml-[45%] rounded-md xl:w-[100px] md:w-[60px] xs:w-[40px] h-1 mt-3"></p>
                        </div>
                        <div className="">
                            <form className="grid grid-cols-12 gap-6 content-center" >
                                <div className="md:col-span-4 xs:col-span-12 mt-5" >
                                    <p className="text-[#252525] font-semibold">
                                        Giao d???ch B???t ?????ng s???n <sup className="text-red-600">*</sup>
                                    </p>
                                    <select onChange={(e) => handleChange(e)} className="w-full p-3 text-[#454545] rounded-md mt-2">
                                        <option value='Cho thu??'>Cho thu??</option>
                                        <option value='B??n'>B??n</option>
                                    </select>
                                </div>
                                <div className="md:col-span-4 xs:col-span-12 mt-5" >
                                    <p className="text-[#252525] font-semibold">
                                        Khu v???c <sup className="text-red-600">*</sup>
                                    </p>
                                    <select name="Place" onChange={(e) => handleChange(e)} className="w-full p-3 text-[#454545] rounded-md mt-2">
                                        <option value='Mi???n Nam'>Mi???n B???c</option>
                                        <option value='Mi???n Trung'>Mi???n Trung</option>
                                        <option value="Mi???n Nam">Mi???n Nam</option>
                                    </select>
                                </div>
                                <div className="md:col-span-4 xs:col-span-12 mt-5" >
                                    <p className="text-[#252525] font-semibold">
                                        Di???n t??ch (m2) <sup className="text-red-600">*</sup>
                                    </p>
                                    <select onChange={(e) => handleChange(e)} className="w-full p-3 text-[#454545] rounded-md mt-2">
                                        <option value="1000">1000</option>
                                        <option value='100'>100</option>
                                        <option value='10000'>10000</option>
                                    </select>
                                </div>
                                <div className="col-span-12">
                                    <input type="checkbox" name="contact" className="w-5 h-5"  ></input>
                                    <span className="text-[#454545] italic " >Nh???n Ti??u ??i???m ng??nh C??ng nghi???p Vi???t Nam 8 th??ng cu???i n??m 2022</span>
                                </div>
                                <button type="submit" className=" bg-[#E66126] rounded-md 2xl:col-span-2 xs:col-span-4 sm:col-span-3 xs:col-start-10 2xl:col-start-11 text-white xs:text-xs md:text-base mt-5 xs:p-1 sm:p-2 xl:p-0">
                                    <span className="lg:border-r-2 xs:border-r-0 border-white p-3">T??m hi???u th??m</span>
                                    <span className=" lg:inline-block xs:hidden p-3">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                            </form>
                        </div>



                    </div>
                </div>
                <Footer />
            </div>
        </>
    )

}
// export default Home