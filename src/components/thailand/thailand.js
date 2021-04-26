import React from 'react';
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trend from './TrendCompareByCountry';
import TrendCovid from './TrendCompareByCovid';
import InfoTable from './InfoTable';

export default function Thailand() {
    return(
        <div className="flex flex-col ">
            <div className="md-semi:flex-col md-semi:items-end flex justify-center mt-20 items-center pt-20 bg-gray-800 px-4 pb-32 w-full h-full lg:py-28 lg:px-4 md:pt-24 md:px-6 md:pb-20">
                <div className="relative p-8 whitespace-nowrap md:text-right md:p-0">
                    <div className="text-6xl font-normal text-white lg:text-4xl">ยืนยันตัวเลขผู้ติดเชื้อ</div>
                    <div className="text-8xl relative font-bold text-red-400 lg:text-6xl md-semi:text-pink-500">COVID-19</div>
                    <div className="flex items-center text-5xl font-semibold text-white lg:text-4xl md:justify-end">ทั้งหมดในประเทศไทย</div>
                </div>
                <div className="grid grid-rows-2 md-semi:w-full gap-4 ml-12 lg:ml-6 lg:flex-grow-1 lg:flex-shrink md-semi:block">
                    <div className="relative rounded-lg flex items-center min-w-600 py-6 px-7 bg-red-400 lg:min-w-auto md-semi:hidden">
                        <div className="flex-grow flex-shrink">
                            <div className="font-semibold text-4xl -mt-2 mb-2 text-white md-semi:hidden">ผู้ติดเชื้อสะสม</div>
                            <div className="relative rounded-lg bg-white flex items-center py-2 px-4">
                                <FontAwesomeIcon className="w-8 h-10 fill-current text-red-400" icon={faAngleDoubleUp} />
                                <div className="font-bold text-2xl flex-grow-1 flex-shrink ml-2 text-gray-900">เพิ่มขึ้น</div>
                                <div className="font-bold text-5xl text-gray-900 font-sans">1,470</div>
                            </div>  
                        </div>
                        <div className="flex-grow-3 flex-shrink"> 
                            <div className="m-auto text-right text-9xl text-white">48,113</div>     
                        </div>   
                    </div>
                    <div className="text-right text-9xl mt-8 2xl:hidden md-semi:block sm:mt-0">
                        <div className="font-bold text-pink-500 relative inline-flex leading-3 md:text-13xl sm:text-9xl">48,113</div>
                    </div>
                    <div className="max-w-200 mb-4 ml-auto 2xl:hidden md-semi:block">
                        <div className="relative rounded-lg items-center py-2 px-4 flex bg-white">
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                            <div className="font-semibold text-2xl flex-grow-1 flex-shrink ml-2 text-gray-900">เพิ่มขึ้น</div>
                            <div className="font-semibold text-5xl">1,470</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="relative rounded-lg pt-3 px-4 pb-4 flex flex-col justify-center bg-yellow-300 sm:py-3 sm:px-2">
                            <div className="font-medium text-center text-2xl text-gray-900">กำลังรักษา</div>
                            <div className="text-center text-7xl mb-3 text-gray-900 lg:text-5xl">18,148</div>
                            <div className="relative rounded-lg flex flex-row bg-white items-center py-2 px-3 sm:px-2">
                                <FontAwesomeIcon className="fill-current text-yellow-300 w-5 h-10" icon={faAngleDoubleUp} />
                                <div className="font-semibold flex-grow-1 flex-shrink ml-2 text-gray-900 text-xl">เพิ่มขึ้น</div>
                                <div className="font-semibold text-4xl text-gray-900">933</div>
                            </div>
                        </div>
                        <div className="relative rounded-lg pt-3 px-4 pb-4 flex flex-col justify-center bg-green-600 sm:py-3 sm:px-2">
                            <div className="font-medium text-center text-2xl text-white">หายแล้ว</div>
                            <div className="text-center text-7xl mb-3 text-white lg:text-5xl">18,148</div>
                            <div className="relative rounded-lg flex flex-row bg-white items-center py-2 px-3 sm:px-2">
                                <FontAwesomeIcon className="fill-current text-green-600 w-5 h-10" icon={faAngleDoubleUp} />
                                <div className="font-semibold flex-grow-1 flex-shrink ml-2 text-gray-900 text-xl">เพิ่มขึ้น</div>
                                <div className="font-semibold text-4xl text-gray-900">477</div>
                            </div>    
                        </div>
                        <div className="relative rounded-lg pt-3 px-4 pb-4 flex flex-col justify-center bg-red-700 sm:py-3 sm:px-2">
                            <div className="font-medium text-center text-2xl text-white">เสียชีวิต</div>
                            <div className="text-center text-7xl mb-3 text-white lg:text-5xl">117</div>
                            <div className="relative rounded-lg flex flex-row bg-white items-center py-2 px-3 sm:px-2">
                                <FontAwesomeIcon className="fill-current text-red-700 w-5 h-10" icon={faAngleDoubleUp} />
                                <div className="font-semibold flex-grow-1 flex-shrink ml-2 text-gray-900 text-xl">เพิ่มขึ้น</div>
                                <div className="font-semibold text-4xl text-gray-900">11</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:hidden md-semi:block">
                    <div className="flex items-center font-normal text-white">อัพเดทล่าสุด 25/04/2021 11:00</div>
                </div>
                
            </div>

            <div className="bg-white flex h-4/5 min-h-700 border-b border-solid border-gray-200 lg:flex-col lg:h-auto lg:min-h-auto">
                <div className="flex flex-grow-3 flex-shrink h-800 sm:flex-col">
                    <div className="w-64 h-full overflow-y-auto overflow-x-hidden border-r border-solid border-gray-200 sm:order-2">chart</div>
                    <div className="flex-grow-1 flex-shrink min-w-300 sm:order-1">
                        <div className="flex flex-cols justify-center lg:pt-9 bg-purple-400">Thailand map</div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow flex-shrink h-full overflow-hidden lg:flex-row lg:h-auto sm:flex-col">
                    <div className="flex flex-col flex-grow flex-shrink pt-8 pr-12 pb-4 pl-4 py-12 px-8 h-400">
                        <div>สถิติตามเพศ</div>
                    </div>
                    <div className="flex flex-col flex-grow flex-shrink pt-8 pr-12 pb-4 pl-4 py-12 px-8 h-400">
                        <div>สถิติตามอายุ</div>
                    </div>                
                </div>
            </div>
            <TrendCovid />
            <Trend />
            <InfoTable />
        </div>
    )
}