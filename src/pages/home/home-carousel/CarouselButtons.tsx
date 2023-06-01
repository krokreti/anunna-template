import { Stack, Box, useMediaQuery } from '@mui/material'
import CustomButton from '../../../components/CustomButton';
import CarouselProps from '../../../models/CarouselProps';
// import CustomPlayIcon from '../../../components/CustomPlayIcon';
// import CustomBackIcon from '../../../components/CustomBackIcon';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CarouselButtons: React.FC<CarouselProps> = ({ next, prev, currentProject, totalProjects }) => {
    const mediaQuery = useMediaQuery('(min-width:1900px)');
    return (
        <Box display={'flex'} justifyContent={'end'} height={'100%'} flexDirection={'column'} alignItems={'center'} mr={mediaQuery ? 15 : 7} component={"div"}>
            <Stack direction={'row'} spacing={2}>
                <CustomButton
                    onClick={prev}
                    variant='outlined'
                    color='inherit'
                    sx={{ borderRadius: 20, px: 2, py: 2, border: '3px solid' }}
                    disabled={currentProject == 0}
                >
                    <ArrowLeftIcon color='primary' sx={{ fontSize: '2.5em' }} />
                </CustomButton>
                <CustomButton onClick={next} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 2, border: '3px solid' }}
                    disabled={currentProject == (totalProjects - 1)}
                >
                    <ArrowRightIcon color='primary' sx={{ fontSize: '2.5em' }} />
                </CustomButton>
            </Stack>
        </Box >)
}

export default CarouselButtons;