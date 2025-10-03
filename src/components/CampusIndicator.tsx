import { Box, Typography } from '@mui/material';
import { useCampus } from '../contexts/CampusContext';

const CampusIndicator = () => {
  const { campusName } = useCampus();

  return (
    <Box
      sx={{
        width: '100%',
        py: 0.5,
        px: 2,
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        Campus {campusName}
      </Typography>
    </Box>
  );
};

export default CampusIndicator;