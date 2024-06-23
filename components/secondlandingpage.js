import React from 'react';
import Image from "next/image";
import './secondlandingpage.css';


const images=[
    '/images/booking.svg',
    '/images/payment.svg'
]
export default function SecondPart() {
    
    return (<div >
        <div class='flex w-full justify-around pt-10 h-44 pr-40 pl-40 bg-sky-50 pb-40 whyUsContainer'>
        <div class=" flex flex-col items-center">
        <div class="w-12 whyUsImage">
                <Image
                    src="/images/booking.svg"
                    alt="Descriptive text for screen readers"
                    width={500}
                    height={2}
                    layout="responsive"
                />
            </div>
            <div class="text-base font-sans pt-4 whyUsContent">
            BOOK WITH
            </div>
            <div class="font-oswald font-medium text-3xl text-blue-950 pb-2 whyUsBox">
            Only 20%
            </div>
           <hr class="border-slate-300 w-20 border-4 rounded  horizontalLine"></hr>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-12 whyUsImage">
                <Image
                    src="/images/payment.svg"
                    alt="Descriptive text for screen readers"
                    width={500}
                    height={2}
                    layout="responsive"
                />
            </div>
            <div class="text-base font-sans pt-4 whyUsContent">
            PAYMENT PLAN
            </div>
            <div class="font-oswald font-medium text-3xl text-blue-950 pb-2 whyUsBox">
            Easy 70/30
            </div>
            <hr class="border-slate-300 w-20 border-4 rounded horizontalLine"></hr>
        </div>
        <div class=" flex flex-col items-center">
        <div class="w-12 whyUsImage">
                <Image
                src="/images/handover.svg"
                alt="Descriptive text for screen readers"
                width={500}
                height={2}
                layout="responsive"
            />
            </div>
            <div class="text-base font-sans pt-4 whyUsContent">
            HANDOVER ON
            </div>
            <div class="font-oswald font-medium text-3xl text-blue-950 pb-2 whyUsBox">
            Q2 2027
            </div>
            <hr class="border-slate-300 w-20 border-4 rounded horizontalLine"></hr>
        </div>
        <div class="flex flex-col items-center">
        <div class="w-12 whyUsImage">
                <Image
                    src="/images/areas.svg"
                    alt="Descriptive text for screen readers"
                    width={500}
                    height={2}
                    layout="responsive"
                />
            </div>
            <div class="text-base font-sans pt-4 whyUsContent">
            AREA STARTS FROM
            </div>
            <div class="font-oswald font-medium text-3xl text-blue-950 pb-2 whyUsBox">
                700 sqmt
            </div>
            <hr class="border-slate-300 w-20 border-4 rounded horizontalLine"></hr>
        </div>

    </div>
    <div class="flex flex-col  pt-10 pr-40 pl-40 featuresbox">
      
            <div class="w-48 h-20 m-auto ">
            <Image
                    src="/images/heading.svg"
                    alt="Descriptive text for screen readers"
                    width={50}
                    height={2}
                    layout="responsive"
                />
            </div>
            <div class=" h-12 font-oswald text-4xl text-blue-950 m-auto pt-10 font-medium">
            FEATURES & AMENITIES
            </div>
            <div class="w-1/2 m-auto pt-10 font-sans text-base text-center featurecontent">
            Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. 
            Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.
            </div>
    
   
    <div class="flex gap-4 w-full justify-between pb-20  featurescontainer ">
        <div class="featurebox">
            <div class="feautureParts">
                <div class="imageContainer w-56">
            <Image
                    src="/images/floating.svg"
                    alt="Descriptive text for screen readers"
                    width={220}
                    height={220}
                  
                />
                </div>
                <div class="h-40 w-56 -mt-20  -ml-2 pt-24 text-center shadow-lg shadow-gray-400 rounded-2xl textBox">
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    Floating
                  </div>
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    Pools
                  </div>
                </div>
            </div>
           
        </div>
        <div class=" featurebox">
            <div class="feautureParts">
            <div class="imageContainer w-56">
            <Image
                    src="/images/floating.svg"
                    alt="Descriptive text for screen readers"
                    width={220}
                    height={220}
                    layout="intrinsic"
                />
                </div>
                <div class="h-40 w-56 -mt-20  -ml-2 pt-24 text-center shadow-lg shadow-gray-400 rounded-2xl textBox">
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                   Spacious Cabins 
                  </div>
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    Like Rooms
                  </div>
                </div>
            </div>
           
        </div>
        <div class=" featurebox">
            <div class="feautureParts">
            <div class="imageContainer w-56">
            <Image
                    src="/images/floating.svg"
                    alt="Descriptive text for screen readers"
                    width={220}
                    height={220}
                    layout="intrinsic"
                />
                </div>
                <div class="h-40 w-56 -mt-20  -ml-2 pt-24 text-center shadow-lg shadow-gray-400 rounded-2xl textBox">
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    Sea Facing 
                  </div>
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    Swimming Pools
                  </div>
                </div>
            </div>
          
        </div>
        <div class="featurebox">
            <div class="feautureParts">
            <div class="imageContainer w-56">
            <Image
                    src="/images/floating.svg"
                    alt="Descriptive text for screen readers"
                    width={220}
                    height={220}
                    layout="intrinsic"
                />
                </div>
                <div class="h-40 w-56 -mt-20  -ml-2 pt-24 text-center shadow-lg shadow-gray-400 rounded-2xl textBox">
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                  Gymnasium
                  </div>
                  <div class="font-sans font-semibold text-base text-blue-900 activityText">
                    & Fitness
                  </div>
                </div>
            </div>
         
        </div>


    </div>
    </div>
    <div class="text-right pr-40 pl-40 pb-10 text-base termsContainer">
    *T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2
    </div>
    
    </div>);
}