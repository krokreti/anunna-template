import { Typography, Box, Stack, useTheme, Rating } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import thetryumExpansion from '../../../../public/01-ThetryumExpansion.svg';

const Portfolio = () => {
    const theme = useTheme();
    const [value, _setValue] = useState<number | null>(3);
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} >
            <Typography variant="h4" fontWeight={'bold'}  >Portfólio</Typography>
            <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2} width={'100%'} my={4}>
                {/* <h1 style={{ fontSize: '7.6em', fontWeight: 'lighter', fontFamily: 'FriendsUltraLight' }}>01</h1> */}
                {/* <Typography variant="h1" fontFamily={'FriendsUltraLight'} >01</Typography> */}

                {/* <h3 style={{ fontSize: '2.5em' }}>Thetryum Expansion </h3> */}
                <img src={thetryumExpansion} alt="thetryum" width={400} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} mt={1} p={0}>
                <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> Gênero do projeto:</Typography>
                <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >Branding, ID Visual.</Typography>
            </Stack>
            <Rating name="rating" value={value} sx={{ color: theme.palette.primary.main, mt: 3 }} />
            <Typography variant="h6" fontWeight={'bold'} >Destaques do projeto:</Typography>
            <Typography variant="h6" color={theme.palette.text.secondary} >Behance Fotografia 3D, Movimento 3D. <br /> Pinterest: 100 mil visualizações.</Typography>
            <Stack direction={'row'} gap={2} mt={5}>
                <CustomButton onClick={() => { console.log('saber mais') }} children={'Saber mais'} sx={{ textTransform: 'none', px: 5, py: 1.5 }} />
                <CustomButton onClick={() => { console.log('play') }} children={'Play'} variant="outlined" endIcon={<PlayArrowIcon color="primary" />} color="inherit" sx={{ textTransform: 'none', px: 4, border: '3px solid' }} />
            </Stack>
        </Box>
    )
}

export default Portfolio;