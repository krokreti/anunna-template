import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './theme/Theme';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import Navbar from './components/layout/Navbar';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { backgroundTotal, currentProjectStatus, projectActions } from './store/project-slice';
import { useRef, useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const background = useAppSelector(currentProjectStatus);
  const totalCount = useAppSelector(backgroundTotal);
  const mediaQuery = useMediaQuery('(max-width:1050px)');
  const touchStartXRef = useRef(0);
  const [backgroundCount, setBackgroundCount] = useState<number>(0);

  useEffect(() => {
    dispatch(projectActions.changeProject(backgroundCount));
  }, [backgroundCount])

  const increment = () => {
    if (backgroundCount == (totalCount - 1)) {
      return;
    }
    setBackgroundCount(backgroundCount + 1);
  }

  const decrement = () => {
    if (backgroundCount == 0) {
      return;
    }
    setBackgroundCount(backgroundCount - 1);
  }

  const handleTouchStart = (event: any) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: any) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchStartX = touchStartXRef.current;
    const slideThreshold = 50; // Threshold de deslize em pixels

    if (touchEndX - touchStartX > slideThreshold) {
      // Deslize para a direita
      decrement();
    } else if (touchStartX - touchEndX > slideThreshold) {
      // Deslize para a esquerda
      increment();
    }
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AnimatedBackground
        mediaQuery={mediaQuery}
        background={mediaQuery ? background.backgroundMobile : background.background}
        nextBackground={mediaQuery ? background.backgroundMobile : background.background}
      />
      <Box
        onTouchStart={mediaQuery ? handleTouchStart : () => { }}
        onTouchEnd={mediaQuery ? handleTouchEnd : () => { }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default App
