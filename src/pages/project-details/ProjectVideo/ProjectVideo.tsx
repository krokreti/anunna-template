import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from '../../../components/CustomButton';
import YoutubeVideo from '../../../components/YoutubeVideo';

const VideoDialog: React.FC<{ open: boolean, close: () => void }> = ({ open, close }) => {

    return (
        <Dialog
            open={open}
            PaperProps={{ style: { backgroundColor: '#161616' } }}
            fullWidth
            maxWidth={'lg'}
        >
            <DialogContent>
                <YoutubeVideo id={'twermV6UDmQ'}></YoutubeVideo>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={close} variant='text'>Fechar</CustomButton>
            </DialogActions>
        </Dialog>
    )
}

const ProjectVideo = () => {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }

    return (
        <Box
            component={'div'}
            height={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Button
                variant="contained"
                color="inherit"
                sx={{
                    border: '10px solid grey',
                    borderRadius: 40,
                    p: 1
                }}
                onClick={handleOpenDialog}
            >
                <PlayArrowIcon sx={{ color: '#161616', fontSize: 30 }} />
            </Button>
            <VideoDialog open={open} close={handleCloseDialog} />
        </Box>
    )
}

export default ProjectVideo;