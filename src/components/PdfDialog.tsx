import { Dialog, DialogActions, DialogContent } from "@mui/material";
import CustomButton from "./CustomButton";

const PdfDialog: React.FC<{ open: boolean, close: () => void, pdfUrl?: string }> = (props) => {

    return (
        <Dialog
            open={props.open}
            PaperProps={{ style: { backgroundColor: '#161616' } }}
            fullWidth
            fullScreen
        >
            <DialogContent>
                <iframe src="/pdf/00.pdf#toolbar=0&navpanes=0"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    allowFullScreen
                    frameBorder={0}
                >
                </iframe>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={props.close} variant='text'>Fechar</CustomButton>
            </DialogActions>
        </Dialog>
    )
}

export default PdfDialog;