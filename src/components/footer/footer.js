import React from 'react';
import workpoint_logo from '../../images/wpnews-monocolor.png';
import thaimedia_logo from '../../images/thaimediafund-monocolor.png';
import cu_logo from '../../images/cucommarts-monocolor.png';
import cleverse_logo from '../../images/logo-icon.png';

export default function Footer() {
    return(
        <div className="bg-black flex items-center justify-center h-16">
            <div className="flex items-center text-white box-border h-full">
                <a href="https://workpointtoday.com/">
                    <div className="cursor-pointer transition-opacity duration-300 h-4 my-0 mx-4">
                        <img className="h-full w-auto" src={workpoint_logo} alt="workpoint" />
                    </div>
                </a>
                <a href="http://www.thaimediafund.or.th/">
                    <div className="cursor-pointer my-0 mx-4 transition-opacity duration-300 h-4">
                        <img className="h-full w-auto" src={thaimedia_logo} alt="thaimedia" />
                    </div>
                </a>
                <a href="https://www.commarts.chula.ac.th/th-th/index.html">
                    <div className="cursor-pointer my-0 mx-4 transition-opacity duration-300 h-4">
                        <img className="h-full w-auto" src={cu_logo} alt="cu" />
                    </div>
                </a>
                <a href="https://cleverse.com/">
                    <div className="cursor-pointer py-0 px-4 transition-opacity duration-300 h-4">
                        <img className="h-full w-auto" src={cleverse_logo} alt="cleverse" />
                    </div>
                </a>
            </div>
        </div>
    )
}