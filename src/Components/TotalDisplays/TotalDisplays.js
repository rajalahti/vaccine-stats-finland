import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    paddingTop: 50,
    paddingBottom: 50,
    "& .MuiTypography-h5": {
      marginBottom: 20,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 20
  },
  result: {
    color: "green",
  },
  info: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: "1.2rem",
  },
}));

// This function converts a number to use thousand separators
function thousandSeparator(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}

export default function TotalDisplays(props) {
  const classes = useStyles();
  const {
    totalVaccinations,
    vaccinationPercentage,
    totalVaccinationsHyks,
    hyksVaccinationPercentage,
  } = props.data;

  console.log(props);

  return (
    <section className={classes.root} style={{margin: '0 auto'}}>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2" >
              Suomi
              <Divider style={{marginTop: 10}}/>
            </Typography>
            <Typography variant="h6" component="h3" className={classes.result}>
              {thousandSeparator(totalVaccinations)} rokotettua
            </Typography>
            <Typography variant="h6" component="h3" className={classes.result}>
              {vaccinationPercentage} %
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              HYKS-alue
              <Divider style={{marginTop: 10}}/>
            </Typography>
            <Typography variant="h6" component="h3" className={classes.result}>
              {thousandSeparator(totalVaccinationsHyks)} rokotettua
            </Typography>
            <Typography variant="h6" component="h3" className={classes.result}>
              {hyksVaccinationPercentage} %
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}
