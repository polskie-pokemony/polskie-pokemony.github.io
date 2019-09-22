import React from "react"
import PropTypes from "prop-types"
import TopBar from './TopBar';
import "./layout.css"
import Typography from '@material-ui/core/Typography';
import UILink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'autor: '}
      <UILink color="inherit" href="https://github.com/robdy" target='_blank'>
        robdy
      </UILink>
      {' # szablon: '}
      <UILink color="inherit" href="https://material-ui.com/" target='_blank'>
        Material UI
      </UILink>
    </Typography>
  );
}

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Kod źródłowy strony możesz znaleźć <UILink color="inherit" href='https://github.com/polskie-pokemony/polskie-pokemony.github.io' target='_blank'>na Githubie</UILink>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
