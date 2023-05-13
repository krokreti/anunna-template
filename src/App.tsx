import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { mainTheme } from './theme/Theme.tsx'
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar.tsx';
import Home from './pages/home/home.tsx';


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
