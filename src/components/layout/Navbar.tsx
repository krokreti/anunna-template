import { AppBar, Button, Stack, useMediaQuery, Box, Toolbar, IconButton } from '@mui/material';
import LogoAnunna from '../../../public/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { projectActions } from '../../store/project-slice';
import AllProjectsButton from './AllProjectsButton';
import TranslateComponent from './TranslateComponent';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomDrawer from './CustomDrawer';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSmallScreen = useMediaQuery('(max-width:1350px)');
    const navigateToHome = () => {
        dispatch(projectActions.changeProject(0));
        navigate('/');
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
                                    <Button variant='text' color='inherit' sx={{ textTransform: 'none', fontSize: '1.2em', fontWeight: 600 }} onClick={() => { navigate('/who-we-are') }}>Who we are?</Button>
                                    <Button variant='text' color='inherit' sx={{ textTransform: 'none', fontSize: '1.2em', fontWeight: 600 }} onClick={() => { navigate('/contacts') }}>Contact</Button>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                    >
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                    >
                                        <InstagramIcon />
                                    </IconButton>
                                </>
                            )}
                            {isSmallScreen && (
                                <>
                                    {/* <CustomInput />
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="search"
                                        sx={{ mx: 2 }}
                                    >
                                        <SearchIcon sx={{ fontSize: 45, ml: 8 }} />
                                    </IconButton> */}
                                    <CustomDrawer />
                                </>
                            )}
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;
