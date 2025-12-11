import { Box, IconButton, Paper, Tooltip } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useZoom, zoomLimits } from '../contexts/ZoomContext';

const ZoomControls = () => {
  const { zoom, increase, decrease } = useZoom();
  const { min, max } = zoomLimits;

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, sm: 16 },
        bottom: { xs: 120, sm: 130 },
        zIndex: (theme) => theme.zIndex.appBar + 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          p: 0.75,
          borderRadius: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Tooltip title="Diminuir zoom" enterDelay={300}>
          <span>
            <IconButton
              onClick={decrease}
              disabled={zoom <= min}
              aria-label="Diminuir zoom"
              size="small"
            >
              <ZoomOutIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Aumentar zoom" enterDelay={300}>
          <span>
            <IconButton
              onClick={increase}
              disabled={zoom >= max}
              aria-label="Aumentar zoom"
              size="small"
            >
              <ZoomInIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default ZoomControls;

