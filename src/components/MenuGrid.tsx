import { Box, Typography, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: SchoolIcon, label: 'Cursos', path: '/cursos' },
  { icon: PersonIcon, label: 'Para me formar', path: '/formar' },
  { icon: SupportIcon, label: 'Assistência', path: '/assistencia' },
  { icon: CardMembershipIcon, label: 'Carteirinhas', path: '/carteirinhas' },
  { icon: AttachMoneyIcon, label: 'Bolsas', path: '/bolsas' },
  { icon: ArticleIcon, label: 'UFC', path: '/ufc' },
  { icon: AccessibilityIcon, label: 'Mapa Acessível', path: '/mapa' },
  { icon: LocalLibraryIcon, label: 'Bibliotecas', path: '/bibliotecas' },
  { icon: DirectionsBusIcon, label: 'Transportes', path: '/transportes' },
  { icon: LinkIcon, label: 'Links Úteis', path: '/links-uteis' },
  { icon: MenuBookIcon, label: 'Regimentos, Manuais e Outros', path: '/regimentos' },
  { icon: RssFeedIcon, label: 'RSS', path: '/rss' },
];

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

const MenuGrid = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        bgcolor: 'background.paper',
        position: 'relative',
        zIndex: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            fontWeight: 600,
            color: 'text.primary',
            mb: { xs: 3, sm: 4 },
            textAlign: 'center'
          }}
        >
          Navegação rápida
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: { xs: 2, sm: 3 },
            maxWidth: 'lg',
            mx: 'auto'
          }}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Button
                    onClick={() => navigate(item.path)}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 90, sm: 110 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: { xs: 1, sm: 1.5 },
                      padding: 0,
                      textTransform: 'none',
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '& > div': {
                          transform: 'translateY(-4px) scale(1.1)',
                          bgcolor: 'primary.dark',
                          boxShadow: (theme) => theme.palette.mode === 'dark'
                            ? '0 4px 12px rgba(0,0,0,0.4)'
                            : '0 4px 12px rgba(0,0,0,0.15)'
                        }
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        '& > div': {
                          transform: 'translateY(0) scale(0.95)',
                          bgcolor: 'primary.dark'
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 56, sm: 64 },
                        height: { xs: 56, sm: 64 },
                        borderRadius: { xs: 2, sm: 2.5 },
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: (theme) => theme.palette.mode === 'dark'
                          ? '0 2px 8px rgba(0,0,0,0.3)'
                          : '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Icon sx={{ 
                        fontSize: { xs: 28, sm: 52 }
                      }} />
                    </Box>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        textAlign: 'center',
                        width: '100%',
                        transition: 'color 0.2s ease-in-out'
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Button>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </motion.div>
    </Box>
  );
};

export default MenuGrid;