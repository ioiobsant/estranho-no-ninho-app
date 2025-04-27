import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import SideDrawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: '#4A90E2',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Toolbar variant="dense">
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%', 
            justifyContent: 'space-between',
            px: 1
          }}>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ padding: '8px' }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ padding: '8px' }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer 
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </>
  );
};

export default Header; 