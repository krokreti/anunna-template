import { Box, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ProjectVideo = () => {
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
            >
                <PlayArrowIcon sx={{ color: '#161616', fontSize: 30 }} />
            </Button>
        </Box>
    )
}

export default ProjectVideo;