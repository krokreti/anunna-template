import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import YoutubeVideo from './YoutubeVideo';
import { Dialog, DialogActions, DialogContent } from "@mui/material";

const VideoDialog: React.FC<{ open: boolean, close: () => void, videoUrl: string }> = ({ open, close, videoUrl }) => {
    const { t } = useTranslation();
    return (
        <Dialog
            open={open}
            PaperProps={{ style: { backgroundColor: '#161616' } }}
            fullWidth
            maxWidth={'lg'}
        >
            <DialogContent>
                <YoutubeVideo id={videoUrl}></YoutubeVideo>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={close} variant='text'>{t('common.close')}</CustomButton>
            </DialogActions>
        </Dialog>
    )
}

export default VideoDialog;