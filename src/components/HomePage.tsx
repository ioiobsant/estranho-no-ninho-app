import { Box, Paper, Typography, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import bannerImage from '../assets/banner.jpg';

const MenuButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '110px', // Altura fixa para todos os botões
      width: '100%',
      maxWidth: '100px', // Largura máxima para manter proporção
      margin: '0 auto',
    }}
  >
    <Paper
      elevation={2}
      sx={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A90E2',
        color: 'white',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 10px rgba(74, 144, 226, 0.3)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
        mb: 1.5, // Espaçamento consistente para o texto
      }}
    >
      {icon}
    </Paper>
    <Typography 
      variant="caption" 
      align="center" 
      sx={{ 
        fontSize: '0.75rem',
        color: '#333',
        fontWeight: 500,
        width: '100%',
        lineHeight: 1.2,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '2.4em', // Altura fixa para 2 linhas
      }}
    >
      {label}
    </Typography>
  </Box>
);

const HomePage = () => {
  const menuItems = [
    { icon: <SchoolIcon sx={{ fontSize: 30 }} />, label: 'Cursos' },
    { icon: <PersonIcon sx={{ fontSize: 30 }} />, label: 'Para me formar' },
    { icon: <SupportIcon sx={{ fontSize: 30 }} />, label: 'Assistência' },
    { icon: <CardMembershipIcon sx={{ fontSize: 30 }} />, label: 'Carteirinhas' },
    { icon: <AttachMoneyIcon sx={{ fontSize: 30 }} />, label: 'Bolsas' },
    { icon: <AssignmentIcon sx={{ fontSize: 30 }} />, label: 'UFC' },
  ];

  return (
    <Box sx={{ pt: 7, pb: 8, bgcolor: '#fff' }}>
      {/* Banner */}
      <Box
        sx={{
          height: 220,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1
          }
        }}
      >
        <Box
          component="img"
          src={bannerImage}
          alt="Estudantes formandos"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            zIndex: 2,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Typography variant="h5" color="white" fontWeight="600" gutterBottom>
            Estude no exterior
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.9)">
            Realize seu sonho de estudar fora do país
          </Typography>
        </Box>
      </Box>

      {/* Grid de ícones */}
      <Container 
        maxWidth="xs" 
        sx={{ 
          mt: 4,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 3,
            px: 2,
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <MenuButton icon={item.icon} label={item.label} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage; 