import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Banner = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '180px', sm: '200px' },
        borderRadius: { xs: '2px', sm: '10px' },
        overflow: 'hidden',
        mb: { xs: 3, sm: 4 },
        mt: { xs: 2, sm: 3 },
        bgcolor: 'primary.main',
        mx: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%)',
          zIndex: 1
        }
      }}
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 3, sm: 4 }
        }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2 },
              mb: { xs: 1.5, sm: 2 }
            }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FlightTakeoffIcon 
                sx={{ 
                  color: 'white',
                  fontSize: { xs: 28, sm: 32 }
                }} 
              />
            </motion.div>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                fontWeight: 600,
                lineHeight: 1.2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Estude no Exterior
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.5,
              maxWidth: '100%',
              pl: { xs: '44px', sm: '48px' },
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Descubra oportunidades de intercâmbio e expanda seus horizontes acadêmicos
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Banner;