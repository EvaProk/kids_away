import './index.scss';
import FirstPage from './components/FirstPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

     
      <FirstPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
