import { createTheme } from '@mui/material/styles';
import Friends from '../../public/Friends-Regular.ttf';


declare module '@mui/material/styles' {
    interface Theme {
        transparent: {
            main: string;
        },
    }
    interface ThemeOptions {
        transparent: {
            main: string;
        };
    }
}

export const mainTheme = createTheme({
    transparent: {
        main: 'transparent',
    },
    palette: {
        primary: {
            main: '#5A33DB',
        },
        text: {
            primary: '#F2F2F7',
            secondary: '#8E8E93',
        },
        secondary: {
            main: '#8E8E93',
        },
        background: {
            default: '#161616',
        },

    },
    typography: {
        fontFamily: 'Friends'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Friends';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Friends'), local('Friends-Regular'), url(${Friends}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `
        }
    },
});