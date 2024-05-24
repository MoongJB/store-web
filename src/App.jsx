import "normalize.css";
import "./App.css";
import { publicRoutes } from "./routes/Routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import layoutDefault from "./Layout/layoutDefault";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.system.theme);
  const customTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = layoutDefault;
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
