import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BackButton = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Tooltip title={t('common.back')}>
            <IconButton color="primary" onClick={goBack}>
                <ArrowBackIosNewIcon />
            </IconButton>
        </Tooltip>
    )
}

export default BackButton;