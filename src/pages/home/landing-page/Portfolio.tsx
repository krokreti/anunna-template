import { Typography, Box, Stack, useTheme, Rating } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from "react";
import CustomButton from "../../../components/CustomButton";

const Portfolio = () => {
    const theme = useTheme();
    const [value, _setValue] = useState<number | null>(3);
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} >
            <Typography variant="h4" fontWeight={'bold'} marginY={3} >Portfólio</Typography>
            <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2} width={'100%'}>
                <h1 style={{ fontSize: '7em', fontWeight: 'lighter' }}>01</h1>
                <h3 style={{ fontSize: '2.5em' }}>Thetryum branding </h3>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} mt={1} p={0}>
                <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> Gênero do projeto:</Typography>
                <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >Branding, ID Visual.</Typography>
            </Stack>
            <Rating name="rating" value={value} sx={{ color: theme.palette.primary.main, mt: 3 }} />
            <Typography variant="h6" fontWeight={'bold'} >Destaques do projeto:</Typography>
            <Typography variant="h6" color={theme.palette.text.secondary} >Behance Fotografia 3D, Movimento 3D. <br /> Pinterest: 100 mil visualizações.</Typography>
            <Stack direction={'row'} gap={2} mt={5}>
                <CustomButton onClick={() => { console.log('saber mais') }} children={'Saber mais'} sx={{ textTransform: 'none' }} />
                <CustomButton onClick={() => { console.log('play') }} children={'Play'} variant="outlined" endIcon={<PlayArrowIcon color="primary" />} color="inherit" sx={{ textTransform: 'none' }} />
            </Stack>
        </Box>
    )
}

export default Portfolio;