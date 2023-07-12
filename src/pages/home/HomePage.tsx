import { Box, Grid, useMediaQuery, Typography, Stack } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";
import AnotherCarousel from "./home-carousel/AnotherCarousel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const mediaQuery = useMediaQuery('(max-width:1050px)');
    const { t } = useTranslation();
    return (
        <Box
            component={"div"}
            height={'calc(100vh - 11.5em)'}
            position={'relative'}
        >
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} pl={mediaQuery ? 3 : 9} pb={6} zIndex={1} pr={mediaQuery ? 3 : 0}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={7} pb={6} hidden={mediaQuery} >
                    <AnotherCarousel />
                    <Stack direction={'row'} gap={1} position={'absolute'} bottom={0} right={'3%'}>
                        <Link to={'/policy-privacy'} style={{ color: "white", fontSize: '.8em' }}>{t('common.policy-privacy')}</Link>
                        <Typography>-</Typography>
                        <Typography color={'secondary'} fontSize={'0.8em'}>{t('home.copyright')}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;