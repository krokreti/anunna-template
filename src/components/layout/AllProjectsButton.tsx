import { useState } from 'react';
import { Box, Button, ClickAwayListener } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AllProjectsMenu from './AllProjectsMenu';
import { useTranslation } from 'react-i18next';

const AllProjectsButton = () => {
    const { t } = useTranslation();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const closeMenu = () => {
        setOpenMenu(false);
    }

    return (
        <ClickAwayListener onClickAway={closeMenu}>
            <Box component={'div'} position={'relative'} style={{ marginLeft: '5em' }}>
                <Button
                    size='large'
                    variant="outlined"
                    color='inherit'
                    startIcon={<PlayCircleOutlineIcon color='primary' />}
                    sx={{ borderRadius: 26, py: 1.1, px: 1.7, textTransform: 'none', fontSize: '1.2em' }}
                    onClick={() => { setOpenMenu(!openMenu) }}
                >
                    {t('navbar.all-projects')}
                </Button>
                <AllProjectsMenu isOpen={openMenu} />
            </Box>
        </ClickAwayListener>
    )
}

export default AllProjectsButton;