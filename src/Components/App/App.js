import './App.css';
import Charts from '../Charts/Charts';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme();

theme.typography.h1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

theme.typography.h4 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h5 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
};



const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'black',
    margin: '0 auto',
    "& .MuiTypography-h1": {

      color: 'white'
    }
  }
});

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <header>
      <Typography variant="h1" component="h1" gutterBottom>
        Koronarokotukset Suomessa
      </Typography>
      </header>
      <Charts  />
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
