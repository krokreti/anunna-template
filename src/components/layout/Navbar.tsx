import * as React from 'react';
import { AppBar, Button, useTheme, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Navbar = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={'transparent'} sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Stack direction={'row'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={2}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                ROI888
                            </Typography>
                            <Button
                                size='small'
                                variant="outlined"
                                color='inherit'
                                startIcon={<PlayCircleOutlineIcon color='primary' />}
                                sx={{ borderRadius: 20, py: 1.1, px: 1.7, textTransform: 'none' }}

                            >
                                Todos os projetos
                            </Button>
                        </Stack>
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} spacing={2}>
                            <Avatar sx={{ bgcolor: theme.palette.text.primary, mr: 6 }}> D </Avatar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="search"
                                sx={{ mr: 2 }}
                            >
                                <SearchIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;