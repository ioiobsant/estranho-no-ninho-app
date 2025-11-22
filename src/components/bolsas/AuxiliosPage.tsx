import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import EmergencyIcon from '@mui/icons-material/Emergency';
import PaymentsIcon from '@mui/icons-material/Payments';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LoginIcon from '@mui/icons-material/Login';
import SchoolIcon from '@mui/icons-material/School';

interface AuxilioOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const AuxilioMenuItem = ({ option }: { option: AuxilioOption }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <ListItem disablePadding sx={{ mb: 1 }}>
      <ListItemButton
        onClick={option.onClick}
        sx={{
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          py: 1.5, // Aumenta área de toque para acessibilidade
          '&:hover': {
            bgcolor: 'action.hover',
            borderColor: 'primary.main',
            transform: 'translateY(-2px)',
            boxShadow: 2
          },
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
          {option.icon}
        </ListItemIcon>
        <ListItemText
          primary={option.title}
          secondary={option.description}
          primaryTypographyProps={{
            variant: 'body1',  // Herda: 18px, lineHeight 1.6, letterSpacing 0.02em (WCAG AA ✅)
            fontWeight: 500,
            color: 'text.primary'
          }}
          secondaryTypographyProps={{
            variant: 'body1',  // Usa body1 para garantir 18px (WCAG AA ✅)
            fontWeight: 400,   // Mais leve para diferenciar do título
            color: 'text.secondary',
            sx: {
              fontSize: '1rem',  // 16px - mínimo WCAG AA
              mt: 0.5  // Pequeno espaço entre título e descrição
            }
          }}
        />
      </ListItemButton>
    </ListItem>
  </motion.div>
);

const AuxiliosPage = () => {
  const navigate = useNavigate();

  const auxilioOptions: AuxilioOption[] = [
    {
      id: 'auxilio-moradia',
      title: 'Auxílio Moradia',
      description: 'Apoio financeiro para moradia estudantil',
      icon: <HomeIcon />,
      onClick: () => navigate('/bolsas/auxilios/moradia')
    },
    {
      id: 'auxilio-emergencial',
      title: 'Auxílio Emergencial',
      description: 'Apoio em situações de emergência',
      icon: <EmergencyIcon />,
      onClick: () => navigate('/bolsas/auxilios/emergencial')
    },
    {
      id: 'auxilio-custos',
      title: 'Auxílio de Custos',
      description: 'Apoio para despesas acadêmicas',
      icon: <PaymentsIcon />,
      onClick: () => navigate('/bolsas/auxilios/custos')
    },
    {
      id: 'auxilio-creche',
      title: 'Auxílio Creche',
      description: 'Apoio para mães e pais estudantes',
      icon: <ChildCareIcon />,
      onClick: () => navigate('/bolsas/auxilios/creche')
    },
    {
      id: 'auxilio-ingressante',
      title: 'Auxílio Ingressante',
      description: 'Apoio para estudantes recém-ingressos',
      icon: <LoginIcon />,
      onClick: () => navigate('/bolsas/auxilios/ingressante')
    },
    {
      id: 'auxilio-concludente',
      title: 'Auxílio Concludente',
      description: 'Apoio para estudantes em fase de conclusão',
      icon: <SchoolIcon />,
      onClick: () => navigate('/bolsas/auxilios/concludente')
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
      {/* Cabeçalho da página */}
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography 
          variant="h6" 
          color="primary" 
          fontWeight="500"
          sx={{ 
            fontSize: { xs: '1.25rem', sm: '1.5rem' }  // 20px → 24px (responsivo)
          }}
        >
          Auxílios
        </Typography>
        <Typography 
          variant="body1"  // Usa body1 (18px) em vez de body2 (14px) - WCAG AA ✅
          color="text.secondary"
        >
          Auxílios financeiros para estudantes
        </Typography>
      </Box>

      {/* Lista de opções */}
      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {auxilioOptions.map((option) => (
            <AuxilioMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AuxiliosPage;
