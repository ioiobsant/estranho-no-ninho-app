import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Box } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import BottomBar from './components/BottomBar'
import { CampusProvider } from './contexts/CampusContext'
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext'
import AppRoutes from './routes'
import Button from '@mui/material/Button'

const AppContent = () => {
  const { isDarkMode } = useThemeContext();
  
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1565C0', 
        light: '#64B5F6',
        dark: '#1976D2',
      }, //aqui é a cor do tema.
      background: {
        default: isDarkMode ? '#121212' : '#F8FAFC',
        paper: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      }, //aqui é a cor do fundo do tema.
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#1A2027',
        secondary: isDarkMode ? '#B0B0B0' : '#3E5060',
      }, //aqui é a cor do texto do tema.
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 16, // Base 16px - usado para cálculos de rem
      
      
      // Todos os componentes que usarem estas variants herdarão estas propriedades
      
      body1: {
        fontSize: '1.125rem',     // 18px // WCAG mínimo é 1.0rem (16px)
        lineHeight: 2,          // WCAG: mínimo 1.5
        letterSpacing: '0.02em',  // WCAG: mínimo 0.12
        fontWeight: 500,
      },
      body2: {
        fontSize: '1rem',     // 16px
        lineHeight: 1.6,          // WCAG: mínimo 1.5x 
        letterSpacing: '0.02em',  // WCAG: mínimo 0.12x 
      },
      button: {
        fontSize: '1rem',         // 16px
        fontWeight: 500,
        textTransform: 'none',    // Mantém capitalização natural
        lineHeight: 1.75,
        letterSpacing: '0.02em',
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
            pb: { xs: '64px', sm: '80px' }
          }}>
            <Header />
            <Box
              component="main"
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'auto',
                zIndex: 1 // Ensure the main content has a lower z-index than the AppBar
              }}
            >
              <AppRoutes />
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
    <>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  );
}

export default App;