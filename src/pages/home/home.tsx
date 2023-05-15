import { Typography, Box, Grid } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";

const Home = () => {
    return (
        <Box height={'calc(100vh - 4em)'}>
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} p={4}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={1} border={'1px solid grey;'}>
                    <Typography variant="h5">button</Typography>
                </Grid>
                <Grid item xs={12} md={6} border={'1px solid pink;'}>
                    <Typography variant="h2">Carousel</Typography>
                </Grid>
            </Grid>
        </Box>)
}

export default Home;