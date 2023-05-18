import { Box, Grid } from "@mui/material";
import Portfolio from "./landing-page/Portfolio";
import AnotherCarousel from "./home-carousel/AnotherCarousel";
import { useAppSelector } from "../../hooks/redux-hooks";
import { currentProjectStatus } from "../../store/project-slice";

const Home = () => {
    const background = useAppSelector(currentProjectStatus);
    console.log(background)
    return (
        <Box
            height={'calc(100vh - 4em)'}
            sx={{
                backgroundImage: `url(${background.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
            }}
        >
            {/* <button style={{ background: 'white' }}>TESTE</button> */}
            <Grid container height={'100%'}>
                <Grid item xs={12} md={5} p={4}>
                    <Portfolio />
                </Grid>
                <Grid item xs={12} md={7} pb={4} >
                    <AnotherCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;