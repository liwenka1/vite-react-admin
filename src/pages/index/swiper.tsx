import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Banner } from '@/models/banner'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './swiper.css'

// import required modules
import { Pagination } from 'swiper'

interface Props {
  bannnerList: Banner[]
}

const swiper: React.FC<Props> = (props) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.bannnerList.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default swiper
