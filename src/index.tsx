import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import store from "./redux/store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
