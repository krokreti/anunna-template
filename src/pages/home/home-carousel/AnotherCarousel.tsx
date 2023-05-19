import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselButtons from "./CarouselButtons";
import { useRef, useState } from "react";
// import { Navigation } from "swiper";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { projectActions, slidesList } from "../../../store/project-slice";

// "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
// "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
// "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
// "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg"

const AnotherCarousel = () => {
    const dispatch = useAppDispatch();
    const slides = (useAppSelector(slidesList));
    const [_activeSlide, _setActiveSlide] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const swiperRef = useRef<any>();
    // const swiper = useSwiper();

    const nextSlide = () => {
        swiperRef.current.slideNext();
        // console.log(swiper);
        // console.log(swiperRef.current);
        console.log(swiperRef.current.activeIndex)
        console.log(swiperRef.current.realIndex)
        dispatch(projectActions.changeProject(swiperRef.current.activeIndex));
    }

    const prevSlide = () => {
        swiperRef.current.slidePrev();
        console.log(swiperRef.current.activeIndex);
        console.log(swiperRef.current.realIndex);
        dispatch(projectActions.changeProject(swiperRef.current.activeIndex));
    }

    const handleSlideClick = (index: number) => {
        console.log(index);
        dispatch(projectActions.changeProject(swiperRef.current.activeIndex));
    }

    return (
        <Box display={'flex'} height={'100%'} alignItems={'end'} position={'relative'}>
            {!isSmallScreen && (
                <CarouselButtons next={nextSlide} prev={prevSlide} />
            )}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}

                // loop={true}
                navigation={isSmallScreen}
                // modules={[Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    900: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        autoHeight: false,

                    },
                    1024: {
                        slidesPerView: 1.7,
                        spaceBetween: 30,
                        autoHeight: false,
                    },
                    1100: {
                        slidesPerView: 1.9,
                        spaceBetween: 30,
                        autoHeight: false,
                    },
                    1200: {
                        slidesPerView: 2.1,
                        spaceBetween: 30,
                        autoHeight: false,
                    },
                    1350: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                        autoHeight: false,
                    },
                    1500: {
                        slidesPerView: 2.7,
                        spaceBetween: 0,
                        autoHeight: false,
                    },
                    1650: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        autoHeight: false,
                    },
                    1850: {
                        slidesPerView: 3.5,
                        spaceBetween: 0,
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
                    slides!.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            onClick={() => { handleSlideClick(index) }}
                            // style={{ width: '255px;', border: '1px solid red' }}>
                            style={{ width: '255px;' }}>
                            {/* <Box display={"flex"} flexDirection={'column'} width={'255px'} border='1px solid blue' > */}
                            <Box display={"flex"} flexDirection={'column'} width={'255px'} >
                                {(index + 1).toString().padStart(2, '0')}
                                <img src={img}
                                    alt={index.toString()}
                                    width={'100%'}
                                    height={'419px'}
                                    style={{ borderRadius: 20, }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))
                )}
                {isSmallScreen && (
                    slides!.map((img, index) => (
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