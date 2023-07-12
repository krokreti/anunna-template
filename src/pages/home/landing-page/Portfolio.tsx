import { useState } from 'react';
import { Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoDialog from "../../../components/VideoDialog";
import { currentProject } from '../../../store/project-slice';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const theme = useTheme();
    const mediaQuery = useMediaQuery('(max-width:900px)');
    const [open, setOpen] = useState(false);
    const project = useAppSelector(currentProject);

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }

    const navigateToProject = () => {
        navigate(`project-details/${project.id}`);
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} component={"div"} >
                <Typography variant="h4" fontWeight={'bold'} mb={8} hidden>Portfolio</Typography>

                <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2} width={'100%'} mt={4}>
                    <img src={project.title} alt="thetryum" width={mediaQuery ? 270 : 500} />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} mt={3} p={0}>
                    <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> {t('home.project-genre')}</Typography>
                    <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >{project.gender}</Typography>
                </Stack>
                <Stack marginY={6}>
                    <Typography fontWeight={'bold'} >{t('home.project-highlights')}</Typography>
                    <Typography color={theme.palette.text.secondary} >{project.highlights}</Typography>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} mt={5}>
                    <CustomButton onClick={navigateToProject} children={t('home.view-more')} sx={{
                        textTransform: 'none',
                        px: 6, py: 1.5,
                        fontSize: '1.2em',
                        borderRadius: '11px'
                    }} />
                    <CustomButton onClick={handleOpenDialog}
                        children={'Play'}
                        variant="outlined"
                        endIcon={<PlayArrowIcon color="primary" />}
                        color="inherit"
                        sx={{
                            textTransform: 'none',
                            px: 4,
                            border: '3px solid grey',
                            fontSize: '1.2em',
                            borderRadius: '11px',
                        }} />
                </Stack>
            </Box>
            <VideoDialog close={handleCloseDialog} open={open} videoUrl='twermV6UDmQ' />
        </motion.div>
    )
}

export default Portfolio;
