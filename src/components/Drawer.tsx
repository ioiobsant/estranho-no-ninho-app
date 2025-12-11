import { Drawer as MuiDrawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, IconButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
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
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: HomeIcon, label: 'Início', path: '/' },
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

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const SideDrawer = ({ open, onClose }: DrawerProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerId = 'menu-lateral';

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <MuiDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        id: drawerId,
        sx: {
          width: { xs: '280px', sm: '320px' },
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider'
        },
        role: undefined,
        'aria-labelledby': 'menu-lateral-titulo',
        'aria-label': 'Menu lateral'
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1
          }}
        >
          <Typography
            component="p"
            variant="h6"
            id="menu-lateral-titulo"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '1.5rem', sm: '1.5rem' },
              fontWeight: 600,
              m: 0
            }}
          >
            Menu lateral
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label="Fechar menu lateral"
            size="small"
            sx={{
              color: 'text.primary',
              ml: 1
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <List
          component="nav"
          aria-label="Navegação principal"
          sx={{
            flex: 1,
            p: { xs: 1, sm: 2 }
          }}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ListItemButton
                key={index}
                onClick={() => handleItemClick(item.path)}
                aria-label={`Ir para ${item.label}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                role="link"
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: { xs: '40px', sm: '48px' },
                    color: 'primary.main'
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: { xs: '1.2rem', sm: '1.2rem' }, //aqui é o tamanho do texto das opções do menu lateral. 
                      fontWeight: 500,
                      color: 'text.primary'
                    }
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default SideDrawer; 