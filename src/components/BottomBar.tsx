import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import { Home, School, Map } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 56,
          left: 0,
          right: 0,
          height: 1,
          bgcolor: 'divider'
        }}
      />

     
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'background.paper'
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(_, newValue) => navigate(newValue)}
          sx={{
            '& .MuiBottomNavigationAction-root': {
              '& .MuiSvgIcon-root': {
                transform: 'translateY(-8px)'
              }
            }
          }}
        >
          <BottomNavigationAction
            label="Início"
            value="/"
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Cursos"
            value="/cursos"
            icon={<School />}
          />
          <BottomNavigationAction
            label="Mapa"
            value="/mapa"
            icon={<Map />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomBar;