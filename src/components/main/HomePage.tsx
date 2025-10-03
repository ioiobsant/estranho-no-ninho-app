import { Box } from '@mui/material';
import Banner from '../Banner';
import MenuGrid from '../MenuGrid';
import { motion } from 'framer-motion';

const HomePage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ 
        width: '100%',
        position: 'relative',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        pt: { xs: 16, sm: 8, md: 10 },
        pb: { xs: 4, sm: 4, md: 6 }
      }}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <Box sx={{ 
            mx: { xs: 1, sm: 2, md: 3 },
            my: { xs: 2, sm: 3 },
            bgcolor: 'background.paper', 
            borderRadius: { xs: 2, sm: 3 }, 
            boxShadow: (theme) => theme.palette.mode === 'dark' 
              ? '0 4px 20px rgba(0,0,0,0.4)' 
              : '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: (theme) => theme.palette.mode === 'dark'
                ? '0 6px 24px rgba(0,0,0,0.5)'
                : '0 6px 24px rgba(0,0,0,0.15)',
              transform: 'translateY(-2px)'
            }
          }}>
            <MenuGrid />
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;