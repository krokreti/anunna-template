import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const AnotherCarousel = () => {

    return (
        <Box display={'flex'} height={'100%'} alignItems={'end'}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    900: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        autoHeight: true,

                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        autoHeight: false,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        autoHeight: false,
                    },
                }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide >
                    Slide 1
                    <img src="https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    Slide 2
                    <img src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 3
                    {/* <img src="https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg" alt="" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    Slide 4
                    {/* <img src="https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg" alt="" /> */}
                </SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default AnotherCarousel;