import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { mainTheme } from './theme/Theme.tsx'
import { Box } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box
      >
        <Typography variant="h2">ROI888</Typography>
      </Box>
    </ThemeProvider>
  )
}

export default App
