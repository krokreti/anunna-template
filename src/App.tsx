import { CssBaseline, ThemeProvider } from '@mui/material'
import mainTheme from './theme/Theme';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/home';


function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App
