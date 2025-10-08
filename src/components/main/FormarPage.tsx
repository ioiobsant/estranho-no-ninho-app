import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  PersonAdd, 
  PauseCircle, 
  Grade, 
  EventBusy, 
  Assignment,
  School
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Interface para definir a estrutura das opções
interface FormarOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

// Componente reutilizável para cada item do menu
const FormarMenuItem = ({ option }: { option: FormarOption }) => {
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
            fontWeight: 600,
            color: 'text.primary'
          }}
          secondaryTypographyProps={{
            color: 'text.secondary',
            fontSize: '0.875rem'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

const FormarPage = () => {
  const navigate = useNavigate();

  // Array com as opções do menu - fácil de manter e expandir
  const formarOptions: FormarOption[] = [
    {
      id: 'matricula',
      title: 'Matrícula',
      description: 'Informações sobre matrícula e renovação',
      icon: <PersonAdd />,
      onClick: () => navigate('/formar/matricula')
    },
    {
      id: 'trancamentos',
      title: 'Trancamentos e Regime Especial',
      description: 'Informações sobre trancamento ou regime especial',
      icon: <PauseCircle />,
      onClick: () => navigate('/formar/trancamentos')
    },
    {
      id: 'notas',
      title: 'Notas',
      description: 'Informações sobre o cálculo de notas',
      icon: <Grade />,
      onClick: () => navigate('/formar/notas')
    },
    {
      id: 'faltas',
      title: 'Faltas',
      description: 'Informações sobre faltas e presença',
      icon: <EventBusy />,
      onClick: () => navigate('/formar/faltas')
    },
    {
      id: 'atividades',
      title: 'Atividades Complementares',
      description: 'Informações sobre atividades complementares',
      icon: <Assignment />,
      onClick: () => navigate('/formar/atividades-complementares')
    },
    {
      id: 'ira',
      title: 'IRA',
      description: 'Informações sobre IRA',
      icon: <School />,
      onClick: () => navigate('/formar/ira')
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
        <Typography variant="h6" color="primary" fontWeight="500">
          Para me formar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre formatura
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {formarOptions.map((option) => (
            <FormarMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FormarPage; 