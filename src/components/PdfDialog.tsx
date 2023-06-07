import { Dialog, DialogContent, Fade } from "@mui/material";
import React from "react";

const PdfDialog: React.FC<{ open: boolean, close: () => void, pdfUrl?: string, id: string }> = (props) => {
    const iframeStyle: React.CSSProperties = {
        height: '92.7vh',
    };
    return (
        <Dialog
            open={props.open}
            PaperProps={{ style: { backgroundColor: '#161616', } }}
            onClose={props.close}
            TransitionComponent={Fade}
            transitionDuration={{ enter: 1000, exit: 1000 }}
            maxWidth={"lg"}
            fullWidth
            scroll="body"
        >
            <DialogContent >
                <iframe src={`/pdf/${props.id}.pdf#toolbar=0&navpanes=0`}
                    width="100%"
                    height="100%"
                    scrolling="no"
                    allowFullScreen
                    frameBorder={0}
                    style={iframeStyle}
                >
                </iframe>
            </DialogContent>
            {/* <DialogActions>
                <CustomButton onClick={props.close} variant='text'>Close</CustomButton>
            </DialogActions> */}
        </Dialog>
    )
}

export default PdfDialog;