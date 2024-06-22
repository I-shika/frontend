import React from 'react';
import Image from "next/image";
import './firstlandingpage.css';

export default function Firstpage() {
    return (
        <div class="bg-hero-page bg-cover bg-center  w-100vh pr-40 pl-40 maincontainer">
            <div class="flex content-center h-14 items-center justify-between pt-14 pb-20">
                <div class="align-middle h-5">
                    <Image
                        src="/images/logo.svg"
                        alt="Descriptive text for screen readers"
                        width={500}
                        height={2}
                        layout="responsive"
                    />
                </div>
                <div>
                    <button class="w-44 h-12 text-sky-500 border-2 border-sky-500 rounded font-bold font-sans">
                        ENQUIRE NOW
                    </button>
                </div>
            </div>
            <div class="flex justify between w-full items-center headingBox" >
                <div>
            <div class="flex content-center justify-around w-full pb-20 pt-20 headingcontainer">
                <div>
                    <div class="font-oswald text-5xl text-white font-medium w-7/12 leading-tight headingbox">
                       <h1> HARBOUR LIGHTS DE GRESOGONO </h1>
                    </div>
                    <div class="font-sans  text-white pt-6 font-bold text-2xl w-4/5 contentbox">
                        1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div class="text-white flex justify between flex-col gap-4 pb-24 ">
                <div class="w-80 h-10 font-normal bg-black bg-opacity-25 content-center border-l-4 border-blue-300 pl-4 info">
                Rental Returns of <b>UPTO 11%**</b>
                </div>
                <div class="w-80 h-10 font-normal bg-black bg-opacity-25 content-center  border-l-4 border-blue-300 pl-4 info">
                Capital Appreciation of <b>UPTO 32%**</b>
                </div>
                </div>
                </div>
                <div class=" h-80 w-72  backdrop-blur-md pt-8 rounded priceContainer">
                    <div class="text-white font-normal text-xs font-sans pb-2 pr-4 pl-4 pricingTxt">
                        PRICING STARTS FROM
                    </div>
                    <div class="text-white font-oswald font-medium text-5xl pb-4 pr-4 pl-4 pricingAmount">
                        $425,000
                    </div>
                    <div class="text-white font-oswald font-normal text-2xl pb-4 pr-4 pl-4 pricing">
                        AED 1.3 Million
                    </div>
                    <div class="text-white w-64 h-12 bg-blue-500 rounded flex items-center justify-center font-sans font-bold text-xs mr-4 ml-4 presentatioButton">
                        GET A PRESENTATION
                    </div>
                 
                   <div class="text-white border-t-2 border-black text-blue-200 w-72 h-12 font-sans font-normal text-xs mt-8 pr-4 pl-4 flex items-center details">
                   Get an Expert’s Presentation of Real Estate in Dubai for Life and investment
                   </div>

                </div>
            
            </div>
        </div>
    );
}
