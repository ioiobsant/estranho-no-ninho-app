import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import { Home, School } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100vw',
          bgcolor: 'background.paper',
          height: 90,
          zIndex: 1200,
          '& .MuiBottomNavigation-root': {
            height: '100%'
          }
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(_, newValue) => navigate(newValue)}
          sx={{
            '& .MuiBottomNavigationAction-root': {
              padding: '12px 0',
              '& .MuiSvgIcon-root': {
                transform: 'translateY(-8px)',
                fontSize: 28
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
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomBar;