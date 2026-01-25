import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
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
  const currentValue = location.pathname === '/cursos' ? '/cursos' : location.pathname === '/' ? '/' : 'none';
  
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
        <BottomNavigation
          showLabels
          value={currentValue}
          aria-label="Barra de navegação inferior"
          sx={{
            height: '100%',
            bgcolor: 'transparent',
            alignItems: 'flex-start',
            px: 1,
            pt: { xs: 1.5, sm: 0.5, md: 0.5 },
          }}
        >
          <BottomNavigationAction
            value="back"
            onClick={handleVoltarClick}
            disabled={isHomePage}
            aria-label="Barra de navegação inferior: Voltar"
            icon={<ArrowBackOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />}
            label="Voltar"
            sx={{
              flex: 1,
              maxWidth: 'none',
              minHeight: 'auto',
              py: { xs: 0.7, sm: 0.9 },
              color: voltarClicked ? 'primary.main' : (!isHomePage ? 'primary.main' : 'grey.400'),
              transition: 'color 0.3s ease, background-color 0.2s ease',
              borderRadius: 2,
              opacity: isHomePage ? 0.7 : 1,
              '&.Mui-disabled': {
                color: 'grey.400',
              },
              '& .MuiBottomNavigationAction-wrapper': {
                gap: { xs: 0.65, sm: 0.9 },
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                textAlign: 'center',
              },
            }}
          />
          <BottomNavigationAction
            value="/"
            onClick={() => !isHomePage && navigate('/')}
            disabled={isHomePage}
            aria-label="Barra de navegação inferior: Início"
            icon={<HomeOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />}
            label="Início"
            sx={{
              flex: 1,
              maxWidth: 'none',
              minHeight: 'auto',
              py: { xs: 0.7, sm: 0.9 },
              color: 'primary.main',
              borderRadius: 2,
              '&.Mui-disabled': {
                color: 'primary.main',
              },
              '& .MuiBottomNavigationAction-wrapper': {
                gap: { xs: 0.65, sm: 0.9 },
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                textAlign: 'center',
                position: 'relative',
              },
              '&.Mui-selected .MuiBottomNavigationAction-label::after': {
                content: '""',
                display: 'block',
                width: { xs: 30, sm: 32, md: 36 },
                height: 2,
                bgcolor: 'primary.main',
                borderRadius: 1,
                margin: '6px auto 0',
              },
            }}
          />
          <BottomNavigationAction
            value="/cursos"
            onClick={() => navigate('/cursos')}
            aria-label="Barra de navegação inferior: Cursos"
            icon={<SchoolOutlined sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, color: 'inherit' }} />}
            label="Cursos"
            sx={{
              flex: 1,
              maxWidth: 'none',
              minHeight: 'auto',
              py: { xs: 0.7, sm: 0.9 },
              color: 'primary.main',
              borderRadius: 2,
              '& .MuiBottomNavigationAction-wrapper': {
                gap: { xs: 0.65, sm: 0.9 },
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: { xs: '0.84rem', sm: '0.9rem', md: '0.95rem' },
                textAlign: 'center',
                position: 'relative',
              },
              '&.Mui-selected .MuiBottomNavigationAction-label::after': {
                content: '""',
                display: 'block',
                width: { xs: 30, sm: 32, md: 36 },
                height: 2,
                bgcolor: 'primary.main',
                borderRadius: 1,
                margin: '6px auto 0',
              },
            }}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomBar;