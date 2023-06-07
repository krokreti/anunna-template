import { Box, Typography, Stack, useTheme } from "@mui/material";
import TeamCarousel from "./TeamCarousel";
import TeamCarouselButtons from "./TeamCarouselButtons";
import { motion } from "framer-motion";
import PortfolioType from "../../../models/PortfolioProject";
import { useRef, useState } from "react";
import Role from "../../../models/Role";

const ProjectTeam: React.FC<{ project: PortfolioType }> = ({ project }) => {
    const theme = useTheme();
    const swiperSlider = useRef<any>();
    const [activeRole, setActiveRole] = useState<Role>(project.roles[0]);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const totalSlides = project.roles.length;

    const swiper = (swiperRef: any) => {
        swiperSlider.current = swiperRef.current;
    }

    const handleSlideChange = (role: Role, currentSlide: number) => {
        setActiveRole(role);
        setCurrentSlide(currentSlide);
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box component={'div'} >
                <Stack direction={'column'} >
                    <Typography variant="h6" fontWeight={'bold'} mb={3}> Project Team: </Typography>
                    <TeamCarousel roles={project.roles} swiper={swiper} handleSlideChange={handleSlideChange} />
                    <Stack direction={'row'} my={3} >
                        <Box component={'div'}>
                            <TeamCarouselButtons swiperRef={swiperSlider} currentSlide={currentSlide} totalSlides={totalSlides} />
                        </Box>
                        <Box component={'div'} width={'100%'} height={'100%'} margin={'auto 0'} pr={5}>
                            <hr />
                        </Box>
                    </Stack>
                    <Typography variant="h6" fontWeight={'bold'}> Role: </Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary} style={{ fontSize: 16 }}>
                        {activeRole.role}
                    </Typography>
                    <Typography variant="h6" style={{ fontSize: 16 }} mr={6} mt={3}>
                        {activeRole.description}
                    </Typography>
                </Stack>
            </Box>
        </motion.div>
    )
}

export default ProjectTeam;
