import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Train, 
  DirectionsBus, 
  School, 
  LocalShipping, 
  LocalTaxi 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Interface para definir a estrutura das opções
interface TransportesOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

// Componente reutilizável para cada item do menu
const TransportesMenuItem = ({ option }: { option: TransportesOption }) => {
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

const TransportesPage = () => {
  const navigate = useNavigate();

  // Array com as opções do menu - fácil de manter e expandir
  const transportesOptions: TransportesOption[] = [
    {
      id: 'vlt',
      title: 'VLT - Veículo Sobre Trilhos',
      description: 'Sistema de transporte sobre trilhos de Sobral',
      icon: <Train />,
      onClick: () => navigate('/transportes/vlt')
    },
    {
      id: 'passe-livre',
      title: 'Passe Livre',
      description: 'Intermunicipal e Interestadual',
      icon: <DirectionsBus />,
      onClick: () => navigate('/transportes/passe-livre')
    },
    {
      id: 'onibus-intracampus',
      title: 'Ônibus Intracampus',
      description: 'Transporte interno do campus da UFC',
      icon: <School />,
      onClick: () => navigate('/transportes/onibus-intracampus')
    },
    {
      id: 'passe-livre-sobral',
      title: 'Passe Livre Sobral',
      description: 'Transporte público municipal de Sobral',
      icon: <LocalShipping />,
      onClick: () => navigate('/transportes/passe-livre-sobral')
    },
    {
      id: 'taxi',
      title: 'Táxi',
      description: 'Serviço de táxi em Sobral',
      icon: <LocalTaxi />,
      onClick: () => navigate('/transportes/taxi')
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
          Transportes
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Opções de transporte em Sobral
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {transportesOptions.map((option) => (
            <TransportesMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TransportesPage; 