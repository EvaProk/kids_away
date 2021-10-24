import './index.scss';
import FirstPage from './components/FirstPage'
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router }  from "react-router-dom";

const theme = createTheme({
    palette: {
      primary: {
        main: '#f37647',
        contrastText: "#f7f1e5;"
      },
      secondary: {
        main: '#8dc8ae',
        contrastText: "#f7f1e5;"
      },
      accent: {
        main: '#444',
        contrastText: "#f7f1e5;"
      },
    
    },
    typography: {
      fontFamily: [
        'Baloo Tamma 2'
      ].join(','),
    }
  
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Navbar /> */}
          <FirstPage />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
