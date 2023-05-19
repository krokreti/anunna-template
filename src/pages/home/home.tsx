import { Box, Grid } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";
import AnotherCarousel from "./home-carousel/AnotherCarousel";

const Home = () => {
    return (
        <Box
            height={'calc(100vh - 7em)'}
        >
            {/* <button style={{ background: 'white' }}>TESTE</button> */}
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} pl={6} pb={6}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={7} pb={6} >
                    <AnotherCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;