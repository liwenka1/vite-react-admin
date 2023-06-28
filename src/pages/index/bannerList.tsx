import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Banner } from '@/models/banner'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'

interface Props {
  bannnerList: Banner[]
}

const BannerList: React.FC<Props> = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
          delay: 3500,
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

export default BannerList
