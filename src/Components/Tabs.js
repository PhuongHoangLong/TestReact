import React from "react";
import AreoPencil from "../Assets/AreoPencil.png"
import CastellPencil from "../Assets/CastellPencil.png"
import Archine from "../Assets/ArchinePencil.png"


function Tabs() {

    return (
        <>
            <div className="grid grid-cols-12 gap-5 mt-7 ">
                <div className="md:col-span-4 xs:col-span-6">
                    <div className="text-center w-full hover:scale-90  bg-white rounded-2xl p-4">
                        <div >
                            <img className=" mx-auto w-full" src={AreoPencil} alt="nothings" />
                        </div>
                        <div className="font-medium xl:text-sm md:text-xs">
                            <p>Aero Mechanical Pencil</p>
                        </div>
                        <div>
                            <span className="font-semibold xl:text-md pr-3">$99.00</span>
                            <span className="font-normal text-[#727272] text-sm line-through">$125.00</span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 xs:col-span-6">
                    <div className="text-center w-full hover:scale-90 bg-white rounded-2xl p-4">
                        <div >
                            <img className=" mx-auto w-full" src={CastellPencil} alt="nothings" />
                        </div>
                        <div className="font-medium xl:text-sm md:text-xs">
                            <p>Castell Mechanical Pencil</p>
                        </div>
                        <div>
                            <span className="font-semibold xl:text-md pr-3">$75.00</span>
                            <span className="font-normal text-[#727272] text-sm line-through">$99.00</span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 s:hidden md:block">
                    <div className="text-center w-full hover:scale-90 bg-white rounded-2xl p-4">
                        <div >
                            <img className=" mx-auto w-full" src={Archine} alt="nothings" />
                        </div>
                        <div className="font-medium xl:text-sm md:text-xs">
                            <p>Architect Choice Pencil</p>
                        </div>
                        <div>
                            <span className="font-semibold xl:text-md pr-3">$45.00</span>
                            <span className="font-normal text-[#727272] text-sm line-through">$70.00</span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Tabs; 