import { Box, Grid, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

type ContactsProps = {
    isClicked: boolean,
    handleClose?: () => void,
}


const Contacts: React.FC<ContactsProps> = (props) => {
    return (
        <AnimatePresence >
            {props.isClicked && (
                <motion.div
                    initial={{ opacity: 0, y: -250 }}
                    animate={{ opacity: 1, y: -125 }}
                    exit={{ opacity: 0, y: -250, transition: { duration: 1 } }}
                    transition={{ duration: 1 }}
                    style={{ width: '100vw', left: 0, position: 'absolute', zIndex: 15 }}
                >
                    <Box
                        zIndex={10}
                        padding={8}
                        width={'100%'}
                        component={'div'}
                        bgcolor={'#5A33DB'}
                        borderRadius={'0 0 32px 32px '}
                        maxHeight={'90vh'}
                        overflow={'auto'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box component={'div'} width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                            <IconButton onClick={props.handleClose}>
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>

                        <Typography fontWeight={'bold'} textAlign={'center'}>
                            Have a potential project or collaboration that you’d like
                            to discuss, reach out to newbiz@tendril.studio.
                        </Typography>
                        <Grid container mt={10} maxWidth={'800px'} >
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
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Contacts;