import { AppBar, Button, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LogoAnunna from '../../../public/Logo.svg';
import CustomInput from '../CustomInput';

const Navbar = () => {

    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return (
        <Box width={'100%'} p={3}>
            <AppBar position="static" color={'transparent'} sx={{ boxShadow: 'none' }}  >
                <Toolbar sx={{ width: '100%' }}>
                    <Stack direction={'row'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={2} >
                            <img src={LogoAnunna} alt="logo" width={50} />
                            {!isSmallScreen && (
                                <Button
                                    size='small'
                                    variant="outlined"
                                    color='inherit'
                                    startIcon={<PlayCircleOutlineIcon color='primary' />}
                                    sx={{ borderRadius: 20, py: 1.1, px: 1.7, textTransform: 'none' }}
                                    style={{ marginLeft: 100 }}
                                >
                                    Todos os projetos
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
                                        sx={{ mr: 2 }}
                                    >
                                        <SearchIcon fontSize='large' />
                                    </IconButton>
                                </>
                            )}
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >

                                <MenuIcon fontSize='large' />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;