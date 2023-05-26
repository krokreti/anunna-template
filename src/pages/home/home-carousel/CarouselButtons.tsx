import { Stack, Box } from '@mui/material'
import CustomButton from '../../../components/CustomButton';
import CarouselProps from '../../../models/CarouselProps';
// import CustomPlayIcon from '../../../components/CustomPlayIcon';
// import CustomBackIcon from '../../../components/CustomBackIcon';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CarouselButtons: React.FC<CarouselProps> = ({ next, prev }) => {
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} alignItems={'center'} mr={4} component={"div"}>
            <Stack direction={'row'} spacing={2}>
                <CustomButton onClick={prev} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 2, py: 2, border: '3px solid' }}>
                    <ArrowLeftIcon color='primary' sx={{ fontSize: '2.5em' }} />
                </CustomButton>
                <CustomButton onClick={next} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 2, border: '3px solid' }}>
                    <ArrowRightIcon color='primary' sx={{ fontSize: '2.5em' }} />
                </CustomButton>
            </Stack>
        </Box >)
}

export default CarouselButtons;