import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselButtons from "./CarouselButtons";
import { useRef, useState, useEffect } from "react";
// import { Navigation } from "swiper";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { backgroundTotal, currentProjectStatus, projectActions, slidesList } from "../../../store/project-slice";
import { motion, Variants } from "framer-motion";

// "https://d8cg12l7cuw6g.cloudfront.net/wp-content/uploads/2019/08/08172459/Wallpaper-vulca%CC%83o-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg",
// "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// "https://i.pinimg.com/originals/2f/31/4c/2f314ca9f056e2dda005cd7989622e23.jpg",
// "https://w.forfun.com/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg",
// "https://i.pinimg.com/736x/db/cc/65/dbcc656891295a71e99317c18e69a487--phone-wallpapers-smartphone.jpg"

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
            <Box display={"flex"} height={'100%'} alignItems={'end'} position={'relative'} component={"div"}>
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

                        slides!.map((img: string, index: number) => (
                            <motion.li
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