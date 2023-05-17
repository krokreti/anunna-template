import { Stack, Box } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CustomButton from '../../../components/CustomButton';
import CarouselProps from '../../../models/CarouselProps';

const CarouselButtons: React.FC<CarouselProps> = ({ next, prev }) => {
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} alignItems={'center'} mr={4}>
            <Stack direction={'row'} spacing={2}>
                <CustomButton onClick={prev} variant='outlined' color='inherit' sx={{ borderRadius: 20, py: 1.5, px: 1.7 }}>
                    <ArrowLeftIcon color='primary' fontSize={'large'} />
                </CustomButton>
                <CustomButton onClick={next} variant='outlined' color='inherit' sx={{ borderRadius: 10, py: 1.5, px: 1.7 }}>
                    <ArrowRightIcon color='primary' fontSize={'large'} />
                </CustomButton>
            </Stack>
        </Box>)
}

export default CarouselButtons;