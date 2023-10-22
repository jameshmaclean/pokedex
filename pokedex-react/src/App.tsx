import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
