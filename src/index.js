import React from "react";
import ReactDOM from "react-dom/client";
// import 'antd/dist/antd.min.css'  
// import 'antd/dist/antd.css';
// import 'antd/dist/reset.css';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AppStateContext from "./context/AppStateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ThemeProvider>
          <AppStateContext>
            <App />
          </AppStateContext>
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);



// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: 'postcss-loader',
//             options: {
//               plugins: [
//                 require('autoprefixer')
//               ]
//             }
//           }
//         ]
//       }
//     ]
//   }
// };