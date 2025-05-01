import { Box, Typography } from '@mui/material';
import { useCampus } from '../contexts/CampusContext';

const CampusIndicator = () => {
  const { campus } = useCampus();

  const campusNames = {
    sobral: 'Campus Sobral',
    russas: 'Campus Russas'
  };

  return (
    <Box
      sx={{
        width: '100%',
        py: 1,
        px: 2,
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Typography variant="body2">
        {campusNames[campus]}
      </Typography>
    </Box>
  );
};

export default CampusIndicator;