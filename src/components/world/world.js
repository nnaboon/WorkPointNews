import React from 'react';

export default function World(){
    return (
        <div className="w-full h-full min-h-800 pt-0 bg-white lg:h-auto">
            <div className="relative h-full w-full grid grid-cols-world overflow-hidden lg:flex lg:flex-col">
                <div className="overflow-y-auto border-r border-solid border-gray-400 bg-yellow-600 lg:order-2 lg:grid lg:grid-cols-world-lg lg:grid-rows-world-row-lg lg:border-t">
                    <div>number</div>
                    <div>flag</div>
                </div>
                <div className="h-full flex items-center justify-between z-1 bg-green-200 lg:order-1">world map</div>
            </div>
        </div>
    )
}