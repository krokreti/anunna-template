import { Dialog, DialogActions, DialogContent } from "@mui/material";
import CustomButton from "./CustomButton";

const PdfDialog: React.FC<{ open: boolean, close: () => void, pdfUrl?: string, id: string }> = (props) => {

    return (
        <Dialog
            open={props.open}
            PaperProps={{ style: { backgroundColor: '#161616', } }}
            fullWidth
            fullScreen
        >
            <DialogContent>
                <iframe src={`/pdf/${props.id}.pdf#toolbar=0&navpanes=0`}
                    width="100%"
                    height="95%"
                    scrolling="no"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin"
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