import React from 'react';
import CompanyLogo from './logo/logo';
import hospitalData from '../../fixtures/hospital.json';

export default function Hospital(){
    return(
        <div className="flex justify-center flex-col items-center bg-gray-800 bg-opacity-0.8 py-12 px-12 relative -mt-0.125 md:pt-12 md:px-4 md:pb-16">
            <CompanyLogo />
            <div className="w-full flex">
                <span className="font-normal text-4xl text-white">ตรวจเชื้อโควิด-19</span>
            </div>
            <div className="flex w-full">
                <span className="text-2xl text-white font-light">ได้ที่โรงพยาบาลใดบ้าง</span>
            </div>
            <div className="w-full justify-between flex mb-2 mt-5 sm:block">
                <div className="block sm:pr-0">
                    <span className=" h-9 w-96 py-1 px-3 pr-0 bg-white inline-flex mb-2 lg:w-64 sm:w-96">
                        <input className="w-full text-lg border-gray-200 border-solid transition-all duration-300 box-border m-0 rounded-md leading-7 bg-white" placeholder="ค้นหาชื่อโรงพยาบาล, จังหวัด, เขต" />
                        <span className="flex flex-col justify-center mr-4">SEARCH</span>
                    </span>
                </div>
                <div className="flex justify-end w-full sm:justify-between">
                    <div className="flex flex-shrink flex-grow-1 max-w-150 sm:max-w-none">
                        <div className="flex w-full bg-gray-50 items-center border border-solid justify-between cursor-default flex-wrap relative transition duration-150 min-h-38">
                            <div className="flex flex-wrap items-center overflow-hidden relative box-border py-0.5 px-2">ค่าบริการทั้งหมด</div>
                        </div>
                    </div>
                    <div className="flex flex-shrink flex-grow-1 max-w-150 pl-2 sm:max-w-none">
                        <div className="flex w-full bg-gray-50 items-center border border-solid justify-between cursor-default flex-wrap relative transition duration-150 min-h-38">
                            <div className="flex flex-wrap items-center overflow-hidden relative box-border py-0.5 px-2">ประเภททั้งหมด</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full">
                    <table className="w-full border-none bg-gray-50 pb-8 sm:hidden">
                        <thead className="table w-full table-fixed text-xl">
                            <tr className="h-14">
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-7 text-gray-600 text-left">ชื่อโรงพยาบาล</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-left">เบอร์โทร</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-left">จังหวัด</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-left">เขต</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-left">ประเภท</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-red-400 text-right">ค่าบริการ</th>
                                <th className=" border-b border-solid border-gray-200 py-2 pr-2 pl-6 text-right">ตำแหน่ง</th>
                            </tr>                            
                        </thead>
                        <tbody className="table w-full table-fixed text-lg">
                            {hospitalData.map((items) => {
                                return(
                                    <tr className="h-14">
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-left">{items.name}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-left">{items.phone}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-left">{items.province}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-left">{items.district}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-left">{items.type}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 text-red-400 text-right">{items.price}</td>
                                        <td className=" border-b border-solid border-gray-100 py-2 pr-2 pl-6 cursor-pointer text-blue-400 text-right">แผนที่</td>
                                    </tr>    
                                )
                            })}
                        </tbody>


                    </table>
                    

                </div>
                <div className="2xl:hidden sm:block w-full">
                        <div className="flex flex-col flex-grow-1 flex-shrink items-center w-full bg-gray-800">
                            {hospitalData.map((items) => {
                                return(
                                    <div className="bg-white text-xl flex-grow-1 flex-shrink flex-col min-h-91 py-2 px-1 w-full border-b border-gray-200 mb-2">
                                        <div className="flex flex-grow-1 flex-shrink justify-between text-2xl text-gray-900">
                                            <div className="items-center mr-2 flex flex-grow-1 flex-shrink">{items.name}</div>
                                            <div className="text-right text-red-400">{items.price}</div>
                                        </div>
                                        <div className="leading-4 text-gray-400">{items.province} {items.district}</div>
                                        <div className="mt-0.5 leading-4 text-gray-900">{items.phone}</div>
                                        <div className="cursor-pointer flex justify-end items-center -mt-6 text-blue-400">แผนที่</div>
                                    </div>
                                )
                            })}
                            
                        </div>
                </div>
                <div>page number</div>
            </div>
        </div>
    )
}