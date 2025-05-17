import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import { Home, School } from '@mui/icons-material';
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
          bgcolor: 'background.paper',
          zIndex: 1100,
          borderTop: '1px solid',
          borderColor: 'divider',
          height: '80px'
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(_, newValue) => navigate(newValue)}
          sx={{
            height: '80px',
            '& .MuiBottomNavigationAction-root': {
              padding: '8px 0',
              '& .MuiSvgIcon-root': {
                transform: 'translateY(-4px)',
                fontSize: 24
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