import { AppBar, Toolbar, IconButton, Box, Select, MenuItem, FormControl, Typography, useTheme, useMediaQuery, Switch } from '@mui/material';
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
  const { campus, setCampus } = useCampus();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleCampusChange = (event: any) => {
    setCampus(event.target.value as 'sobral' | 'russas');
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
          borderColor: 'divider'
        }}
      >
        <Toolbar 
          sx={{ 
            minHeight: '56px !important',
            px: { xs: '12px !important', sm: '16px !important' }
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
              <MenuIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              flex: 1
            }}>
              <ApartmentIcon sx={{ color: 'text.primary', fontSize: { xs: 20, sm: 24 } }} />
              <Typography 
                sx={{ 
                  color: 'text.primary',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 400,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                campus:
              </Typography>

              <FormControl 
                size="small" 
                sx={{ 
                  minWidth: { xs: 120, sm: 160 },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
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
                      py: { xs: 0.75, sm: 1 },
                      px: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }
                  }}
                >
                  <MenuItem value="sobral">Sobral</MenuItem>
                  <MenuItem value="russas">Russas</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.5,
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
              <IconButton 
                sx={{ 
                  color: 'primary.main',
                  padding: { xs: '6px', sm: '8px' },
                }}
              >
                <SearchIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
            </Box>
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