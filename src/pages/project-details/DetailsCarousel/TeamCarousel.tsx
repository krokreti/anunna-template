import { useRef } from 'react';
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Role from '../../../models/Role';

const TeamCarousel: React.FC<{
    roles: Role[],
    currentSlide: number,
    swiper: (swiperRef: any) => void,
    handleSlideChange: (role: Role, currentIndex: number,) => void,
}> = (props) => {
    const swiperRef = useRef<any>();

    const variants = {
        active: {
            scale: 1.13
        },
        inactive: {
            scale: 1,
            transition: { duration: .5 }
        }
    }

    const validateActive = (index: number) => {
        if (props.currentSlide == index) {
            return 'active';
        } else {
            return 'inactive';
        }
    }

    const handleSlideClick = (index: number) => {
        swiperRef.current.activeIndex = index;
        const currentSlideIndex = (swiperRef.current.activeIndex);
        const activeRole = props.roles[currentSlideIndex];
        props.handleSlideChange(activeRole, currentSlideIndex);

    }

    const handleSlideChange = () => {
        const currentSlideIndex = swiperRef.current.activeIndex;
        const activeRole = props.roles[currentSlideIndex];
        props.handleSlideChange(activeRole, currentSlideIndex);
    }

    return (
        <Box component={'div'}>
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                grabCursor={true}
                slideToClickedSlide={true}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper: any) => {
                    swiperRef.current = swiper;
                    props.swiper(swiperRef);
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
                {props.roles.map((role, index: number) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => { handleSlideClick(index) }}
                        style={{ width: '200px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <motion.div
                            variants={variants}
                            animate={validateActive(index)}

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
                                    src={role.imgUrl}
                                    alt={index.toString()}
                                    width={'100%'}
                                    height={'134px'}
                                    style={{ borderRadius: 20 }}
                                />
                                <Box
                                    component={'div'}
                                    position={'absolute'}
                                >
                                    <Typography
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            padding: '0.2em 0.5em',
                                            marginBottom: '0.1em',
                                            borderRadius: '10px'
                                        }} >{role.name}</Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </Box>
    )
}

export default TeamCarousel;
