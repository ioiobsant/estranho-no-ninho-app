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
        position: 'fixed',
        top: '48px', // Altura do header em mobile
        bottom: '80px', // Altura do bottom bar
        left: 0,
        right: 0,
        width: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '@media (min-width: 600px)': {
          top: '56px',
          bottom: '70px'
        },
        '@media (min-width: 900px)': {
          bottom: '80px'
        }
      }}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box sx={{ 
            mx: { xs: 1, sm: 2, md: 3 },
            width: '100%',
            bgcolor: 'background.paper', 
            borderRadius: { xs: 2, sm: 3 }, 
            boxShadow: (theme) => theme.palette.mode === 'dark' 
              ? '0 4px 20px rgba(0,0,0,0.4)' 
              : '0 4px 20px rgba(99, 96, 96, 0.48)',
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