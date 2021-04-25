import React from 'react';

export default function TrendCovid() {
    return(
        <div className="border-b border-solid border-gray-200 pt-14 px-14 pb-16 lg:pt-12 lg:px-8 bg-white lg:pb16 sm:pt-8 sm:px-4 sm:pb-12">
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
    </div>
    )
}