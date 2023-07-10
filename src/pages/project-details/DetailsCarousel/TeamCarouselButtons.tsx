import { Stack, Box } from '@mui/material'
import CustomButton from '../../../components/CustomButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Role from "../../../models/Role";

const TeamCarouselButtons: React.FC<{
    swiperRef: any,
    currentSlide: number,
    totalSlides: number,
    roles: Role[],
    handleSlideChange: (role: Role, currentIndex: number,) => void,
    buttonSlide: (role: Role, currentIndex: number, next: boolean) => void,
}> = (props) => {
    var index = props.currentSlide;

    const nextSlide = () => {
        // props.swiperRef.current.slideNext();
        if (props.currentSlide != (props.totalSlides - 1)) {
            index = index + 1;
            const activeRole = props.roles[index];
            props.buttonSlide(activeRole, index, true);
        }
    }

    const prevSlide = () => {
        // props.swiperRef.current.slidePrev();
        if (props.currentSlide != 0) {
            index = index - 1;
            const activeRole = props.roles[index];
            props.buttonSlide(activeRole, index, false);
        }
    }

    return (
        <Box display={'flex'} justifyContent={'end'} height={'4.5em'} flexDirection={'column'} alignItems={'center'} mr={4} component={"div"} >
            <Stack direction={'row'} spacing={2}>
                <CustomButton onClick={prevSlide} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 1, py: 0.1, border: '2px solid' }} disabled={props.currentSlide == 0}>
                    <ArrowLeftIcon color='primary' sx={{ fontSize: '3em' }} />
                </CustomButton>
                <CustomButton onClick={nextSlide} variant='outlined' color='inherit' sx={{ borderRadius: 20, px: 1, border: '2px solid' }} disabled={props.currentSlide == (props.totalSlides - 1)}>
                    <ArrowRightIcon color='primary' sx={{ fontSize: '3em' }} />
                </CustomButton>
            </Stack>
        </Box >
    )
}

export default TeamCarouselButtons;