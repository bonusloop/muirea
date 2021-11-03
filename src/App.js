import React from 'react';
import './App.css';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/system';


function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" 
          color="inherit" aria-label="menu" >
            <Menu/>
          </IconButton>
          <Typography variant="h5">646runGo</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log In</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
