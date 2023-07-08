import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return (
        <IconButton color="primary" onClick={goBack}>
            <ArrowBackIosNewIcon />
        </IconButton>
    )
}

export default BackButton;