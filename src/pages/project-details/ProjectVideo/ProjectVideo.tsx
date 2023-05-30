import { useState } from 'react';
import { Box, Button, } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion } from "framer-motion";
import VideoDialog from '../../../components/VideoDialog';


const ProjectVideo = () => {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }

    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
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
                <VideoDialog open={open} close={handleCloseDialog} videoUrl='twermV6UDmQ' />
            </Box>
        </motion.div>
    )
}

export default ProjectVideo;