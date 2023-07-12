import LanguageIcon from '@mui/icons-material/Language';
import { Tooltip, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TranslateComponent = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setAnchorEl(null);
    }

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
            <MenuItem onClick={() => { handleChangeLanguage('en') }}>English</MenuItem>
            <MenuItem onClick={() => { handleChangeLanguage('pt') }}>Português</MenuItem>
        </Menu>
    </>)
}

export default TranslateComponent;