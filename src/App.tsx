import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainTheme } from './theme/Theme.tsx'
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar.tsx';
import Home from './pages/home/Home.tsx';

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
