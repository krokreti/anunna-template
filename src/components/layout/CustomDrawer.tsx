import { useState } from 'react';
import { Box, Drawer, IconButton, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Groups2Icon from '@mui/icons-material/Groups2';
import ContactsIcon from '@mui/icons-material/Contacts';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PolicyIcon from '@mui/icons-material/Policy';
import LogoPretoAnunna from '../../../public/Logo-branco.svg';
import { useTranslation } from 'react-i18next';

const CustomDrawer = () => {
    const { t } = useTranslation()
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
                <ListItem disablePadding onClick={() => { navigateHandler('/details/who-we-are') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Groups2Icon />
                        </ListItemIcon>
                        <ListItemText primary={t('navbar.our-team')} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('/details/contacts') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('navbar.contact')} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding >
                    <a href="https://www.instagram.com/anunna888/ " target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('navbar.instagram')} />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem disablePadding >
                    <a href="https://twitter.com/anunna888 " target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('navbar.twitter')} />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('/policy-privacy') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PolicyIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('common.policy-privacy')} />
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