import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import FriendsRegular from '/Friends-Regular.ttf';
import FriendsThin from '/Friends-Thin.ttf';
import FriendsThinItalic from '/Friends-ThinItalic.ttf';
import FriendsUltraLight from '/Friends-UltraLight.ttf'

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

let mainTheme = createTheme({
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
        fontFamily: 'FriendsRegular, FriendsThin',
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'FriendsRegular';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('FriendsRegular'), local('Friends-Regular'), url(${FriendsRegular}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              },
              @font-face {
                font-family: 'FriendsThin';
                font-style: normal;
                font-display: swap;
                font-weight: 100;
                src: local('FriendsThin'), local('Friends-Thin'), url(${FriendsThin}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
              @font-face {
                font-family: 'FriendsThinItalic';
                font-style: normal;
                font-display: swap;
                font-weight: 100;
                src: local('FriendsThinItalic'), local('Friends-ThinItalic'), url(${FriendsThinItalic}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
              @font-face {
                font-family: 'FriendsUltraLight';
                font-style: normal;
                font-display: swap;
                font-weight: 100;
                src: local('FriendsUltraLight'), local('Friends-UltraLight'), url(${FriendsUltraLight}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `
        }
    },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;