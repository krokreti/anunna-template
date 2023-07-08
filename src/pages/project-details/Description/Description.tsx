import { useState } from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from "../../../components/CustomButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PdfDialog from '../../../components/PdfDialog';
import PortfolioType from '../../../models/PortfolioProject';

const Description: React.FC<{ project: PortfolioType }> = ({ project }) => {
    const theme = useTheme();
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    const mediaQuery = useMediaQuery('(max-width:900px)');

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }

    const onFavoriteClick = () => {
        setFavorite(!favorite);
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} component={"div"} >
                {/* <Typography variant="h3" fontWeight={'bold'}> Thetryum Expansion </Typography> */}
                <img src={project.title} alt="thetryum" width={mediaQuery ? 270 : 500} />
                <Stack direction={{ xs: 'column', sm: 'row' }} mt={2} p={0}>
                    <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> Project genre:</Typography>
                    <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >{project.gender}</Typography>
                </Stack>
                <Stack marginY={4}>
                    <Typography variant="h4" fontWeight={'bold'} display={'flex'} alignItems={'center'} lineHeight={2.5}> Description:</Typography>
                    {project.isActive && (
                        <Typography variant="h6" display={'flex'} alignItems={'center'} style={{ fontSize: 16 }} lineHeight={2.5}>{project.description}</Typography>
                    )}
                </Stack>
                <Stack direction={'row'} gap={2} mt={5}>
                    <CustomButton onClick={handleOpenDialog}
                        children={'See Project'}
                        variant="outlined"
                        endIcon={<PlayArrowIcon color="primary" />}
                        color="inherit"
                        disabled={!project.isActive}
                        sx={{
                            textTransform: 'none',
                            px: 4,
                            border: '3px solid grey',
                            fontSize: '1.2em',
                            borderRadius: '11px',
                        }} />
                    <CustomButton
                        onClick={onFavoriteClick}
                        startIcon={favorite ? <FavoriteBorderIcon color='primary' /> : <FavoriteIcon color='primary' />}
                        children={'Like'}
                        color='inherit'
                        variant='text'
                        disabled={!project.isActive}
                        sx={{
                            textTransform: 'none',
                            px: 4,
                            fontSize: '1.2em',
                        }}
                    />
                </Stack>
            </Box>
            <PdfDialog open={open} close={handleCloseDialog} id={project.id} />
        </motion.div>
    )
}

export default Description;