import { useState } from 'react';
import { Box, Stack, Typography, useTheme } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from "../../../components/CustomButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion";
import PdfDialog from '../../../components/PdfDialog';

const Description = () => {
    const theme = useTheme();
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);

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
            <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} component={'div'} >
                <Typography variant="h3" fontWeight={'bold'}> Thetryum Expansion </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} mt={2} p={0}>
                    <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> Gênero do projeto:</Typography>
                    <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >Branding, ID Visual.</Typography>
                </Stack>
                <Stack marginY={4}>
                    <Typography variant="h4" fontWeight={'bold'} display={'flex'} alignItems={'center'}> Descrição:</Typography>
                    <Typography variant="h6" display={'flex'} alignItems={'center'} style={{ fontSize: 16 }} >
                        A thetryum inova os processos do mundo real,
                        através de contratos inteligentes dentro da blockchain.
                        "Tokenizamos" a sua empresa ou ativos e os preparamos
                        para esse mercado que já é uma realidade.</Typography>
                </Stack>
                <Stack direction={'row'} gap={2} mt={5}>
                    <CustomButton onClick={handleOpenDialog}
                        children={'Ver Projeto'}
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
                    <CustomButton
                        onClick={onFavoriteClick}
                        startIcon={favorite ? <FavoriteBorderIcon color='primary' /> : <FavoriteIcon color='primary' />}
                        children={'Gostei'}
                        color='inherit'
                        variant='text'
                        sx={{
                            textTransform: 'none',
                            px: 4,
                            fontSize: '1.2em',
                        }}
                    />
                </Stack>
            </Box>
            <PdfDialog open={open} close={handleCloseDialog} />
        </motion.div>
    )
}

export default Description;