import { ReactNode } from 'react';
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MainCard: React.FC<{ children: ReactNode }> = (props) => {
    return (
        <motion.div
            style={{ height: '100%' }}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 1 }}
        >
            <Box
                component={'div'}
                p={4}
                bgcolor={'rgba(0, 0, 0, 0.5)'}
                // width={'100%'}
                maxWidth={'100vw'}
                marginX={4}
                height={'fit-content'}
                borderRadius={'30px'}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            >
                {props.children}
            </Box>
        </motion.div>
    )
}

export default MainCard;