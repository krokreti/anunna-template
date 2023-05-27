import { Stack, Box } from '@mui/material'
import CustomButton from '../../../components/CustomButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const TeamCarouselButtons = () => {
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} alignItems={'center'} mr={4} component={"div"}>
            <Stack direction={'row'} spacing={2}>
                <CustomButton onClick={() => { }} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 1, py: 0.1, border: '2px solid' }}>
                    <ArrowLeftIcon color='primary' sx={{ fontSize: '3em' }} />
                </CustomButton>
                <CustomButton onClick={() => { }} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 1, border: '2px solid' }}>
                    <ArrowRightIcon color='primary' sx={{ fontSize: '3em' }} />
                </CustomButton>
            </Stack>
        </Box >
    )
}

export default TeamCarouselButtons;