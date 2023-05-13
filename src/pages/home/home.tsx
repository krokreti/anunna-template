import { Typography, Box, Grid } from "@mui/material";

const Home = () => {
    return (<Box border={'1px solid blue'} height={'calc(100vh - 4em)'}>

        <Grid container border={'1px solid red;'} height={'100%'}>
            <Grid item xs={5} border={'1px solid green;'}>
                <Typography variant="h5" fontWeight={'bold'} >Portfólio</Typography>
            </Grid>
            <Grid item xs={1} border={'1px solid grey;'}>
                <Typography variant="h5">button</Typography>
            </Grid>
            <Grid item xs={6} border={'1px solid pink;'}>
                <Typography variant="h2">Carousel</Typography>
            </Grid>
        </Grid>
    </Box>)
}

export default Home;