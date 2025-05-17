import { Box } from '@mui/material';
import Banner from './Banner';
import MenuGrid from './MenuGrid';

const HomePage = () => {
  return (
    <Box sx={{ 
      width: '100%',
      height: '100vh',
      position: 'relative',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Banner />
      <Box sx={{ 
        flex: 1,
        mx: 2,
        bgcolor: 'background.paper', 
        borderRadius: 2, 
        boxShadow: (theme) => theme.palette.mode === 'dark' 
          ? '0 2px 8px rgba(0,0,0,0.3)' 
          : '0 2px 8px rgba(0,0,0,0.08)',
        overflow: 'auto'
      }}>
        <Box sx={{ 
          py: 1.5, 
          px: 2, 
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
        </Box>
        <MenuGrid />
      </Box>
    </Box>
  );
};

export default HomePage;