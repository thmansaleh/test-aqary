import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
     
          <Link style={{textDecoration:'none',color:'white',fontSize:'1.5rem'}} href='/'>Posts</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
