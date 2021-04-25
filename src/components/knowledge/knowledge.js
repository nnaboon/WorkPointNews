import React from 'react';
import { faArrowRight, faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import knowledgeData from '../../fixtures/knowledge.json';
import workpointnews_logo from '../../images/wpnews-monocolor.png';
import cu_logo from '../../images/cucommarts-monocolor.png';
import cleverse_logo from '../../images/logo-icon.png';
import thaimedia_logo from '../../images/thaimediafund-monocolor.png';

export default function Knowledge() {
    return(
        <div className="w-full min-h-800 h-auto bg-gray-900">
            <div className="bg-gray-900 pt-20 pr-8 pb-20 pl-20 lg:pt-12 lg:px-8 lg:pb-24 sm:pt-8 sm:px-4 sm:pb-12">
                <div className="flex justify-between flex-grow-1 mb-1 lg:mb-8">
                    <div className="flex items-center font-light text-4xl ">
                        <div className="flex text-4xl text-white font-normal mr-1 sm:flex-col">
                            <FontAwesomeIcon className="mr-5 sm:hidden" icon={faCommentAlt} />
                            <div className="mr-1">Knowledge</div>
                            <span className="font-light sm:text-xl"> ศูนย์รวมความรู้เกี่ยวกับ COVID-19</span>
                        </div>
                    </div>
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
            
            <div className="grid gap-1 -mx-4 mt-8 grid-cols-knowledge text-white lg:grid-cols-knowledge-lg">
                {knowledgeData.map((items) => {
                    return(
                        <a href={items.url}>
                            <div className="grid-cols-knowledge-frame sm:grid-cols-knowledge-frame-sm w-full relative py-4 pr-8 pl-4 cursor-pointer grid gap-8 sm:py-2 sm:pr-4 sm:pl-2">
                                    <div className="pt-4">
                                        <img className="w-full h-full bg-cover bg-no-repeat" src={items.pic} alt="NewsPicture" />
                                    </div>
                                    <div className="w-full mt-4">
                                        <div className="font-bold text-2xl leading-6 text-left mt-2 max-h-12 overflow-ellipsis overflow-hidden">{items.title}</div>
                                        <div className="w-full overflow-hidden overflow-ellipsis m-0 leading-5 max-h-9 text-gray-400">{items.description}</div>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                            </div>
                        </a>
                    )
                })}
                </div>
            </div>
        </div>
            
    )
}