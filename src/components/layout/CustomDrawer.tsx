import { useState } from 'react';
import { Box, Drawer, IconButton, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Groups2Icon from '@mui/icons-material/Groups2';
import ContactsIcon from '@mui/icons-material/Contacts';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoPretoAnunna from '../../../public/Logo-branco.svg';

const CustomDrawer = () => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState<boolean>();
    const theme = useTheme();

    const navigateHandler = (route: string) => {
        navigate(route);
    }

    const toggleDrawer = (open: boolean) =>
        (_event: React.MouseEvent) => {
            setOpenDrawer(open);
        };

    const list = () => (
        <Box
            component={'div'}
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Stack direction={'row'} alignItems={'center'} gap={2} p={2} bgcolor={theme.palette.primary.main} >
                <img src={LogoPretoAnunna} alt="logo" width={40} onClick={() => { navigateHandler('/') }} style={{ cursor: 'pointer' }} />
                <Typography fontWeight={'bold'}>Anunna</Typography>
            </Stack>
            <Divider />
            <List>
                <ListItem disablePadding onClick={() => { navigateHandler('/who-we-are') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Groups2Icon />
                        </ListItemIcon>
                        <ListItemText primary={'Who we are?'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('/contacts') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('/') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InstagramIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Instagram'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('/') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Twitter'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{ fontSize: 45 }} />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </>

        </div>
    );

}

export default CustomDrawer;