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
import ShareIcon from '@mui/icons-material/Share';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
  { icon: ShareIcon, label: 'Compartilhar', path: '/compartilhar' },
  { icon: MenuBookIcon, label: 'Regimentos, Manuais e Outros', path: '/regimentos' },
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
      //component="nav"
      role="navigation"
      aria-label="Atalhos Principais"
      sx={{  
        px: { xs: 2, sm: 3 },  //padding do container. 
        py: { xs: 3, sm: 6 },
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
        <Typography // aqui define o tamanho do texto do título do menu.
          variant="h6"
          component="p"
          aria-label="Navegação rápida"
          sx={{
            fontSize: { xs: '1.8rem', sm: '1.5rem' },
            fontWeight: 600,
            color: 'text.primary',
            mb: { xs: 5, sm: 3 },
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
            gridTemplateColumns: 'repeat(3, 1fr)', // mantém 3 colunas em todas as larguras
            gap: { xs: 2, sm: 2.5, md: 3 },
            maxWidth: 960,
            mx: 'auto',
            columnGap: { xs: 1.5, sm: 2.5 }
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
                    aria-label={`Ir para ${item.label}`}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 92, sm: 104, md: 110 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: { xs: 0.75, sm: 1.25 },
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
                        width: { xs: 60, sm: 62, md: 64 }, //tamanho do container do ícone. (largura)
                        height: { xs: 52, sm: 58, md: 60 }, // (altura) 
                        borderRadius: { xs: 2.5, sm: 2.5 }, // arredondamento. 
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: (theme) => theme.palette.mode === 'dark'
                          ? '0 2px 8px rgba(0,0,0,0.3)'
                          : '0 2px 8px rgba(0,0,0,0.1)',
                        mt: { xs: -1.2, sm: -0.8, md: -0.6 } // sobe um pouco mais o ícone
                      }}
                    >
                      <Icon sx={{ 
                        fontSize: { xs: 30, sm: 48, md: 54 } //tamanho dos ícones. 
                      }} />
                    </Box>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' }, //aqui é o tamanho do texto do botão.
                        fontWeight: 500,
                        lineHeight: 1.15,
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