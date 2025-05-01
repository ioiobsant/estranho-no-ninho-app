import { Drawer as MuiDrawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: HomeIcon, label: 'Início', path: '/' },
  { icon: SchoolIcon, label: 'Cursos', path: '/cursos' },
  { icon: PersonIcon, label: 'Para me formar', path: '/formar' },
  { icon: SupportIcon, label: 'Assistência', path: '/assistencia' },
  { icon: CardMembershipIcon, label: 'Carteirinhas', path: '/carteirinhas' },
  { icon: AttachMoneyIcon, label: 'Bolsas', path: '/bolsas' },
  { icon: ArticleIcon, label: 'UFC', path: '/ufc' },
];

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const SideDrawer = ({ open, onClose }: DrawerProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        sx: {
          width: { xs: '280px', sm: '320px' },
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider'
        }
      }}
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
            borderColor: 'divider'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 600
            }}
          >
            Menu
          </Typography>
        </Box>

        <List
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
                      fontSize: { xs: '0.875rem', sm: '1rem' },
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