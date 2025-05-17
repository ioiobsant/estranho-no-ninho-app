import { Box } from '@mui/material';
import Banner from './Banner';
import MenuGrid from './MenuGrid';

const HomePage = () => {
  return (
    <Box sx={{ 
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      pb: 8,
      bgcolor: 'background.paper',
      overflowX: 'hidden'
    }}>
      <Banner />
      <Box sx={{ 
        mt: -2, 
        mx: 2, 
        mb: 3, 
        bgcolor: 'background.paper', 
        borderRadius: 2, 
        boxShadow: (theme) => theme.palette.mode === 'dark' 
          ? '0 2px 8px rgba(0,0,0,0.3)' 
          : '0 2px 8px rgba(0,0,0,0.08)'
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