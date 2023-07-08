import { Box, Grid, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

type WhoWeAreProps = {
    isClicked: boolean,
    handleClose?: () => void,
}

const WhoWeAreDialog: React.FC<WhoWeAreProps> = (props) => {

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
                    >
                        <Box component={'div'} width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                            <IconButton onClick={props.handleClose}>
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>

                        <Grid container height={'100%'} >
                            <Grid item xs={12} sm={12} md={4} display={'flex'} flexDirection={'column'} gap={3} p={2}>
                                <Typography
                                    fontWeight={'bold'}
                                    fontSize={'1.5em'}
                                >What is Anunna?
                                </Typography>
                                <Typography color={'white'}>
                                    If Thetryum is the consolidation of the bond between Web3, Education, and Innovation, Anunna is the voice of this bond.
                                </Typography>
                                <Typography>

                                    Instead of thinking of Anunna as a marketing company, try to understand Anunna as the voice of a service ecosystem composed of individuals and entities committed to innovation.
                                </Typography>
                                <Typography>

                                    This voice can take on the tone of the people and organizations that consume these services or that of the service providers.
                                </Typography>
                                <Typography>

                                    Just as a river finds its ideal flow between rocks and starts running to build its own path, at Anunna, innovation will find its ideal path to go from being an idea to becoming reality.
                                </Typography>
                                <Typography>
                                    Through an experienced team and a strong commitment to the core principles of Web3, Anunna presents itself as the framework where the most innovative consumers and the most competent and daring communication service providers meet.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} display={'flex'} flexDirection={'column'} gap={3} p={2}>
                                <Typography color={'white'}>
                                    Principles and Execution
                                </Typography>
                                <Typography>
                                    Anunna is a natively Web3 company, and as such, instead of centralized leadership, we work with explicit principles and transparent execution.
                                </Typography>
                                <Typography>
                                    The principles of Anunna are:
                                </Typography>
                                <Typography>
                                    1. Transparency and competence above all.
                                </Typography>
                                <Typography>
                                    This means that Anunna will operate with all on-chain information and a service dashboard on Dework.
                                </Typography>
                                <Typography>
                                    2. Results first, processes second.
                                </Typography>
                                <Typography>
                                    Although our initial team of service providers is selected through a curriculum analysis, we prioritize results. This implies that each provider, after proving competence, will follow their own processes in accordance with the client.
                                </Typography>
                                <Typography>
                                    3. Free access for consumers and service providers.
                                </Typography>
                                <Typography>
                                    Our marketplace is permissionless. This means that simply connecting your wallet is enough to request a service or apply to become a service provider.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} display={'flex'} flexDirection={'column'} gap={3} p={2}>
                                <Typography
                                    fontWeight={'bold'}
                                    fontSize={'1.5em'}
                                >Who we are?
                                </Typography>
                                <Typography color={'white'}>
                                    We are a company that aims to bring together the best of Education and Communication to accelerate the integration between the Web3 ecosystems of Portuguese-speaking countries.
                                </Typography>
                                <Typography>
                                    Anunna888 is born out of the need for an agent that fosters closer ties between Web3 initiatives and communities in Portuguese-speaking countries.
                                </Typography>
                                <Typography>

                                    Portuguese-speaking countries are spread across 4 continents, and their integration represents an opportunity to expand business opportunities for various agents, including entrepreneurs, investors, and workers.
                                </Typography>
                                <Typography>

                                    We believe that due to its global and permissionless nature, Web3 can bring these countries closer together, allowing them to accelerate the flow of cultural, commercial, and social exchanges.
                                </Typography>
                                <Typography>

                                    Our range of services includes educational products, technological solutions (such as software development), and marketing.
                                </Typography>
                                <Typography>

                                    Our mission is to build bridges through education and communication!
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default WhoWeAreDialog;