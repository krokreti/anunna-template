import BackButton from "../../components/BackButton";
import MainCard from "../../components/MainCard";
import { Grid, Typography } from '@mui/material';

const Contact = () => {
    return (<MainCard>
        <BackButton />
        <Grid container maxWidth={'800px'} >
            <Grid item xs={12} sm={12} md={6} p={2}>
                <Typography>
                    Jill Wilkie / New Business Manager
                </Typography>
                <Typography >

                    jill@tendril.studio
                </Typography>
                <Typography>

                    c 514.241.0664
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={2}>
                <Typography>

                    Mary Anne Ledesma / Executive Producer
                </Typography>
                <Typography>

                    maryanne@tendril.studio
                </Typography>
                <Typography>

                    c 416.802.0912
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={2}>
                <Typography>

                    Ivelle Jargalyn / Executive Producer
                </Typography>
                <Typography>

                    ivelle@tendril.studio
                </Typography>
                <Typography>

                    c 647.581.7433
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} p={2}  >
                <Typography>
                    Ramona Gornik-Lee / Executive Producer
                </Typography>
                <Typography>
                    ramona@tendril.studio
                </Typography>
                <Typography>
                    c 416.809.0732
                </Typography>
            </Grid>
        </Grid>
    </MainCard>)
}

export default Contact;