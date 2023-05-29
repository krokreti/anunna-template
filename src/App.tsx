import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './theme/Theme';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import Navbar from './components/layout/Navbar';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { backgroundTotal, currentProjectStatus, projectActions } from './store/project-slice';
import { useRef, useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const background = useAppSelector(currentProjectStatus);
  const totalCount = useAppSelector(backgroundTotal);
  const mediaQuery = useMediaQuery('(max-width:1050px)');
  const touchStartXRef = useRef(0);
  const location = useLocation();
  const [backgroundCount, setBackgroundCount] = useState<number>(0);

  useEffect(() => {
    dispatch(projectActions.changeProject(backgroundCount));
  }, [backgroundCount])

  const increment = () => {
    if (backgroundCount == (totalCount - 1)) {
      console.log(`${backgroundCount} opa chegou no total de ${(totalCount - 1)}`)
      return;
    }
    setBackgroundCount(backgroundCount + 1);
    console.log(backgroundCount)
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

  var useTouchSlide = (mediaQuery && (location.pathname == '/'));

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AnimatedBackground
        key={'123'}
        mediaQuery={mediaQuery}
        background={mediaQuery ? background.backgroundMobile : background.background}
        nextBackground={mediaQuery ? background.backgroundMobile : background.background}
      />

      <Box
        component={"div"}
        onTouchStart={useTouchSlide ? handleTouchStart : () => { }}
        onTouchEnd={useTouchSlide ? handleTouchEnd : () => { }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default App
