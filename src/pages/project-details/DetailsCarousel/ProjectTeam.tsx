import { Box, Typography, Stack, useTheme } from "@mui/material";
import TeamCarousel from "./TeamCarousel";
import TeamCarouselButtons from "./TeamCarouselButtons";
import { motion } from "framer-motion";
import PortfolioType from "../../../models/PortfolioProject";
import { useRef, useState } from "react";
import Role from "../../../models/Role";
import { useTranslation } from "react-i18next";

const ProjectTeam: React.FC<{ project: PortfolioType }> = ({ project }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const swiperSlider = useRef<any>();
    const [activeRole, setActiveRole] = useState<Role>(project.roles[0]);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const totalSlides = project.roles.length;

    const swiper = (swiperRef: any) => {
        swiperSlider.current = swiperRef.current;
        swiperSlider.current.index = 0;
    }

    const handleSlideChange = (role: Role, currentSlide: number) => {
        setActiveRole(role);
        setCurrentSlide(currentSlide);
        console.log(swiperSlider.current)
    }

    const handleSlideNext = (role: Role, currentSlide: number, next: boolean) => {
        setActiveRole(role);
        setCurrentSlide(currentSlide);
        if (next) {
            swiperSlider.current.slideNext();
        } else {
            swiperSlider.current.slidePrev();
        }
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box flexDirection={'column'} component={"div"} height={'100%'} display={'flex'} justifyContent={'end'} >
                <Stack direction={'column'} display={'flex'} justifyContent={'end'}>
                    <Typography variant="h6" fontWeight={'bold'} mb={3}> {t('details.project-team')} </Typography>
                    <TeamCarousel roles={project.roles} swiper={swiper} handleSlideChange={handleSlideChange} currentSlide={currentSlide} />
                    <Stack direction={'row'} my={3} >
                        <Box component={'div'}>
                            <TeamCarouselButtons swiperRef={swiperSlider} currentSlide={currentSlide} totalSlides={totalSlides} roles={project.roles} handleSlideChange={handleSlideChange} buttonSlide={handleSlideNext} />
                        </Box>
                        <Box component={'div'} width={'100%'} height={'100%'} margin={'auto 0'} pr={5}>
                            <hr />
                        </Box>
                    </Stack>
                    <Typography variant="h6" fontWeight={'bold'} > {t('details.role')} </Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary} style={{ fontSize: 16 }} >
                        {activeRole.role}
                    </Typography>
                    <Box component={'div'} height={'12em'}>
                        <Typography variant="h6" style={{ fontSize: 16 }} mr={6} mt={3} lineHeight={2.5}>
                            {activeRole.description}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </motion.div>
    )
}

export default ProjectTeam;
