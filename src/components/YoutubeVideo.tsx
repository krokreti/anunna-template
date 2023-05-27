import { Box } from '@mui/material';

const YoutubeVideo: React.FC<{ id: string }> = (props) => {
    return (
        <Box component={'div'} width={'100%'} height={500} >
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${props.id}`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Box>
    )
}

export default YoutubeVideo;