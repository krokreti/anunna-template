import { AppBar, Button, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LogoAnunna from '../../../public/Logo.svg';
import CustomInput from '../CustomInput';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { projectActions } from '../../store/project-slice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSmallScreen = useMediaQuery('(max-width:1050px)');

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
                                <Button
                                    size='large'
                                    variant="outlined"
                                    color='inherit'
                                    startIcon={<PlayCircleOutlineIcon color='primary' />}
                                    sx={{ borderRadius: 26, py: 1.1, px: 1.7, textTransform: 'none', fontSize: '1.2em' }}
                                    style={{ marginLeft: 100 }}
                                    onClick={navigateToHome}
                                >
                                    All Projects
                                </Button>
                            )}
                        </Stack>
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={2} >
                            {!isSmallScreen && (
                                <>
                                    {/* <Avatar sx={{ bgcolor: theme.palette.text.primary, mr: 6 }}> D </Avatar> */}
                                    <CustomInput />
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="search"
                                        sx={{ mx: 2 }}
                                    >
                                        <SearchIcon sx={{ fontSize: 45 }} />
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
        </Box >
    );
}

export default Navbar;
