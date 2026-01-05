import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Business, 
  School, 
  Science,
  Extension
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface UfcOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const UfcMenuItem = ({ option }: { option: UfcOption }) => {
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
            fontSize: '1.125rem'
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

const UfcPage = () => {
  const navigate = useNavigate();

  const ufcOptions: UfcOption[] = [
    {
      id: 'direcao',
      title: 'Direção',
      description: 'Direção do Campus',
      icon: <Business />,
      onClick: () => navigate('/ufc/direcao')
    },
    {
      id: 'ensino',
      title: 'Ensino',
      description: 'Coordenação de Ensino',
      icon: <School />,
      onClick: () => navigate('/ufc/ensino')
    },
    {
      id: 'pesquisa',
      title: 'Pesquisa',
      description: 'Coordenação de Pesquisa',
      icon: <Science />,
      onClick: () => navigate('/ufc/pesquisa')
    },
    {
      id: 'extensao',
      title: 'Extensão',
      description: 'Coordenação de Extensão',
      icon: <Extension />,
      onClick: () => navigate('/ufc/extensao')
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
          UFC
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Informações institucionais
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {ufcOptions.map((option) => (
            <UfcMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UfcPage;
