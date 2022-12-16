import React from "react"
import Images1 from "../Assets/Background1.png"
import Images2 from "../Assets/Background2.png"
import Images3 from "../Assets/Background3.png"
import Images4 from "../Assets/Background4.png"
import Images5 from "../Assets/Background5.png"
import Images6 from "../Assets/Background6.png"
import Images7 from "../Assets/Background7.png"


export default function Gallery() {

    return (
        <>
            <div className="mt-16">
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-3 xs:col-span-6 my-auto">
                        <img className="w-full" src={Images1} alt="Nothings" />
                        <img className="w-full mt-5" src={Images2} alt="Nothings" />
                    </div>
                    <div className="md:hidden xs:col-span-6">
                        <img className="w-full h-full rotate-180" src={Images3} alt="Nothings" />
                    </div>
                    <div className="md:col-span-6 xs:col-span-12">
                        <img className="w-full md:block xs:hidden" src={Images3} alt="Nothings" />
                        <img className="w-full mt-5" src={Images4} alt="Nothings" />
                        <img className="w-full md:hidden xs:block mt-5" src={Images5} alt="Nothings" />
                    </div>
                    <div className="md:col-span-3 xs:col-span-6 my-auto">
                        <img className="w-full xs:hidden md:block" src={Images5} alt="Nothings" />
                        <img className="w-full mt-5" src={Images6} alt="Nothings" />
                        <img className="w-full xs:hidden md:block mt-5" src={Images7} alt="Nothings" />
                    </div>
                    <div className="md:hidden xs:block col-span-6">
                        <img className="w-full mt-5 h-[170px]" src={Images7} alt="Nothings" />
                    </div>
                </div>
            </div>
        </>
    )
}