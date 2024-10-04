import { createTheme } from "@mui/material/styles";

let spaceTheme = createTheme({
    custom: {
        header: { h: 48 }
    }
});


export const theme = createTheme(spaceTheme, {
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'unset'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: spaceTheme.custom.header.h,
                    "@media (min-width:600px)": {
                        minHeight: spaceTheme.custom.header.h,
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    //fontWeight: 'bold'
                }
            }
        }
    }
})