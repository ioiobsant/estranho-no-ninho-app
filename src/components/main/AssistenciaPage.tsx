import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Accessibility, 
  School, 
  Psychology 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Interface para definir a estrutura das opções
interface AssistenciaOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

// Componente reutilizável para cada item do menu
const AssistenciaMenuItem = ({ option }: { option: AssistenciaOption }) => {
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
          primaryTypographyProps={{ // config. dos textos do menu Assistencia. 
            fontWeight: 500, // espessura da fonte padrao.
            color: 'text.primary',
            fontSize: '1.125rem' //tamanho padrao. 
          }}
          secondaryTypographyProps={{
            color: 'text.secondary',
            fontSize: '1rem' //descricao do menu Assistencia.
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

const AssistenciaPage = () => {
  const navigate = useNavigate();

  // Array com as opções do menu - fácil de manter e expandir
  const assistenciaOptions: AssistenciaOption[] = [
    {
      id: 'acessibilidade',
      title: 'Acessibilidade',
      description: 'Recursos e suporte para estudantes com necessidades especiais',
      icon: <Accessibility />,
      onClick: () => navigate('/assistencia/acessibilidade')
    },
    {
      id: 'estudantil',
      title: 'Assistência Estudantil (PRAE)',
      description: 'Programa de Assistência Estudantil da UFC',
      icon: <School />,
      onClick: () => navigate('/assistencia/estudantil')
    },
    {
      id: 'psicologica',
      title: 'Assistência Psicológica',
      description: 'Suporte psicológico para estudantes da UFC',
      icon: <Psychology />,
      onClick: () => navigate('/assistencia/psicologica')
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
          Assistência
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Suporte e auxílio estudantil
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {assistenciaOptions.map((option) => (
            <AssistenciaMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AssistenciaPage; 