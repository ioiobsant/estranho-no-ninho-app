import { Box, Grid as MuiGrid, Typography, useTheme, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: SchoolIcon, label: 'Cursos', path: '/cursos' },
  { icon: PersonIcon, label: 'Para me formar', path: '/formar' },
  { icon: SupportIcon, label: 'Assistência', path: '/assistencia' },
  { icon: CardMembershipIcon, label: 'Carteirinhas', path: '/carteirinhas' },
  { icon: AttachMoneyIcon, label: 'Bolsas', path: '/bolsas' },
  { icon: ArticleIcon, label: 'UFC', path: '/ufc' },
];

const MenuGrid = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        px: { xs: 2, sm: 3 },
        py: { xs: 1.5, sm: 2 },
        bgcolor: 'background.paper'
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
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: { xs: 3, sm: 4 },
          maxWidth: 'md',
          mx: 'auto'
        }}
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                onClick={() => navigate(item.path)}
                sx={{
                  width: '100%',
                  maxWidth: { xs: 100, sm: 120 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: { xs: 1.5, sm: 2 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 64, sm: 72 },
                    height: { xs: 64, sm: 72 },
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      bgcolor: 'primary.dark'
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  <Icon sx={{ 
                    fontSize: { xs: 32, sm: 36 }
                  }} />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 400,
                    lineHeight: 1.2,
                    textAlign: 'center',
                    width: '100%'
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