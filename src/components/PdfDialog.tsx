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
                <iframe src="../../public/pdf/00.pdf"
                    width="100%"
                    height="100%"
                    allowFullScreen></iframe>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={props.close} variant='text'>Fechar</CustomButton>
            </DialogActions>
        </Dialog>
    )
}

export default PdfDialog;