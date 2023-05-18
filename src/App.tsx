import { CssBaseline, ThemeProvider } from '@mui/material'
import mainTheme from './theme/Theme';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/home';
import { useAppSelector } from './hooks/redux-hooks';
import { currentProjectStatus } from './store/project-slice';


function App() {
  const background = useAppSelector(currentProjectStatus);
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${background.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
        }}
      >
        <Navbar />
        <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App
