import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselButtons from "./CarouselButtons";
import { useRef, useState } from "react";
import { Navigation } from "swiper";

// "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
// "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
// "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
// "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg"

const imgArray = [
    "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
    "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
    "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg",
    "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587496983581-U1T4AD1TQOQWKCY9D4BM/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMemories+Of+Green.jpg",
    "https://wallpaperaccess.com/full/297278.png",
    "https://i.pinimg.com/originals/34/f7/f0/34f7f0eea61daa261f5fd3fc7c10660c.jpg",
    "https://w.forfun.com/fetch/f1/f1c364e97117fe475f352ea55e55d02c.jpeg"
]

const AnotherCarousel = () => {
    const [_activeSlide, _setActiveSlide] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const swiperRef = useRef<any>();
    // const swiper = useSwiper();

    const nextSlide = () => {
        swiperRef.current.slideNext();
        // console.log(swiper);
        console.log(swiperRef.current);
        console.log(swiperRef.current.realIndex)
    }

    const prevSlide = () => {
        swiperRef.current.slidePrev();
        console.log(swiperRef.current);
    }

    const handleSlideClick = (index: number) => {
        console.log(index);
    }

    return (
        <Box display={'flex'} height={'100%'} alignItems={'end'} position={'relative'}>
            {!isSmallScreen && (
                <CarouselButtons next={nextSlide} prev={prevSlide} />
            )}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                // loop={true}
                navigation={isSmallScreen}
                modules={[Navigation]}
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
                slideToClickedSlide={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => {
                    swiperRef.current = swiper;
                    console.log(swiper)
                }}
            >
                {!isSmallScreen && (
                    imgArray.map((img, index) => (
                        <SwiperSlide key={index} onClick={() => { handleSlideClick(index) }}>
                            {index + 1}
                            <img src={img}
                                alt={index.toString()}
                                width={150}
                                height={300}
                                style={{ borderRadius: 20, }}
                            />
                        </SwiperSlide>
                    ))
                )}
                {isSmallScreen && (
                    imgArray.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img}
                                alt={index.toString()}
                                width={'100%'}
                                height={300}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </Box>
    )
};

export default AnotherCarousel;