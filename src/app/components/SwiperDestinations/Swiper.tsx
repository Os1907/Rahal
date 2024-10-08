'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../css/SwiperStyle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { arabicFont } from '@/helper/font';
import { Idestination } from '@/helper/interfaces';


interface Iporp{
  data:Idestination[],
  time?:number,
  style?:boolean
}
const SwiperDestinations = ({data ,style}:Iporp) => {
  return (
    <>

      {
        style ? <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          scale: 1,
          modifier: 1.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {
          data.map((place) => {
            return  <SwiperSlide className='rounded-3xl flex flex-col ' key={place.name+1123}>

            {({ isActive }) => (
              <>
                <div className={`relative  flex flex-col gap-y-2 items-center justify-center rounded-2xl ${ isActive ? '': '' }`}>
                  <Image src={String(place.image?.src)} alt={place.name} width={550} height={550} className={isActive ? '  rounded-2xl w-full  h-[220px] lg:h-[420px]' : ' rounded-2xl  w-full h-[220px] lg:h-[420px]  backdrop-blur-2xl'} />
                {
                  isActive ? <>

<div className='  bg-main  rounded-2xl w-3/4 lg:w-auto px-3 animationInterace absolute bottom-4'>
                    <h6 dir='rtl' className={` text-white font-medium  lg:text-xl text-sm text-center relative z-1 pb-2 `}>
                        <span className={` ${arabicFont.className}`}>{place.name}  </span>
                      </h6>
                     
                    </div>
                  </> : null}
                </div>
              </>
            )
  
            }
          </SwiperSlide>
          })
        }

        

      </Swiper> : <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={3}
        coverflowEffect={{
          rotate: 10,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // loop={true}
        // autoplay={{
        //   delay: 1000,
        //   // disableOnInteraction: false,
        // }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          data.map((place) => {
            return  <SwiperSlide className='rounded-3xl flex flex-col ' key={place.name+1123}>

            {({ isActive }) => (
              <>
                <div className={`relative  flex flex-col gap-y-2 items-center justify-center rounded-2xl ${ isActive ? '': '' }`}>
                  <Image src={String(place.image?.src)} alt={place.name} width={550} height={550} className={isActive ? '  rounded-2xl w-full  h-[220px] lg:h-[420px]' : ' rounded-2xl  w-full h-[220px] lg:h-[420px]  backdrop-blur-2xl'} />
                {
                  isActive ? <>

                    <div className='  bg-main  rounded-2xl w-3/4 mx-4 px-3 animationInterace absolute bottom-4'>
                    <h6 dir='rtl' className={` text-white font-medium  lg:text-xl text-sm text-center relative z-1 pb-2 `}>
                        <span className={` ${arabicFont.className}`}>{place.name}  </span>
                      </h6>
                     
                    </div>
                  </> : null}
                </div>
              </>
            )
  
            }
          </SwiperSlide>
          })
        }

        

      </Swiper>

      }
    </>
  );
}

export default SwiperDestinations