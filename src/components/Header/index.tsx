import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={2}>
    </Stack> 
      <AppBar position="static">
        <Toolbar>          
          <LocalHospitalIcon></LocalHospitalIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company
          </Typography>          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              <AccountCircle />
              </IconButton>              
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}