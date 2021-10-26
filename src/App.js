import './index.scss';
import FirstPage from './components/FirstPage'
import Navbar from './components/Navbar'
import SearchBabysitter from './components/searchbabysitter/SearchBabysitter'
import BabysitterProfile from './components/babysitterprofile/BabysitterProfile'
import UserCabinet from './components/usercabinet/UserCabinet'


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Switch,Route }  from "react-router-dom";

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
    <Router>
    <div className="App">
      
      <ThemeProvider theme={theme}>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/searchBabysitters">
            <SearchBabysitter/>
          </Route>
          <Route path="/babysitter-profile">
            <BabysitterProfile/>
          </Route>
          <Route path="/user-cabinet">
            <UserCabinet/>
          </Route>
          
       
        </Switch>
          
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;
