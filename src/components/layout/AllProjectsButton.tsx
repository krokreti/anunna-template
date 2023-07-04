import { useState } from 'react';
import { Box, Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AllProjectsMenu from './AllProjectsMenu';

const AllProjectsButton = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <Box component={'div'} position={'relative'} style={{ marginLeft: '5em' }}>
            <Button
                size='large'
                variant="outlined"
                color='inherit'
                startIcon={<PlayCircleOutlineIcon color='primary' />}
                sx={{ borderRadius: 26, py: 1.1, px: 1.7, textTransform: 'none', fontSize: '1.2em' }}
                onClick={() => { setOpenMenu(!openMenu) }}
            >
                All Projects
            </Button>
            <AllProjectsMenu isOpen={openMenu} />
        </Box>
    )
}

export default AllProjectsButton;