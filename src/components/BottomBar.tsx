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
          height: { xs: '110px', sm: '110px', md: '110px' }
        }}
        elevation={3}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          height: '100%',
          px: 1
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
                width: { xs: 50, sm: 56, md: 60 },
                height: { xs: 50, sm: 56, md: 60 },
                mb: { xs: 2, sm: 2.5, md: 3 }
              }}
              aria-label="Voltar"
            >
              <ArrowBackOutlined sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'inherit' }} />
            </IconButton>
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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
                width: { xs: 50, sm: 56, md: 60 },
                height: { xs: 50, sm: 56, md: 60 },
                mb: { xs: 0.5, sm: 0.5, md: 0.5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Início"
            >
              <HomeOutlined sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'inherit' }} />
            </IconButton>
            {isHomePage && (
              <Box sx={{
                width: { xs: 40, sm: 44, md: 48 },
                height: 3,
                bgcolor: 'primary.main',
                borderRadius: 1.5,
                mb: { xs: 1, sm: 1.5, md: 2 }
              }} />
            )}
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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
                width: { xs: 50, sm: 56, md: 60 },
                height: { xs: 50, sm: 56, md: 60 },
                mb: { xs: 0.5, sm: 0.5, md: 0.5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Cursos"
            >
              <SchoolOutlined sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'inherit' }} />
            </IconButton>
            {location.pathname === '/cursos' && (
              <Box sx={{
                width: { xs: 40, sm: 44, md: 48 },
                height: 3,
                bgcolor: 'primary.main',
                borderRadius: 1.5,
                mb: { xs: 1, sm: 1.5, md: 2 }
              }} />
            )}
            <Typography variant="caption" sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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