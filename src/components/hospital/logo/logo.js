import React from 'react';
import workpointnews_logo from '../../../images/wpnews-monocolor.png';
import cu_logo from '../../../images/cucommarts-monocolor.png';
import cleverse_logo from '../../../images/logo-icon.png';
import thaimedia_logo from '../../../images/thaimediafund-monocolor.png';

export default function CompanyLogo() {
    return(
        <div className=" absolute top-12 right-12">
                <div className="flex items-center lg:hidden">
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
    )
}