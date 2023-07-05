import LanguageIcon from '@mui/icons-material/Language';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Tooltip, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const TranslateComponent = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>

        <Tooltip title={"Language Settings"}>
            <IconButton
                color='inherit'
                onClick={handleClick}
            >
                <LanguageIcon sx={{ fontSize: 25 }} />
            </IconButton>
        </Tooltip>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            color='black'

        >
            <MenuItem onClick={handleClose}>Português</MenuItem>
            <MenuItem onClick={handleClose}>English</MenuItem>
        </Menu>
    </>)
}

export default TranslateComponent;