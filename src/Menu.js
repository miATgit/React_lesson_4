import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Icon/';
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const location = useLocation();
  const linkPath = location.pathname;
  console.log(linkPath);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="menuTop">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon>
                      
            </MenuIcon>
          </IconButton>
            <Typography variant="h6" className={classes.title}>
              Chat with me
            </Typography>
              <nav>
                  <Link className={linkPath === "/" ? 'menuLink red' : 'menuLink'} to="/">Home</Link> |{" "}
                  <Link className={linkPath === "/profile" ? 'menuLink red' : 'menuLink'} to="profile">Profile</Link>|{" "}
                  <Link className={linkPath === "/chats" ? 'menuLink red' : 'menuLink'} to="chats">Chat List</Link>|{" "}
              </nav>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}