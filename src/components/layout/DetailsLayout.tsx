import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import mainTheme from '../../theme/Theme';

const DetailsLayout = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <Navbar />
            <Outlet />
        </ThemeProvider>
    )
}

export default DetailsLayout;