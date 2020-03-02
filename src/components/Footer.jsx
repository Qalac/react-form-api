import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text-white">
      {'Copyright © '}
      <Link color="inherit" href="https://visioncave.net/">
        Visioncave
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div >
      
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">VisionCave Integrated Services All Rights Reserved</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}