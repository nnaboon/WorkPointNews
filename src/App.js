import React, {useRef} from 'react';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thailand from './components/thailand/thailand';
import World from './components/world/world';
import Knowledge from './components/knowledge/knowledge';
import Hospital from './components/hospital/hospital';
import Footer from './components/footer/footer';

export default function App() {
  const myRef = useRef(null);
  const myRefWorld = useRef(null);
  const myRefKnow = useRef(null);
  const myRefHos = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth',block: 'center'});
  const executeScrollWorld = () => myRefWorld.current.scrollIntoView({behavior: 'smooth',block: 'center'});
  const executeScrollKnow = () => myRefKnow.current.scrollIntoView({behavior: 'smooth',block: 'center'});
  const executeScrollHos = () => myRefHos.current.scrollIntoView({behavior: 'smooth',block: 'center'});
  
  return (
    <div className="bg-gray-800 h-screen">
              <div className="fixed t-0 l-0 h-20 w-full z-10 sm:h-16 sm:block">
            <div className="flex w-full h-full text-white bg-gray-800 items-center py-0 px-9 justify-between sm:pl-0 sm:pr-4 lg:flex-col lg:h-24">
                <div className="flex justify-between w-full ">
                  
                    <div className="transition opacity duration-200 lg:py-4">
                      <div className="sm:hidden">WORKPOINTNEWS</div>
                      <FontAwesomeIcon className="ml-4 2xl:hidden sm:inline-block " icon={faBars}/>
                    </div>   
                    <div className="flex h-full lg:hidden">
                            <div className="flex relative">
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScroll}>ประเทศไทย</div>
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollWorld}>ทั่วโลก</div>
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollHos}>โรงพยาบาล</div>
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollKnow}>ความรู้สู้โควิด</div>
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap">ความคืบหน้าล่าสุด</div>
                                <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap">FAQ</div>
                            </div>
                    </div>
                    <div className="flex items-center text-xl sm:hidden">อัพเดทล่าสุด 25/04/2021 11:00</div>
                </div>

                <div className="flex 2xl:hidden xl:hidden lg:block h-full w-full sm:overflow-scroll">
                    <div className="flex justify-center sm:justify-start">
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScroll}>ประเทศไทย</div>
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollWorld}>ทั่วโลก</div>
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollHos}>โรงพยาบาล</div>
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap" onClick={executeScrollKnow}>ความรู้สู้โควิด</div>
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap">ความคืบหน้าล่าสุด</div>
                        <div className="flex items-center justify-center h-full white font-medium transition opacity duration-100 text-xl py-0 px-4 my-0 mx-2 cursor-pointer whitespace-nowrap">FAQ</div>
                    </div>
                </div>
            </div>
        </div>
      <div ref={myRef}></div>
       <Thailand /> 
      <div ref={myRefWorld}>
        <World/>
      </div>
      <div ref={myRefHos}>
        <Hospital />
      </div>
      <div ref={myRefKnow}>
        <Knowledge />
      </div>
      <Footer />
    </div>
  );
}

