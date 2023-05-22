import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import mainTheme from './theme/Theme';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/home';
import { useAppSelector } from './hooks/redux-hooks';
import { currentProjectStatus } from './store/project-slice';


function App() {
  const background = useAppSelector(currentProjectStatus);
  const mediaQuery = useMediaQuery('(max-width:900px)');

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${mediaQuery ? background.backgroundMobile : background.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

        }}
      >
        <Navbar />
        <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App
