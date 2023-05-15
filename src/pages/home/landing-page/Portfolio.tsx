import { Typography, Box, Stack, useTheme, Rating } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from "react";
import CustomButton from "../../../components/CustomButton";

const Portfolio = () => {
    const theme = useTheme();
    const [value, setValue] = useState<number | null>(3);
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'}>
            <Typography variant="h5" fontWeight={'bold'} marginY={2} >Portfólio</Typography>
            <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2}>
                <Typography variant="h1" fontSize={'8em'} >01</Typography>
                <Typography variant="h3" fontWeight={'bold'} sx={{ textWrap: 'balance' }}>Thetryum branding</Typography>
            </Stack>
            <Stack direction={'row'} display={'flex'} alignItems={'center'} >
                <PlayArrowIcon color="primary" />
                <Typography variant="h6" fontWeight={'bold'} >Gerente do projeto:</Typography>
                <Typography variant="h6" ml={1} color={theme.palette.text.secondary} >Branding, ID Visual.</Typography>
            </Stack>
            <Rating name="rating" value={value} sx={{ color: theme.palette.primary.main, mt: 3 }} />
            <Typography variant="h6" fontWeight={'bold'} >Destaques do projeto:</Typography>
            <Typography variant="h6" color={theme.palette.text.secondary} >Behance Fotografia 3D, Movimento 3D. <br /> Pinterest: 100 mil visualizações.</Typography>
            <Stack direction={'row'} gap={2} mt={5}>
                <CustomButton onClick={() => { console.log('saber mais') }} children={'Saber mais'} sx={{ textTransform: 'none' }} />
                <CustomButton onClick={() => { console.log('play') }} children={'Play'} variant="outlined" endIcon={<PlayArrowIcon color="primary" />} color="inherit" sx={{ textTransform: 'none' }} />
            </Stack>
        </Box>)
}

export default Portfolio;