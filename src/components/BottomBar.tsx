import { BottomNavigation, BottomNavigationAction, Paper, Box, IconButton, Typography } from '@mui/material';
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
        sx={{
          position: 'fixed',
          bottom: { xs: 80, sm: 70, md: 80 },
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
          height: { xs: '80px', sm: '70px', md: '80px' },
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
            <IconButton
              onClick={handleVoltarClick}
              disabled={isHomePage}
              sx={{
                color: voltarClicked ? 'primary.main' : (!isHomePage ? 'primary.main' : 'grey.400'),
                transition: 'color 0.3s ease',
                width: { xs: 36, sm: 40, md: 44 },
                height: { xs: 36, sm: 40, md: 44 },
                mb: { xs: 0.5, sm: 0.5, md: 0.5 }
              }}
              aria-label="Voltar"
            >
              <ArrowBackOutlined sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: 'inherit' }} />
            </IconButton>
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
              color: !isHomePage ? 'primary.main' : 'grey.400',
              textAlign: 'center'
            }}>
              Voltar
            </Typography>
          </Box>

          {/* Botão de início - centro */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            flex: 1,
            position: 'relative'
          }}>
            <IconButton
              onClick={() => !isHomePage && navigate('/')}
              disabled={isHomePage}
              sx={{
                color: 'primary.main',
                '&.Mui-disabled': {
                  color: 'primary.main',
                },
                width: { xs: 36, sm: 40, md: 44 },
                height: { xs: 36, sm: 40, md: 44 },
                mb: { xs: 0.25, sm: 0.25, md: 0.25 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Início"
            >
              <HomeOutlined sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: 'inherit' }} />
            </IconButton>
            {isHomePage && (
              <Box sx={{
                width: { xs: 30, sm: 32, md: 36 },
                height: 2,
                bgcolor: 'primary.main',
                borderRadius: 1,
                mb: { xs: 0.25, sm: 0.25, md: 0.25 }
              }} />
            )}
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
              color: 'primary.main',
              textAlign: 'center'
            }}>
              Início
            </Typography>
          </Box>

          {/* Botão de cursos - lado direito */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            flex: 1,
            position: 'relative'
          }}>
            <IconButton
              onClick={() => navigate('/cursos')}
              sx={{
                color: 'primary.main',
                width: { xs: 36, sm: 40, md: 44 },
                height: { xs: 36, sm: 40, md: 44 },
                mb: { xs: 0.25, sm: 0.25, md: 0.25 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Cursos"
            >
              <SchoolOutlined sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: 'inherit' }} />
            </IconButton>
            {location.pathname === '/cursos' && (
              <Box sx={{
                width: { xs: 30, sm: 32, md: 36 },
                height: 2,
                bgcolor: 'primary.main',
                borderRadius: 1,
                mb: { xs: 0.25, sm: 0.25, md: 0.25 }
              }} />
            )}
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
              color: 'primary.main',
              textAlign: 'center'
            }}>
              Cursos
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default BottomBar;