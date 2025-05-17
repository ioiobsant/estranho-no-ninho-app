import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: SchoolIcon, label: 'Cursos', path: '/cursos' },
  { icon: PersonIcon, label: 'Para me formar', path: '/formar' },
  { icon: SupportIcon, label: 'Assistência', path: '/assistencia' },
  { icon: CardMembershipIcon, label: 'Carteirinhas', path: '/carteirinhas' },
  { icon: AttachMoneyIcon, label: 'Bolsas', path: '/bolsas' },
  { icon: ArticleIcon, label: 'UFC', path: '/ufc' },
  { icon: AccessibleIcon, label: 'Mapa Acessível', path: '/mapa' },
];

const MenuGrid = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleIconClick = (path: string) => {
    console.log('Navegando para:', path);
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Box 
      sx={{ 
        px: { xs: 2, sm: 3 },
        py: { xs: 1.5, sm: 2 },
        bgcolor: 'background.paper',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          fontWeight: 500,
          color: 'text.primary',
          mb: { xs: 3, sm: 4 }
        }}
      >
        Navegação rápida
      </Typography>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: { xs: 3, sm: 4 },
          maxWidth: 'md',
          mx: 'auto',
          position: 'relative',
          zIndex: 2
        }}
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Box
              key={index}
              component={motion.div}
              variants={itemVariants}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 3
              }}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleIconClick(item.path)}
                sx={{
                  width: '100%',
                  maxWidth: { xs: 100, sm: 120 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: { xs: 1.5, sm: 2 },
                  cursor: 'pointer',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  zIndex: 4,
                  '&:hover': {
                    '& .icon-box': {
                      bgcolor: 'primary.dark',
                      boxShadow: '0 12px 24px rgba(33, 150, 243, 0.4)'
                    },
                    '& .icon-text': {
                      color: 'primary.main',
                      fontWeight: 500
                    }
                  }
                }}
              >
                <Box
                  className="icon-box"
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  sx={{
                    width: { xs: 64, sm: 72 },
                    height: { xs: 64, sm: 72 },
                    borderRadius: '50%',
                    bgcolor: isActive ? 'primary.dark' : 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isActive 
                      ? '0 8px 16px rgba(33, 150, 243, 0.3)'
                      : '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <Icon sx={{ 
                    fontSize: { xs: 32, sm: 36 }
                  }} />
                </Box>
                <Typography
                  className="icon-text"
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  variant="body1"
                  sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: isActive ? 500 : 400,
                    lineHeight: 1.2,
                    textAlign: 'center',
                    width: '100%',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MenuGrid;