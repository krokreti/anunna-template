import { Typography, Box } from "@mui/material";
import MainCard from "../../components/MainCard";
import BackButton from "../../components/BackButton";


const PolicyPrivacy = () => {
    return (
        <MainCard>
            <BackButton />
            <Box component={'div'} display={'flex'} flexDirection={'column'} gap={2} mt={3}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Policy Privacy:
                </Typography>

                <Typography variant="h6" fontWeight={'bold'}>
                    Revised June 10, 2021
                </Typography>
                This Privacy Statement describes how Anunna888 (hereinafter referred to as "we", "our" or "agency") collects, uses and protects the personal information of visitors and users (hereinafter referred to as "you" or "your") on our website. The privacy and security of your information is of the utmost importance to us, and we are committed to protecting it in accordance with applicable data protection laws. By using our website, you agree to the practices described in this Privacy Policy.

                <Typography variant="h6" fontWeight={'bold'}>
                    Information Collected
                </Typography>
                1.1 Information provided by you: We may collect personal information that you voluntarily provide when filling out contact forms, subscribing to newsletters or participating in promotions. This information may include your name, email address, telephone number and other information relevant to the services we offer.

                1.2 Automatically Collected Information: We may automatically collect certain information when you visit our website, such as your IP address, browser type, pages viewed, length of visit and other analytics data. This information is used to improve your user experience and understand how our site is used.

                <Typography variant="h6" fontWeight={'bold'}>
                    Use of information
                </Typography>
                2.1 Use of personal information: The personal information collected is used to respond to your requests, provide the requested services, send you relevant communications, customize your experience on our website, improve our services and send you marketing information, provided that you have previously consented.

                2.2 Information sharing: We may share your personal information with trusted third parties that assist us in providing services, such as hosting providers, analytics services and marketing platforms. These parties are obligated to maintain the confidentiality and security of your information.

                <Typography variant="h6" fontWeight={'bold'}>
                    Information protection
                </Typography>
                3.1 Security Measures: We employ adequate security measures to protect your personal information from unauthorized access, misuse, alteration or destruction. However, please remember that no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of information provided through our website.

                <Typography variant="h6" fontWeight={'bold'}>
                    Your rights
                </Typography>
                4.1 Access and Correction: You have the right to access, correct and update your personal information at any time. If you wish to exercise these rights, please contact us through the communication channels indicated below.

                4.2 Unsubscribe: If you no longer wish to receive marketing communications.
            </Box>
        </MainCard>
    )
}

export default PolicyPrivacy;