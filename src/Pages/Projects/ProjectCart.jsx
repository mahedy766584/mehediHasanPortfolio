/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectFade, } from 'swiper/modules';


const ProjectCart = ({img1, img2, img3, img4, img5, img6}) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                slidesPerView={1}
                loop={true}
                modules={[Pagination, Navigation, EffectFade,]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className='projects_slides'>
                        <img src={img1} className='slide_img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img2} className='slide_img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} className='slide_img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img4} className='slide_img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img5} className='slide_img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img6} className='slide_img'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProjectCart;