import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        mx: 0
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 5,
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2 },
            mb: { xs: 1.5, sm: 2 }
          }}
        >
          <FlightTakeoffIcon 
            sx={{ 
              color: 'white',
              fontSize: { xs: 28, sm: 32 }
            }} 
          />
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', sm: '1.75rem' },
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Estude no Exterior
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            lineHeight: 1.5,
            maxWidth: '100%',
            pl: { xs: '44px', sm: '48px' }
          }}
        >
          Descubra oportunidades de intercâmbio e expanda seus horizontes acadêmicos
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;