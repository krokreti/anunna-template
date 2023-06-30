import { Box, Grid, Typography } from '@mui/material';

type WhoWeAreProps = {
    isClicked: boolean,
    handleClose?: boolean,
}

const WhoWeAre: React.FC<WhoWeAreProps> = (props) => {

    return (
        <>
            {props.isClicked && (
                <Box component={'div'} zIndex={10} top={0}>
                    <Grid container height={'100%'}>
                        <Grid item xs={12} md={5} >
                            <Typography color={'white'}>KKKKKKKKKKKKKKKKK</Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default WhoWeAre;