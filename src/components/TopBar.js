import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PokeballIcon from '../images/pokeball.svg';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
    icon: {
      margin: theme.spacing(1),
      //'margin-bottom': 'auto',
    },
    link: {
      color: 'inherit',
      'text-decoration': 'none',
    },
  }));

const TopBar = () => {
    const classes = useStyles();

    return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <img src={PokeballIcon} className={classes.icon} alt='Ikona Pokeballa' /> 
          <Link to='/' className={classes.link}>
          <Typography component='h1' variant='h6' color='inherit' noWrap>
            Polskie społeczności Pokémon
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    );
}

export default TopBar;