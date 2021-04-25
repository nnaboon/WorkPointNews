import React from 'react';
import workpointnews_logo from '../../images/wpnews-monocolor.png';
import cu_logo from '../../images/cucommarts-monocolor.png';
import cleverse_logo from '../../images/logo-icon.png';
import thaimedia_logo from '../../images/thaimediafund-monocolor.png';
import patientData from '../../fixtures/patient.json';

export default function InfoTable() {
    return(
        <div className="flex justify-center flex-col items-center px-12 py-12 relative -mt-1 bg-gray-800 lg:pt-4 lg:px-4 lg:pb-28 sm:pt-4 sm:px-4 sm:pb-24">
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
                    </div>
    )
}