import React from "react";
import Pencils from "../src/Assets/Vector.png"
import Markers from "../src/Assets/Vector4.png"
import Drawing from "../src/Assets/Vector2.png"
import Noteb from "../src/Assets/Vector3.png"
import Tabs from "./Components/Tabs";
import Gallery from "./Components/Gallery";


function App() {
  return (
    <div className="container mx-auto px-lg my-20">

      <div className=" tabs-navbar grid grid-cols-12">
        <div className="md:col-span-3 xs:col-span-12 text-center md:p-10 s:p-1 bg-[#F4F4F4] rounded-t-2xl">
          <button type="button" className=" bg-white md:rounded-lg s:rounded-2xl w-full h-full shadow-lg md:p-0 s:py-3 s:px-4">
            <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12s s:w-14 md:block s:inline  md:mx-auto md:float-none s:float-left rounded-full p-3">
              <img src={Pencils} className="w-full" />
            </div>
            <div className="text-center font-bold xl:text-xl lg:text-lg s:text-xl s:mx-5 s:my-3 md:block s:inline md:float-none s:float-left">Pencils</div>
            <div className="md:hidden s:float-right s:my-3  ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>

            </div>
          </button>
        </div>
        <div className="col-span-3 text-center p-10 md:block s:hidden">
          <button type="button" className=" bg-white rounded-lg w-full h-full py-5 shadow-lg">
            <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12 mx-auto rounded-full p-4">
              <img src={Markers} className="w-full" />
            </div>
            <div className="text-center font-bold xl:text-xl lg:text-lg md-text-md">Markers</div>
          </button>
        </div>
        <div className="col-span-3 text-center p-10  md:block s:hidden">
          <button type="button" className=" bg-white rounded-lg w-full h-full py-5 shadow-lg">
            <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12 mx-auto rounded-full p-4">
              <img src={Drawing} className="w-full" />
            </div>
            <div className="text-center font-bold xl:text-xl lg:text-lg md-text-md">Drawing Colors</div>
          </button>
        </div>
        <div className="col-span-3 text-center p-10  md:block s:hidden">
          <button type="button" className=" bg-white rounded-lg w-full h-full py-5 shadow-lg">
            <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12 mx-auto rounded-full p-5">
              <img src={Noteb} className="w-full" />
            </div>
            <div className="text-center font-bold xl:text-xl lg:text-lg md-text-md">Notebooks</div>
          </button>
        </div>
      </div>

      <div className="tabs-detail bg-[#F4F4F4] w-full h-full p-10 rounded-br-2xl rounded-bl-2xl">
        <div className="md:grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <p className="font-normal  w-full lg:text-xl md:text-lg xl:text-2xl s:hidden md:block h-24">Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.  </p>
            <p className="s:block md:hidden s:text-xl">Graphite Artist Quality Fine Art Drawing,  Sketching and Replaceable Nib Pencils. </p>
            <ul className="list-disc ml-5 md:h-40  font-bold mt-10 xl:text-lg lg:text-md md:text-sm s:text-sm grid grid-cols-12 s:gap-5 md:gap-0" >
              <div className="md:col-span-12 s:col-span-6">
                <li>MECHANICAL PENCILS</li>
                <li>ARCHITECT'S CHOICE</li>
              </div>
              <div className="md:col-span-12 s:col-span-6">
                <li>EXCUTIVE PENCILS</li>
                <li>ENGRAVABLE PENCILS</li>
              </div>
            </ul>
            <button className="bg-[#F4B840] md:block s:hidden xl:w-3/12 lg:w-4/12 h-10 xl:text-sm md:text-xs text-white font-bold px-5 rounded-lg hover:text-[#F4B840] hover:bg-white">SHOP ALL</button>
          </div>

          <div className="col-span-5">
            <div className="grid grid-cols-12 bg-white rounded-2xl xl:h-20 md:h-16 s:h-20 w-full p-1 s:mt-5 md:mt-0">
              <div className="md:col-span-3 s:col-span-5 xl:p-4 md:p-3 text-center s:bg-[#F4F4F4] md:bg-white md:rounded-none s:rounded-l-2xl s:p-1 ">
                <p className="text-[#F4B840]  font-bold xl:text-3xl lg:text-2xl s:text-4xl s:mt-3 md:mt-0">25%
                  <span className="md:normal-case s:uppercase lg:text-2xl s:text-lg ml-2 ">off</span></p>
              </div>
              <div className="md:col-span-9 s:col-span-7 bg-[#F4F4F4] xl:p-5 md:p-3 rounded-r-2xl">
                <p className="font-light xl:text-2xl md:text-xl s:text-xl md:font-light s:font-normal md:p-0 s:p-2 ">Offer Applicable on All Our Pencils</p>
              </div>
            </div>
            <Tabs />

            <button className="bg-[#F4B840] md:hidden s:block w-3/12 h-10 text-sm text-white font-bold rounded-lg mx-auto my-12">SHOP ALL</button>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-3 s:block s:col-span-12 text-center s:p-1 bg-[#F4F4F4] rounded-t-2xl">
        <button type="button" className=" bg-white md:rounded-lg s:rounded-2xl w-full h-full shadow-lg md:p-0 s:py-3 s:px-4">
          <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12s s:w-14 md:block s:inline  md:mx-auto md:float-none s:float-left rounded-full p-3">
            <img src={Markers} className="w-full" />
          </div>
          <div className="text-center font-bold xl:text-xl lg:text-lg s:text-xl s:mx-5 s:my-3 md:block s:inline md:float-none s:float-left">Pencils</div>
          <div className="md:hidden s:float-right s:my-3  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </button>
      </div>
      <div className="md:hidden mt-3 s:block s:col-span-12 text-center s:p-1 bg-[#F4F4F4] rounded-t-2xl">
        <button type="button" className=" bg-white md:rounded-lg s:rounded-2xl w-full h-full shadow-lg md:p-0 s:py-3 s:px-4">
          <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12s s:w-14 md:block s:inline  md:mx-auto md:float-none s:float-left rounded-full p-3">
            <img src={Drawing} className="w-full" />
          </div>
          <div className="text-center font-bold xl:text-xl lg:text-lg s:text-xl s:mx-5 s:my-3 md:block s:inline md:float-none s:float-left">Pencils</div>
          <div className="md:hidden s:float-right s:my-3  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </button>
      </div>
      <div className="md:hidden mt-3 s:block s:col-span-12 text-center s:p-1 bg-[#F4F4F4] rounded-t-2xl">
        <button type="button" className=" bg-white md:rounded-lg s:rounded-2xl w-full h-full shadow-lg md:p-0 s:py-3 s:px-4">
          <div className="bg-[#F4F4F4] lg:w-5/12 lg:h-5/12 xl:w-3/12 xl:h-3/12s s:w-14 md:block s:inline  md:mx-auto md:float-none s:float-left rounded-full p-4">
            <img src={Noteb} className="w-full" />
          </div>
          <div className="text-center font-bold xl:text-xl lg:text-lg s:text-xl s:mx-5 s:my-3 md:block s:inline md:float-none s:float-left">Pencils</div>
          <div className="md:hidden s:float-right s:my-4  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </button>
      </div>

      <div className="mt-10 mb-20 text-center">
        <button className="w-3.5 h-3.5 rounded-full bg-black"></button>
        <button className="w-3.5 h-3.5 rounded-full bg-[#333333]/[.25] ml-3" ></button>
      </div>


      <div className="Gallery">
        <div className="">
          <p className="text-center font-bold xl:text-5xl lg:text-3xl md:text-2xl s:text-3xl s:font-bold">Packer pen Gallery</p>
          <Gallery />
        </div>
        <div className="my-10 text-center">
          <button className="w-3.5 h-3.5 rounded-full bg-black"></button>
          <button className="w-3.5 h-3.5 rounded-full bg-[#333333]/[.25] ml-3" ></button>
        </div>
      </div>
    </div>

  );
}

export default App;
