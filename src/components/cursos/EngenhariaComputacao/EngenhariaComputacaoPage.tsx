import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

interface CourseOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const CourseMenuItem = ({ option }: { option: CourseOption }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <ListItem disablePadding>
      <ListItemButton onClick={option.onClick} sx={{ py: 2 }}>
        <ListItemIcon sx={{ color: 'primary.main' }}>
          {option.icon}
        </ListItemIcon>
        <ListItemText
          primary={option.title}
          secondary={option.description}
          primaryTypographyProps={{ fontWeight: 600 }}
        />
      </ListItemButton>
    </ListItem>
  </motion.div>
);

const EngenhariaComputacaoPage = () => {
  const navigate = useNavigate();

  const courseOptions: CourseOption[] = [
    {
      id: 'coordenacao',
      title: 'Coordenação',
      description: 'Informações sobre coordenação do curso',
      icon: <PersonIcon />,
      onClick: () => navigate('/cursos/engenharia-computacao/coordenacao')
    },
    {
      id: 'grade',
      title: 'Grade Curricular',
      description: 'Disciplinas e estrutura do curso',
      icon: <SchoolIcon />,
      onClick: () => navigate('/cursos/engenharia-computacao/grade')
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
          Engenharia da Computação
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre o curso de Engenharia da Computação
        </Typography>
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {courseOptions.map((option) => (
          <CourseMenuItem key={option.id} option={option} />
        ))}
      </List>
    </Box>
  );
};

export default EngenhariaComputacaoPage;
