import { Box, IconButton, Paper, Tooltip } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useLocation } from 'react-router-dom';
import { useZoom, zoomLimits } from '../contexts/ZoomContext';

const ZoomControls = () => {
  const { zoom, increase, decrease } = useZoom();
  const { min, max } = zoomLimits;
  const { pathname } = useLocation();
  const isMapaPage = pathname === '/mapa' || pathname.startsWith('/mapa/');

  if (isMapaPage) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, sm: 16 },
        bottom: { xs: 104, sm: 114 },
        zIndex: (theme) => theme.zIndex.appBar + 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          p: 0.75,
          borderRadius: 3,
          bgcolor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Tooltip title="Diminuir zoom" enterDelay={300}>
          <span>
            <IconButton
              onClick={decrease}
              disabled={isMapaPage || zoom <= min}
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
              disabled={isMapaPage || zoom >= max}
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

