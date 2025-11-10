import { AppBar, Toolbar, IconButton, Box, Select, MenuItem, FormControl, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import SideDrawer from './Drawer';
import { useCampus } from '../contexts/CampusContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { campus, setCampus, availableCampus } = useCampus();
  const { isDarkMode, toggleTheme } = useThemeContext();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleCampusChange = (event: any) => {
    setCampus(event.target.value);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          width: '100%',
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          pointerEvents: 'none', // This makes the entire AppBar non-interactive by default
        }}
      >
        <Toolbar 
          sx={{ 
            minHeight: { xs: '48px !important', sm: '56px !important' },
            px: { xs: '12px !important', sm: '16px !important' },
            pointerEvents: 'auto', // This makes just the Toolbar interactive
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%', 
            gap: { xs: 1.5, sm: 2 }
          }}>
            <IconButton 
              edge="start" 
              sx={{ 
                color: 'primary.main',
                padding: { xs: '6px', sm: '8px' },
              }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
            </IconButton>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              flex: 1
            }}>
              <ApartmentIcon sx={{ color: 'text.primary', fontSize: { xs: 20, sm: 22 } }} />
              <Typography 
                sx={{ 
                  color: 'text.primary',
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                  fontWeight: 400,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                campus:
              </Typography>

              <FormControl 
                size="small" 
                sx={{ 
                  minWidth: { xs: 100, sm: 140 },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '6px',
                    bgcolor: 'background.paper',
                    '& fieldset': {
                      borderColor: 'divider',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  }
                }}
              >
                <Select
                  value={campus}
                  onChange={handleCampusChange}
                  sx={{ 
                    '& .MuiSelect-select': {
                      py: { xs: 0.5, sm: 0.75 },
                      px: { xs: 1, sm: 1.25 },
                      fontSize: { xs: '0.875rem', sm: '0.95rem' }
                    }
                  }}
                >
                  {availableCampus.map((campusOption) => (
                    <MenuItem key={campusOption.id} value={campusOption.id}>
                      {campusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.2,
                px: 1,
                py: 0.5,
                borderRadius: 2,
                bgcolor: 'action.hover'
              }}>
                <LightModeIcon sx={{ 
                  fontSize: { xs: 16, sm: 18 },
                  color: isDarkMode ? 'text.disabled' : 'warning.main'
                }} />
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  color="primary"
                  size="small"
                />
                <DarkModeIcon sx={{ 
                  fontSize: { xs: 16, sm: 18 },
                  color: isDarkMode ? 'primary.main' : 'text.disabled'
                }} />
              </Box>
              
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer 
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      />
      {/* Add a spacer to prevent content from being hidden under the AppBar */}
      <Toolbar sx={{ minHeight: { xs: '48px !important', sm: '56px !important' } }} />
    </>
  );
};

export default Header;