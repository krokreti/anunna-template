import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from 'swiper/react';

// "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
// "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
// "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
// "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg"

const AnotherCarousel = () => {
    const swiper = useSwiper();

    const nextSlide = () => {
        swiper.slideNext();
    }

    const prevSlide = () => {
        swiper.slidePrev();
    }

    return (
        <Box display={'flex'} height={'100%'} alignItems={'end'}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                // centeredSlides={true}
                // loop={true}
                // navigation={true}
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
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        autoHeight: false,
                    },
                    1700: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                        autoHeight: false,
                    },
                }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide >
                    01
                    <img src="https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    02
                    <img src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    03
                    <img src="https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    04
                    <img src="https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    05
                    <img src="https://e0.pxfuel.com/wallpapers/975/533/desktop-wallpaper-paper-walls-neon-plants-iphone-phone-galaxy-cool-neon-phone.jpg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    06
                    <img src="https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587496983581-U1T4AD1TQOQWKCY9D4BM/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMemories+Of+Green.jpg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    07
                    <img src="https://wallpaperaccess.com/full/297278.png"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    08
                    <img src="https://i.pinimg.com/originals/34/f7/f0/34f7f0eea61daa261f5fd3fc7c10660c.jpg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    09
                    <img src="https://w.forfun.com/fetch/f1/f1c364e97117fe475f352ea55e55d02c.jpeg"
                        alt=""
                        width={150}
                        height={300}
                        style={{ borderRadius: 20 }}
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default AnotherCarousel;