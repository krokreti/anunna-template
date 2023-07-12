import { useEffect, useState } from "react";
import CookieIcon from '@mui/icons-material/Cookie';
import CustomButton from "./CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Card, Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TermsOfUseDilog = () => {
    const { t } = useTranslation();
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
                                <Typography fontWeight={'bold'}> {t('cookies.title')}</Typography>
                            </Stack>
                            <IconButton onClick={handleClose}>
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Stack>
                        <Stack p={1}>
                            <Typography fontSize={'12px'}>
                                {t('cookies.website-text')}
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
                                {t('common.policy-privacy')}
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
                                    }}>{t('common.disagree')}</CustomButton>
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
                                >{t('common.agree')}</CustomButton>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            )}
        </>
    )
}

export default TermsOfUseDilog;