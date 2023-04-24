import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Banner } from '@/models/banner'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'

interface Props {
  bannnerList: Banner[]
}

const swiper: React.FC<Props> = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
      >
        {props.bannnerList.map((item) => (
          <SwiperSlide key={item.bannerId}>
            <img style={{ width: '100%' }} src={item.pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default swiper
