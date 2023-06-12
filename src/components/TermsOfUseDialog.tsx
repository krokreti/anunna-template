import { useEffect, useState } from "react";
import CookieIcon from '@mui/icons-material/Cookie';
import CustomButton from "./CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Card, Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const TermsOfUseDilog = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        let checkTermsOfUse = localStorage.getItem('privacy')
        if (checkTermsOfUse != 'true') {
            setOpenDialog(true);
        }
    }, []);

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleAgree = () => {
        localStorage.setItem('privacy', 'true');
        setOpenDialog(false);
    }

    return (
        // <Dialog
        //     open={openDialog}
        //     PaperProps={{ style: { backgroundColor: '#5A33DB' } }}
        //     TransitionComponent={Fade}
        //     transitionDuration={{ enter: 1000, exit: 1000 }}
        //     fullWidth
        //     hideBackdrop
        //     maxWidth={'sm'}
        //     sx={{ position: "absolute", top: 0 }}
        // >
        //     <DialogTitle id="scroll-dialog-title" display={"flex"} alignItems={"center"} gap={2}> <CookieIcon /> This website uses cookies.</DialogTitle>
        //     <DialogContent>
        //         <DialogContentText color={'white'} >
        //             Our website uses cookies and other similar technologies to improve
        //             functionality and user experience. You can adjust your browser settings to opt out.cookies,
        //             but this may affect your browsing experience on the site.
        //         </DialogContentText>
        //     </DialogContent>
        //     <DialogActions >
        //         <Stack
        //             direction={{ sx: 'column', md: 'row' }}
        //             display={"flex"}
        //             justifyContent={'space-between'}
        //             width={'100%'}
        //             mx={2}
        //             mb={1}
        //         >
        //             <Link
        //                 to={'/'}
        //                 style={{ color: 'white', fontWeight: 'bold', }}
        //             >
        //                 Privacy Policy
        //             </Link>
        //             <Stack direction={{ sx: 'column', md: 'row' }} gap={2}>
        //                 <CustomButton
        //                     onClick={handleClose}
        //                     variant="outlined"
        //                     color="inherit"
        //                     sx={{
        //                         textTransform: 'none',
        //                         px: '2em',
        //                     }}>Disagree</CustomButton>
        //                 <CustomButton onClick={() => { }}
        //                     color="inherit"

        //                     sx={{
        //                         textTransform: 'none',
        //                         color: '#5A33DB',
        //                         px: '2.5em',
        //                         backgroundColor: 'white'
        //                     }}
        //                 >Agree</CustomButton>
        //             </Stack>
        //         </Stack>
        //     </DialogActions>
        // </Dialog>
        <>
            {openDialog && (
                <Box
                    display={'flex'}
                    bottom={0}
                    justifyContent={'center'}
                    component={'div'}
                    width={'100%'}>
                    <Card
                        sx={{
                            margin: isSmallScreen ? 2 : 6,
                            p: 1,
                            zIndex: 2,
                            backgroundColor: '#5A33DB',
                            width: '90%',
                            maxWidth: '500px',
                            position: "fixed",
                            bottom: 0,
                        }}>
                        <Stack direction={'row'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={1}>
                            <Stack direction={'row'} gap={2} >
                                <CookieIcon />
                                <Typography fontWeight={'bold'}> This website uses cookies.</Typography>
                            </Stack>
                            <IconButton onClick={handleClose}>
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Stack>
                        <Stack p={1}>
                            <Typography fontSize={'12px'}>
                                Our website uses cookies and other similar technologies to improve
                                functionality and user experience. You can adjust your browser settings to opt out.cookies,
                                but this may affect your browsing experience on the site.
                            </Typography>
                        </Stack>
                        <Stack
                            direction={{ sx: 'column', sm: 'row' }}
                            gap={2}
                            p={1}
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={isSmallScreen ? 'start' : 'end'}
                        >
                            <Link
                                to={'/policy-privacy'}
                                style={{ color: 'white', fontWeight: 'bold', }}
                            >
                                Privacy Policy
                            </Link>
                            <Stack
                                direction={'row'}
                                gap={2}
                                display={"flex"}
                                justifyContent={'center'}
                                width={isSmallScreen ? '100%' : 'fit-content'}
                            >
                                <CustomButton
                                    onClick={handleClose}
                                    variant="outlined"
                                    color="inherit"
                                    sx={{
                                        textTransform: 'none',
                                        px: '2em',
                                        width: '100%'
                                    }}>Disagree</CustomButton>
                                <CustomButton
                                    onClick={handleAgree}
                                    color="inherit"
                                    sx={{
                                        textTransform: 'none',
                                        color: '#5A33DB',
                                        px: '2.5em',
                                        backgroundColor: 'white',
                                        width: '100%'
                                    }}
                                >Agree</CustomButton>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            )}
        </>
    )
}

export default TermsOfUseDilog;