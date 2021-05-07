import Layout from "../components/Layout";
import LayoutContextProvider from "../LayoutContext/LayoutProvider";
import "../styles/globals.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import JobsContextProvider from "../JobsContext/JobsProvider";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#eb6b17",
        },
        secondary: {
            main: "#8f18c4",
        },
        text: {
            primary: "#b611a7",
            secondary: "#050505",
        },
    },

    typography: {
        fontFamily: '"Cairo", sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <LayoutContextProvider>
                <JobsContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </JobsContextProvider>
            </LayoutContextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
