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

            {/* <div className="border-b border-solid border-gray-200 pt-14 px-14 pb-16 lg:pt-12 lg:px-8 bg-white lg:pb16 sm:pt-8 sm:px-4 sm:pb-12">
                <div className="flex lg:flex-col">
                    <div className="relative pl-14 flex-grow-1 flex-shrink sm:pl-0">
                        <div className=" text-5xl font-medium text-gray-900 sm:text-4xl">แนวโน้มผู้ติดเชื้อ COVID-19</div>
                        <div className="flex flex-rows text-4xl text-gray-600 sm:text-3xl">ทั้งหมดในประเทศไทย <span className="text-base leading-loose"> อัพเดตล่าสุด 23/04/2021</span></div>
                    </div>
                    <div className="flex lg:self-end sm:flex-wrap">
                        <div className="w-36 text-right sm:w-1/2 sm:mt-5">
                            <div className="text-xl font-semibold text-gray-900">ผู้ติดเชื้อ</div>
                            <div className="text-5xl font-medium text-pink-500">48,113</div>
                        </div>
                        <div className="w-36 text-right sm:w-1/2 sm:mt-5">
                            <div className="text-xl font-semibold text-gray-900">กำลังรักษา</div>
                            <div className="text-5xl font-medium text-yellow-400">18,148</div>
                        </div>
                        <div className="w-36 text-right sm:w-1/2 sm:mt-5">
                            <div className="text-xl font-semibold text-gray-900">หายดี</div>
                            <div className="text-5xl font-medium text-green-600">28,248</div>
                        </div>
                        <div className="w-36 text-right sm:w-1/2 sm:mt-5">
                            <div className="text-xl font-semibold text-gray-900">เสียชีวิต</div>
                            <div className="text-5xl font-medium text-red-600">117</div>
                        </div>
                    </div>
                </div>
                <div>graph</div>
            </div> */}
            {/* <div className="border-b border-solid border-gray-300 pt-14 px-14 pb-16 lg:pt-12 lg:px-8 bg-white lg:pb-16 sm:pt-8 sm:px-4 sm:pb-12">
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
            </div> */}
                <TrendCovid />
                <Trend />
                <InfoTable />
                {/* <div className="flex justify-center flex-col items-center px-12 py-12 relative -mt-1 bg-gray-800 lg:pt-4 lg:px-4 lg:pb-28 sm:pt-4 sm:px-4 sm:pb-24">
                    <div className="absolute top-14 right-16">
                        <div className="flex items-center text-white lg:hidden">
                            <a href="https://workpointtoday.com/">
                                <div className="my-0 mx-4 cursor-pointer transition-opacity duration-300 h-6">
                                    <img className="h-full w-auto" src={workpointnews_logo} alt="Workpointnews" />
                                </div>
                            </a>
                            <a href="http://www.thaimediafund.or.th/">
                                <div className="my-0 mx-4 cursor-pointer transition-opacity duration-300 h-6">
                                    <img className="h-full w-auto" src={thaimedia_logo} alt="Thaimedia" />
                                </div>
                            </a>
                            <a href="https://www.commarts.chula.ac.th/th-th/index.html">
                                <div className="my-0 mx-4 cursor-pointer transition-opacity duration-300 h-6">
                                    <img className="h-full w-auto" src={cu_logo} alt="CU" />
                                </div>
                            </a>
                            <a href="https://cleverse.com/">
                                <div className="my-0 mx-4 cursor-pointer transition-opacity duration-300 h-6">
                                    <img className="h-full w-auto" src={cleverse_logo} alt="Cleverse" />
                                </div>
                            </a>
                        </div>                        
                    </div>
                    
                    <div className="w-full flex text-4xl font-normal text-white ">ข้อมูลผู้ติดเชื้อ COVID-19</div>
                    <div className="w-full flex text-3xl font-light text-white" >ทั้งหมดในประเทศไทย</div>
                    <div className="w-full flex justify-end -mt-7 text-xl font-normal lg:-mt-10">
                        <div className="flex flex-grow-1 flex-shrink max-w-350 mb-2 mt-6 justify-end sm:mt-0">
                            <div className="flex-grow-1 flex-shrink max-w-150 bg-white semi-md:mt-0">
                                <div className="relative box-border items-center">
                                    <div className="relative items-center bg-white border-gray-300 border-solid border cursor-default flex flex-wrap justify-between min-h-38 transition-all duration-100">
                                        <div className="ml-0.5 mr-0.5 absolute overflow-hidden overflow-ellipsis text-gray-900 whitespace-nowrap">สัญชาติทั้งหมด</div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="ml-2 flex-grow-1 flex-shrink max-w-150 bg-white">
                                <div className="relative box-border items-center">
                                    <div className="relative items-center bg-white border-gray-300 border-solid border cursor-default flex flex-wrap justify-between min-h-38 transition-all duration-100">
                                        <div className="ml-0.5 mr-0.5 absolute overflow-hidden overflow-ellipsis text-gray-900 whitespace-nowrap">จังหวัดทั้งหมด</div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:hidden">
                        <div className="w-full pb-8">
                            <table className="border-none w-full">
                                <thead className="table table-fixed w-full">
                                    <tr className="h-14 text-xl font-normal">
                                        <th className="w-20 border-b border-gray-50 p-2 pl-6 bg-white">
                                            <div className="flex items-center justify-start cursor-pointer text-red-400 whitespace-nowrap">ลำดับ</div>
                                        </th>
                                        <th className="w-28 border-b border-gray-50 p-2 pl-6 bg-white">
                                            <div className="flex items-center justify-end cursor-pointer text-gray-900 whitespace-nowrap">วันที่ได้รับรายงาน</div>
                                        </th>
                                            <th className="w-16 border-b border-gray-50 p-2 pl-6 bg-white lg:hidden">
                                                <div className="flex items-center justify-end cursor-pointer text-gray-900 whitespace-nowrap">เพศ</div>
                                            </th>
                                            <th className="w-20 border-b border-gray-50 p-2 pl-6 bg-white lg:hidden">
                                                <div className="flex items-center justify-end cursor-pointer text-gray-900 whitespace-nowrap">อายุ</div>
                                            </th>
                                            <th className="w-24 border-b border-gray-50 p-2 pl-6 bg-white lg:hidden">
                                                <div className="flex items-center cursor-pointer text-gray-900 whitespace-nowrap">สัญชาติ</div>
                                            </th>
                                            <th className="w-44 border-b border-gray-50 p-2 pl-6 bg-white lg:hidden">
                                                <div className="flex items-center cursor-pointer text-gray-900 whitespace-nowrap">อาชีพ</div>
                                            </th>
                                            <th className="w-44 border-b border-gray-50 p-2 pl-6 bg-white lg:hidden">
                                                <div className="flex items-center cursor-pointer text-gray-900 whitespace-nowrap">จังหวัดที่ตรวจพบ</div>
                                            </th>
                                            <th className="w-44 border-b border-gray-50 p-2 pl-6 bg-white">
                                                <div className="flex items-center cursor-pointer text-gray-900 whitespace-nowrap">อำเภอที่ตรวจพบ</div>
                                            </th>
                                            <th className="border-b border-gray-50 p-2 pl-6 bg-white">
                                                <div className="flex items-center cursor-pointer text-gray-900 whitespace-nowrap">รูปแบบความเสี่ยง</div>
                                            </th>
                                        </tr>   
                                    </thead>
                                    <tbody>
                                        {patientData.map((items)=>{
                                            return(
                                                <tr className="h-16 bg-white table w-full table-fixed text-left">
                                                    <td className="w-20 py-2 pr-4 pl-6 text-right">{items.id}</td>
                                                    <td className="w-28 py-2 pr-4 pl-6 text-left">{items.date}</td>
                                                    <td className="w-16 py-2 pr-4 pl-6 text-left">{items.gender}</td>
                                                    <td className="w-20 py-2 pr-4 pl-6 text-right lg:hidden">{items.age}</td>
                                                    <td className="w-24 py-2 pr-4 pl-6 text-left lg:hidden">{items.nationality}</td>
                                                    <td className="w-44 py-2 pr-4 pl-6 text-left lg:hidden">{items.career}</td>
                                                    <td className="w-44 py-2 pr-4 pl-6 text-left lg:hidden">{items.province}</td>
                                                    <td className="w-44 py-2 pr-4 pl-6 text-left">{items.district}</td>
                                                    <td className="py-2 pr-4 pl-6 text-left">{items.type}</td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="w-full 2xl:hidden sm:block">
                            {patientData.map((items) =>{
                                return(
                                    <div className="text-base box-border rounded-md min-h-65 w-full flex flex-grow-1 flex-shrink bg-white mb-2">
                                        <div className="w-16 flex flex-col justify-start items-center pt-2 bg-white text-3xl">{items.id}</div>
                                        <div className="flex flex-grow-1 flex-shrink">
                                            <div className="flex w-full pt-2 px-3 pb-2 text-xl">{items.gender}</div>
                                        </div>
                                    </div>                                    
                                )
                            })}

                        </div>
                    </div> */}
        </div>
    )
}