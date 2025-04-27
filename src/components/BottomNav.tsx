import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        borderTop: '1px solid rgba(0,0,0,0.1)',
      }} 
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        sx={{ 
          backgroundColor: '#4A90E2',
          height: 56,
          '& .MuiBottomNavigationAction-root': {
            color: 'rgba(255,255,255,0.7)',
            '&.Mui-selected': {
              color: 'white'
            }
          }
        }}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction 
          label="Cursos" 
          icon={<MenuBookIcon />}
          onClick={() => navigate('/cursos')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav; 