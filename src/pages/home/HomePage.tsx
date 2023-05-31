import { Box, Grid, useMediaQuery } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";
import AnotherCarousel from "./home-carousel/AnotherCarousel";

const HomePage = () => {
    const mediaQuery = useMediaQuery('(max-width:1050px)');
    return (
        <Box
            component={"div"}
            height={'calc(100vh - 11.5em)'}
        >
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} pl={mediaQuery ? 3 : 9} pb={6} zIndex={1} pr={mediaQuery ? 3 : 0}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={7} pb={6} hidden={mediaQuery}>
                    <AnotherCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;