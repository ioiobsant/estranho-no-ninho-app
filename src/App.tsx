import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Box } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import BottomBar from './components/BottomBar'
import { CampusProvider } from './contexts/CampusContext'
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext'
import AppRoutes from './routes'
import CampusIndicator from './components/CampusIndicator'

const AppContent = () => {
  const { isDarkMode } = useThemeContext();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#2196F3',
        light: '#64B5F6',
        dark: '#1976D2',
      },
      background: {
        default: isDarkMode ? '#121212' : '#F8FAFC',
        paper: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#1A2027',
        secondary: isDarkMode ? '#B0B0B0' : '#3E5060',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(8px)',
            backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <CampusProvider>
        <Router>
          <Box sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
            overflow: 'hidden',
            pb: '88px'
          }}>
            <Header />
            <Box 
              component="main" 
              sx={{ 
                flex: 1,
                mt: '56px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box 
                sx={{ 
                  position: 'fixed',
                  top: '56px',
                  left: 0,
                  right: 0,
                  zIndex: 1000
                }}
              >
                <CampusIndicator />
              </Box>
              <Box sx={{ mt: '32px' }}>
                <AppRoutes />
              </Box>
            </Box>
            <BottomBar />
          </Box>
        </Router>
      </CampusProvider>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
