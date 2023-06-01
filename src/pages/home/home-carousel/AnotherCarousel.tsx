import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselButtons from "./CarouselButtons";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { backgroundTotal, currentProjectStatus, projectActions, slidesList } from "../../../store/project-slice";
import { motion, Variants } from "framer-motion";

const AnotherCarousel = () => {
    const dispatch = useAppDispatch();
    const slides = (useAppSelector(slidesList));
    const currentProject = (useAppSelector(currentProjectStatus));
    const totalCount = useAppSelector(backgroundTotal);
    const [_activeSlide, _setActiveSlide] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const swiperRef = useRef<any>();
    const animation: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        swiperRef.current.activeIndex = currentProject.currentProject;
    }, [currentProject, swiperRef])

    const nextSlide = () => {
        if (currentProject.currentProject == (totalCount - 1)) {
            return;
        }
        swiperRef.current.slideNext();
        dispatch(projectActions.changeProject(currentProject.currentProject + 1));
    }

    const prevSlide = () => {
        if (currentProject.currentProject == 0) {
            return;
        }
        swiperRef.current.slidePrev();
        dispatch(projectActions.changeProject(currentProject.currentProject - 1));
    }

    const handleSlideClick = (index: number) => {
        dispatch(projectActions.changeProject(index));
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box display={"flex"} height={'100%'} alignItems={'end'} position={'relative'} component={"div"} >
                {!isSmallScreen && (
                    <CarouselButtons next={nextSlide} prev={prevSlide} currentProject={currentProject.currentProject} totalProjects={totalCount} />
                )}
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}

                    // loop={true}
                    navigation={isSmallScreen}
                    centeredSlides={true}

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
                            slidesPerView: 1.1,
                            spaceBetween: 30,
                            autoHeight: false,
                        },
                        1100: {
                            slidesPerView: 1.6,
                            spaceBetween: 30,
                            autoHeight: false,
                        },
                        1200: {
                            slidesPerView: 1.9,
                            spaceBetween: 30,
                            autoHeight: false,
                        },
                        1350: {
                            slidesPerView: 2.2,
                            spaceBetween: 50,
                            autoHeight: false,
                        },
                        1500: {
                            slidesPerView: 2.3,
                            spaceBetween: 0,
                            autoHeight: false,
                        },
                        1650: {
                            slidesPerView: 2.7,
                            spaceBetween: 0,
                            autoHeight: false,
                        },
                        1850: {
                            slidesPerView: 3,
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

                        slides!.map((img: string, index: number) => (
                            <motion.li
                                key={index}
                                variants={animation}
                            >
                                <SwiperSlide
                                    key={index}
                                    onClick={() => { handleSlideClick(index) }}
                                    style={{ width: '255px' }}>
                                    <Box display={"flex"} flexDirection={'column'} width={'255px'} component={"div"} >
                                        {(index + 1).toString().padStart(2, '0')}
                                        <img src={img}
                                            alt={index.toString()}
                                            width={'100%'}
                                            height={'419px'}
                                            style={{ borderRadius: 20, }}
                                        />
                                    </Box>
                                </SwiperSlide>
                            </motion.li>
                        ))
                    )}
                    {isSmallScreen && (
                        slides!.map((img: string, index: number) => (
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
        </motion.div>
    )
};

export default AnotherCarousel;