import React from 'react';
import cu_color_logo from '../../images/cucommarts-color.png';
import thaimedia_color_logo from '../../images/thaimediafund-color.png';
import cleverse_color_logo from '../../images/1560310666523.png';

export default function Trend(){
    return(
        <div className="border-b border-solid border-gray-300 pt-14 px-14 pb-16 lg:pt-12 lg:px-8 bg-white lg:pb-16 sm:pt-8 sm:px-4 sm:pb-12">
                    <div className="flex flex-row">
                        <div className="relative pl-14 flex-grow-1 flex-shrink sm:pl-0">
                            <div className="text-5xl font-medium text-gray-900 sm:text-4xl">แนวโน้มผู้ติดเชื้อเมื่อเทียบกับประเทศอื่น</div>
                            <div className="text-3xl text-gray-600 sm:text-2xl">เริ่มนับจากวันที่ผู้ติดเชื้อมากกว่า 100 คน</div>
                            <div className="text-3xl text-gray-600 2xl:hidden sm:block sm:text-base">อัพเดทล่าสุด 25/04/2021</div>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <a href="http://www.thaimediafund.or.th/">
                                <div className="cursor-pointer h-9 my-0 mx-4">
                                    <img className="h-full" src={thaimedia_color_logo} alt="Thaimedia" />
                                </div>
                            </a>
                            <a href="https://www.commarts.chula.ac.th/th-th/index.html">
                                <div className="cursor-pointer h-9 my-0 mx-4">
                                    <img className="h-full" src={cu_color_logo} alt="CU" />
                                </div>
                            </a>
                            <a href="https://cleverse.com/">
                                <div className="cursor-pointer h-9 my-0 mx-4">
                                    <img className="h-full" src={cleverse_color_logo} alt="Cleverse" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-14 sm:mt-10">
                        <div className="flex flex-col w-full h-full sm:h-350">
                            <div>graph</div>
                            <div>จำนวนวัน หลังพบผู้ติดเชื้อครบ 100 คน</div>
                        </div>
                    </div>
            </div>
    )
}