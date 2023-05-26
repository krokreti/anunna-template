import { Stack, Box } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CustomButton from '../../../components/CustomButton';
import CarouselProps from '../../../models/CarouselProps';

const CarouselMobileButtons: React.FC<CarouselProps> = ({ next, prev }) => {
    return (<Box
        display={'flex'}
        justifyContent={'center'}
        height={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        mr={4}
        position={'absolute'}
        width={'100%'}
        zIndex={10}
        component={"div"}
    >
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} width={'100%'} >
            <CustomButton onClick={prev} variant='text' color='inherit' >
                <ArrowLeftIcon color='primary' fontSize='large' />
            </CustomButton>
            <CustomButton onClick={next} variant='text' color='inherit' >
                <ArrowRightIcon color='primary' fontSize='large' />
            </CustomButton>
        </Stack>
    </Box>)
}

export default CarouselMobileButtons;