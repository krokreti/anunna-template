import { Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from "../../../components/CustomButton";
import thetryumExpansion from '../../../../public/01-ThetryumExpansion.svg';
import PlayIcon from '../../../components/CustomPlayIcon';

const Portfolio = () => {
    const theme = useTheme();
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} >
            <Typography variant="h4" fontWeight={'bold'} mb={8} >Portfólio</Typography>
            <Stack direction={'row'} display={'flex'} alignItems={'center'} gap={2} width={'100%'} mt={4}>
                {/* <h1 style={{ fontSize: '7.6em', fontWeight: 'lighter', fontFamily: 'FriendsUltraLight' }}>01</h1> */}
                {/* <Typography variant="h1" fontFamily={'FriendsUltraLight'} >01</Typography> */}

                {/* <h3 style={{ fontSize: '2.5em' }}>Thetryum Expansion </h3> */}
                <img src={thetryumExpansion} alt="thetryum" width={mediaQuery ? 270 : 500} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} mt={3} p={0}>
                <Typography variant="h6" fontWeight={'bold'} display={'flex'} alignItems={'center'}> <PlayArrowIcon color="primary" /> Gênero do projeto:</Typography>
                <Typography variant="h6" ml={{ xs: 0, sm: 1 }} color={theme.palette.text.secondary} >Branding, ID Visual.</Typography>
            </Stack>
            <Stack marginY={6}>
                <Typography fontWeight={'bold'} >Destaques do projeto:</Typography>
                <Typography color={theme.palette.text.secondary} >Behance Fotografia 3D, Movimento 3D.</Typography>
            </Stack>
            <Stack direction={'row'} gap={2} mt={5}>
                <CustomButton onClick={() => { console.log('saber mais') }} children={'Saber mais'} sx={{
                    textTransform: 'none',
                    px: 6, py: 1.5,
                    fontSize: '1.2em',
                    borderRadius: '11px'
                }} />
                <CustomButton onClick={() => { console.log('play') }}
                    children={'Play'}
                    variant="outlined"
                    endIcon={<PlayIcon />}
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
    )
}

export default Portfolio;