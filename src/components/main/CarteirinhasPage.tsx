import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  School, 
  Restaurant, 
  CardMembership 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Interface para definir a estrutura das opções
interface CarteirinhasOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

// Componente reutilizável para cada item do menu
const CarteirinhasMenuItem = ({ option }: { option: CarteirinhasOption }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton 
        onClick={option.onClick}
        role="button"
        tabIndex={0}
        aria-label={`${option.title}: ${option.description}`}
        sx={{
          borderRadius: 2,
          mb: 1,
          py: 2,
          px: 2,
          '&:hover': {
            bgcolor: 'action.hover',
            transform: 'translateY(-1px)',
            boxShadow: 2
          },
          '&:focus': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2
          },
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
          {option.icon}
        </ListItemIcon>
        <ListItemText
          primary={option.title}
          secondary={option.description}
          primaryTypographyProps={{
            fontWeight: 500,
            color: 'text.primary',
            fontSize: '18px'
          }}
          secondaryTypographyProps={{
            color: 'text.secondary',
            fontSize: '1rem'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

const CarteirinhasPage = () => {
  const navigate = useNavigate();

  // Array com as opções do menu - fácil de manter e expandir
  const carteirinhasOptions: CarteirinhasOption[] = [
    {
      id: 'estudantil',
      title: 'Carteira Estudantil',
      description: 'Documento de identificação estudantil',
      icon: <School />,
      onClick: () => navigate('/carteirinhas/estudantil')
    },
    {
      id: 'ru',
      title: 'Carteira do R.U',
      description: 'Acesso ao Restaurante Universitário',
      icon: <Restaurant />,
      onClick: () => navigate('/carteirinhas/ru')
    },
    {
      id: 'id-jovem',
      title: 'ID Jovem',
      description: 'Identidade Jovem - Benefícios para estudantes',
      icon: <CardMembership />,
      onClick: () => navigate('/carteirinhas/id-jovem')
    }
  ];

  return (
    <Box sx={{ 
      pt: 1, 
      pb: 8, 
      bgcolor: 'background.paper', 
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      overflowX: 'hidden'
    }}>
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h1" color="primary" fontWeight="600" fontSize="2rem">
          Carteirinhas
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Documentos e identificações estudantis
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {carteirinhasOptions.map((option) => (
            <CarteirinhasMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CarteirinhasPage; 