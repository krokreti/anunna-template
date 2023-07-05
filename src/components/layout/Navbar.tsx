import { AppBar, Button, Stack, useMediaQuery, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoAnunna from '../../../public/Logo.svg';
import CustomInput from '../CustomInput';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { projectActions } from '../../store/project-slice';
import WhoWeAre from '../WhoWeAre';
import Contacts from '../Contacts';
import { useState } from 'react';
import AllProjectsButton from './AllProjectsButton';
import TranslateComponent from './TranslateComponent';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSmallScreen = useMediaQuery('(max-width:1350px)');
    const [openWhoWeAre, setOpenWhoWeAre] = useState<boolean>(false);
    const [openContacts, setOpenContacts] = useState<boolean>(false);
    const navigateToHome = () => {
        dispatch(projectActions.changeProject(0));
        navigate('/');
    }

    const openWhoWeAreHandler = () => {
        setOpenWhoWeAre(!openWhoWeAre);
    }

    const openContactsHandler = () => {
        setOpenContacts(!openContacts);
    }

    return (
        <Box width={'100%'} p={isSmallScreen ? 2 : 7} mb={isSmallScreen ? 3 : 0} component={"div"}>
            <AppBar position="static" color={'transparent'} sx={{ boxShadow: 'none' }}  >
                <Toolbar sx={{ width: '100%' }}>
                    <Stack direction={'row'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={2} >
                            <img src={LogoAnunna} alt="logo" width={65} onClick={navigateToHome} style={{ cursor: 'pointer' }} />
                            {!isSmallScreen && (
                                <AllProjectsButton />
                            )}
                        </Stack>
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={3}>
                            {!isSmallScreen && (
                                <>
                                    <TranslateComponent />
                                    <Button variant='text' color='inherit' sx={{ textTransform: 'none', fontSize: '1.2em', fontWeight: 600 }}>Blog</Button>
                                    <Button variant='text' color='inherit' sx={{ textTransform: 'none', fontSize: '1.2em', fontWeight: 600 }} onClick={openWhoWeAreHandler}>Who we are?</Button>
                                    <Button variant='text' color='inherit' sx={{ textTransform: 'none', fontSize: '1.2em', fontWeight: 600 }} onClick={openContactsHandler}>Contact</Button>
                                    {/* <Avatar sx={{ bgcolor: theme.palette.text.primary, mr: 6 }}> D </Avatar> */}
                                    <CustomInput />
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="search"
                                        sx={{ mx: 2 }}
                                    >
                                        <SearchIcon sx={{ fontSize: 45, ml: 8 }} />
                                    </IconButton>
                                </>
                            )}
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >

                                <MenuIcon sx={{ fontSize: 45 }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <WhoWeAre isClicked={openWhoWeAre} handleClose={openWhoWeAreHandler} />
            <Contacts isClicked={openContacts} handleClose={openContactsHandler} />
        </Box >
    );
}

export default Navbar;
