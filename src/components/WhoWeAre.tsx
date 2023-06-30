import { Box, Grid, Typography } from '@mui/material';
import { motion } from "framer-motion";

type WhoWeAreProps = {
    isClicked: boolean,
    handleClose?: boolean,
}

const WhoWeAre: React.FC<WhoWeAreProps> = (props) => {

    return (
        <>
            {props.isClicked && (
                <motion.div
                    initial={{ opacity: 0, top: -100 }}
                    animate={{ opacity: 1, top: 0 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1 }}
                >
                    <Box component={'div'} zIndex={10} top={0}>
                        <Grid container height={'100%'}>
                            <Grid item xs={12} md={5} >
                                <Typography color={'white'}>KKKKKKKKKKKKKKKKK</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>
            )}
        </>
    )
}

export default WhoWeAre;