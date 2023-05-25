// import { Box } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";

type AnimatedBackgroundType = {
    mediaQuery: boolean,
    backgroundMobile: string,
    background: string,
}

const AnimatedBackground: React.FC<AnimatedBackgroundType> = (props) => {
    return (<AnimatePresence>
        <motion.div
            key={props.mediaQuery ? props.backgroundMobile : props.background}
            initial={{ opacity: 0, scale: 2, }}
            animate={{ opacity: 1, scale: 1, }}
            exit={{ opacity: 0, scale: 2, }}
            transition={{ duration: 2 }}
        >
            <div style={{
                backgroundImage: `url(${props.mediaQuery ? props.backgroundMobile : props.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1,
                height: '100vh',
                width: '100%',
                position: 'absolute',
            }}>

            </div>
            {/* <Box
                sx={{
                    backgroundImage: `url(${props.mediaQuery ? props.backgroundMobile : props.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1,
                }}
                height={'100%'}
                width={'100%'}
                position={'absolute'}
            >
            </Box> */}
        </motion.div>
    </AnimatePresence>)
}

export default AnimatedBackground;