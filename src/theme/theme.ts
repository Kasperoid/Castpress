import {createTheme} from "@mui/material";

declare module '@mui/material/CircularProgress/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        third: true
    }
}
declare module '@mui/material/Button/Button' {
    interface ButtonPropsColorOverrides {
        third: true;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        errorTitle: true;
        logo: true;
        linkHeader: true;
    }
}
declare module "@mui/material/styles" {
    interface Palette {
        third: Palette["primary"];
        greyPalette: Palette["primary"];
    }
    interface PaletteOptions {
        third?: PaletteOptions["primary"];
        greyPalette?: PaletteOptions["primary"];
    }
    interface TypographyVariants {
        errorTitle: React.CSSProperties;
        logo: React.CSSProperties;
        linkHeader: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        errorTitle?: React.CSSProperties;
        logo?: React.CSSProperties;
        linkHeader?: React.CSSProperties;
    }
}

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
                contained: {
                    '&:hover': {
                        color: '#fff',
                    },
                    '&:hover svg': {
                        filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(282deg) brightness(105%) contrast(105%)',
                    },
                },
                text: {
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: '#7247CA',
                    fontWeight: 600,
                    '&:hover': {
                        color: '#58379B',
                    },
                    '&:hover svg': {
                        filter: 'brightness(0) saturate(100%) invert(25%) sepia(13%) saturate(6340%) hue-rotate(235deg) brightness(95%) contrast(96%)',
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                underlineNone: {
                    transition: '0.3s ease-out',
                    '&:hover': {
                        color: '#7247CA',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: '#555555',
                    },
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover svg': {
                        filter: 'brightness(0) saturate(100%) invert(27%) sepia(63%) saturate(2597%) hue-rotate(247deg) brightness(86%) contrast(82%)'
                    },
                }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none',
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    transition: 'all 0.4s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.3)',
                    }
                }
            }
        },

    },
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#222222',
        },
        secondary: {
            main: '#F5F5F7',
            light: '#7247CA',
            dark: '#58379B',
            contrastText: "#7247CA",
        },
        warning: {
            main: '#FF3636',
        },
        greyPalette: {
            main: '#979797',
            light: '#EAEAEE',
            dark: '#555555',
        },
        third: {
            main: '#7247CA',
            contrastText: '#F5F5F7',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontSize: '26px',
            fontWeight: 600,
            lineHeight: '32px',
        },
        h2: {
            fontSize: '21px',
            fontWeight: 600,
            lineHeight: '25px',
        },
        h3: {
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '25px',
        },
        h4: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '25px',
        },
        h5: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '25px',
        },
        h6: {
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.16em',
        },
        caption: {
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#7247CA',
        },
        errorTitle: {
            fontWeight: 600,
            fontSize: '144px',
        },
        logo: {
            fontFamily: 'Oswald',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '28.16px',
            letterSpacing: '5%',
        },
        linkHeader: {
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
        },
    },
})

export default theme