import { BottomNavigation, BottomNavigationAction, Paper, Box, Typography, ButtonBase } from '@mui/material';
import { HomeOutlined, SchoolOutlined, ArrowBackOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [voltarClicked, setVoltarClicked] = useState(false);

  // Verificar se estamos na página inicial
  const isHomePage = location.pathname === '/';
  
  // Verificar se estamos em uma aba principal (home ou cursos)
  const isMainTab = location.pathname === '/' || location.pathname === '/cursos';
  
  // Função para animação do botão voltar
  const handleVoltarClick = () => {
    setVoltarClicked(true);
    setTimeout(() => {
      setVoltarClicked(false);
    }, 1000);
    navigate(-1);
  };

  return (
    <>
      <Box
      component="nav"
      role="navigation"
      aria-label="Barra de navegação inferior"
        sx={{
          position: 'fixed',
          bottom: { xs: 96, sm: 110, md: 120 },
          left: 0,
          right: 0,
          height: 1,
          bgcolor: 'divider'
        }}
      />

     
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'background.paper',
          zIndex: 1100,
          height: { xs: '100px', sm: '100px', md: '100px' },
          paddingBottom: { xs: 'env(safe-area-inset-bottom, 0px)', sm: 0, md: 0 }
        }}
        elevation={3}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between',
          height: '100%',
          px: 1,
          pt: { xs: 1.5, sm: 0.5, md: 0.5 }
        }}>
          {/* Botão de voltar - lado esquerdo */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            flex: 1
          }}>
            <ButtonBase
              onClick={handleVoltarClick}
              disabled={isHomePage}
              aria-label="Barra de navegação inferior: Voltar"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 0.65, sm: 0.9 },
                width: '100%',
                py: { xs: 0.7, sm: 0.9 },
                color: voltarClicked ? 'primary.main' : (!isHomePage ? 'primary.main' : 'grey.400'),
                transition: 'color 0.3s ease, background-color 0.2s ease',
                borderRadius: 2,
                opacity: isHomePage ? 0.7 : 1,
                '&:disabled': {
                  pointerEvents: 'auto',
                  cursor: 'not-allowed'
                }
              }}
            >
              <ArrowBackOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />
              <Typography variant="caption" component="span" sx={{ 
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                color: 'inherit',
                textAlign: 'center'
              }}>
                Voltar
              </Typography>
            </ButtonBase>
          </Box>

          {/* Botão de início - centro */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            flex: 1,
            position: 'relative'
          }}>
            <ButtonBase
              onClick={() => !isHomePage && navigate('/')}
              disabled={isHomePage}
              aria-label="Barra de navegação inferior: Início"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 0.65, sm: 0.9 },
                width: '100%',
                py: { xs: 0.7, sm: 0.9 },
                color: 'primary.main',
                '&.Mui-disabled': {
                  color: 'primary.main',
                },
                borderRadius: 2,
              }}
            >
              <HomeOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />
              {isHomePage && (
                <Box sx={{
                  width: { xs: 30, sm: 32, md: 36 },
                  height: 2,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                }} />
              )}
              <Typography variant="caption" component="span" sx={{ 
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                color: 'inherit',
                textAlign: 'center'
              }}>
                Início
              </Typography>
            </ButtonBase>
          </Box>

          {/* Botão de cursos - lado direito */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            flex: 1,
            position: 'relative'
          }}>
            <ButtonBase
              onClick={() => navigate('/cursos')}
              aria-label="Barra de navegação inferior: Cursos"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 0.65, sm: 0.9 },
                width: '100%',
                py: { xs: 0.7, sm: 0.9 },
                color: 'primary.main',
                borderRadius: 2,
              }}
            >
              <SchoolOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />
              {location.pathname === '/cursos' && (
                <Box sx={{
                  width: { xs: 30, sm: 32, md: 36 },
                  height: 2,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                }} />
              )}
              <Typography variant="caption" component="span" sx={{ 
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                color: 'inherit',
                textAlign: 'center'
              }}>
                Cursos
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default BottomBar;