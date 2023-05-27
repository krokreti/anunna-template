import { useRef } from 'react';
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAppSelector } from '../../../hooks/redux-hooks';
import { slidesList } from '../../../store/project-slice';

const TeamCarousel = () => {
    const swiperRef = useRef<any>();
    const slides = (useAppSelector(slidesList));
    return (
        <Box component={'div'}>
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                slideToClickedSlide={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => {
                    swiperRef.current = swiper;
                    console.log(swiper)
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        autoHeight: false,
                    },
                    1850: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                        autoHeight: false,
                    },
                }}
            >
                {slides?.map((img: string, index: number) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => { }}
                        style={{ width: '176px;' }}
                    >
                        <Box
                            display={"flex"}
                            flexDirection={'column'}
                            width={'176px'}
                            component={"div"}
                            position={'relative'}
                            justifyContent={'end'}
                            alignItems={'center'}
                        >
                            <img
                                src={img}
                                alt={index.toString()}
                                width={'100%'}
                                height={'134px'}
                                style={{ borderRadius: 20, }}
                            />
                            <Box
                                component={'div'}
                                position={'absolute'}
                            >
                                <Typography>Nome</Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </Box>
    )
}

export default TeamCarousel;