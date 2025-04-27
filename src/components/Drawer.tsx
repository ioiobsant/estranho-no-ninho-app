import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: <HomeIcon />, label: 'Início', path: '/' },
  { icon: <SchoolIcon />, label: 'Cursos', path: '/cursos' },
  { icon: <PersonIcon />, label: 'Para me formar', path: '/formar' },
  { icon: <SupportIcon />, label: 'Assistência', path: '/assistencia' },
  { icon: <CardMembershipIcon />, label: 'Carteirinhas', path: '/carteirinhas' },
  { icon: <AttachMoneyIcon />, label: 'Bolsas', path: '/bolsas' },
  { icon: <AssignmentIcon />, label: 'UFC', path: '/ufc' },
];

const SideDrawer = ({ open, onClose }: SideDrawerProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '75%',
          maxWidth: '280px',
          bgcolor: 'background.paper',
          borderRadius: '0 24px 24px 0',
          boxShadow: '0 0 30px rgba(0,0,0,0.15)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          overflow: 'hidden',
        },
      }}
      SlideProps={{
        timeout: 400,
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important',
        },
      }}
      transitionDuration={{ enter: 400, exit: 300 }}
    >
      {/* Header do Drawer */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          bgcolor: 'primary.main',
          color: 'white',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
          }
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Menu
        </Typography>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            color: 'white',
            transition: 'transform 0.2s ease',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.1)',
              transform: 'rotate(90deg)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Lista de itens */}
      <List sx={{ pt: 1 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleNavigation(item.path)}
            sx={{
              py: 1.5,
              px: 2,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                bgcolor: 'rgba(74, 144, 226, 0.08)',
                pl: 3,
                '& .MuiListItemIcon-root': {
                  transform: 'scale(1.1)',
                },
              },
              '&:active': {
                bgcolor: 'rgba(74, 144, 226, 0.12)',
              },
            }}
          >
            <ListItemIcon 
              sx={{ 
                color: 'primary.main', 
                minWidth: 40,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: { 
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer; 