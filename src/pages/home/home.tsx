import { Box, Grid, useMediaQuery } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";
import AnotherCarousel from "./home-carousel/AnotherCarousel";

const Home = () => {
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Box
            height={'calc(100vh - 7em)'}
        >
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} pl={mediaQuery ? 3 : 6} pb={6}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={7} pb={6} hidden={mediaQuery}>
                    <AnotherCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;