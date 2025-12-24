import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science';
import SupportIcon from '@mui/icons-material/Support';
import SchoolIcon from '@mui/icons-material/School';
import ExtensionIcon from '@mui/icons-material/Extension';
import GroupIcon from '@mui/icons-material/Group';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import DescriptionIcon from '@mui/icons-material/Description';

interface BolsasOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const BolsasMenuItem = ({ option }: { option: BolsasOption }) => (
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
  </motion.div>
);

const BolsasPage = () => {
  const navigate = useNavigate();

  // Array com as opções do menu - fácil de manter e expandir
  const bolsasOptions: BolsasOption[] = [
    {
      id: 'iniciacao-cientifica',
      title: 'Bolsas de Iniciação Científica',
      description: 'Programas de iniciação científica e pesquisa',
      icon: <ScienceIcon />,
      onClick: () => navigate('/bolsas/iniciacao-cientifica')
    },
    {
      id: 'auxilios',
      title: 'Auxílios',
      description: 'Auxílios financeiros para estudantes',
      icon: <SupportIcon />,
      onClick: () => navigate('/bolsas/auxilios')
    },
    {
      id: 'pid',
      title: 'Programa de Inicialização à Docência (PID)',
      description: 'Programa de incentivo à docência',
      icon: <SchoolIcon />,
      onClick: () => navigate('/bolsas/pid')
    },
    {
      id: 'bolsas-extensao',
      title: 'Bolsas de Extensão',
      description: 'Bolsas para atividades de extensão universitária',
      icon: <ExtensionIcon />,
      onClick: () => navigate('/bolsas/extensao')
    },
    {
      id: 'paip',
      title: 'Programa de Acolhimento e Incentivo à Permanência (PAIP)',
      description: 'Programa de apoio à permanência estudantil',
      icon: <GroupIcon />,
      onClick: () => navigate('/bolsas/paip')
    },
    {
      id: 'pibic',
      title: 'Programa Institucional de Bolsas de Iniciação Científica (PIBIC)',
      description: 'Programa institucional de bolsas de pesquisa',
      icon: <PsychologyIcon />,
      onClick: () => navigate('/bolsas/pibic')
    },
    {
      id: 'internacionalizacao',
      title: 'Internacionalização',
      description: 'Programas de intercâmbio e internacionalização',
      icon: <PublicIcon />,
      onClick: () => navigate('/bolsas/internacionalizacao')
    },
    {
      id: 'editais',
      title: 'Editais de Bolsas e Auxílios',
      description: 'Editais e chamadas para bolsas e auxílios',
      icon: <DescriptionIcon />,
      onClick: () => navigate('/bolsas/editais')
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
        <Typography 
          variant="h1"  // tamanho do texto do cabeçalho padronizado. 
          color="primary"
          fontSize="2rem"
          fontWeight="600"> 
          Bolsas
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem"> 
          Oportunidades de bolsas e auxílios
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <List sx={{ px: 1 }}>
          {bolsasOptions.map((option) => (
            <BolsasMenuItem key={option.id} option={option} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BolsasPage; 