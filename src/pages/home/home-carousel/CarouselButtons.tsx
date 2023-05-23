import { Stack, Box } from '@mui/material'
import CustomButton from '../../../components/CustomButton';
import CarouselProps from '../../../models/CarouselProps';
import CustomPlayIcon from '../../../components/CustomPlayIcon';
import CustomBackIcon from '../../../components/CustomBackIcon';

const CarouselButtons: React.FC<CarouselProps> = ({ next, prev }) => {
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} alignItems={'center'} mr={4}>
            <Stack direction={'row'} spacing={2}>
                <CustomButton onClick={prev} variant='outlined' color='inherit' sx={{ borderRadius: 20, py: 2, pl: 1.5, pr: 1.5, border: '3px solid' }}>
                    <CustomBackIcon />
                </CustomButton>
                <CustomButton onClick={next} variant='outlined' color='inherit' sx={{ borderRadius: 20, py: 2, pl: 3, pr: 1.5, border: '3px solid' }}>
                    <CustomPlayIcon />
                </CustomButton>
            </Stack>
        </Box >)
}

export default CarouselButtons;