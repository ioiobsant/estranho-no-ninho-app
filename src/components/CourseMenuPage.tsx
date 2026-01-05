import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { useCampus } from '../contexts/CampusContext';
import { isCourseAvailableInCampus } from '../data';

interface CourseMenuPageProps {
  courseName: string;
  courseDescription: string;
  baseRoute: string;
}

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
        <ListItemText //Texto primário e segundário dos cursos. 
          primary={option.title}
          secondary={option.description}
          primaryTypographyProps={{ fontWeight: 600, fontSize: '1.125rem' }}
          secondaryTypographyProps={{ fontSize: '1rem' }}
        />
      </ListItemButton>
    </ListItem>
  </motion.div>
);

const CourseMenuPage = ({ courseName, courseDescription, baseRoute }: CourseMenuPageProps) => {
  const navigate = useNavigate();
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus atual
  const isAvailable = isCourseAvailableInCampus(baseRoute, campus);

  const courseOptions: CourseOption[] = [
    {
      id: 'coordenacao',
      title: 'Coordenação',
      description: 'Informações sobre coordenação do curso',
      icon: <PersonIcon />,
      onClick: () => navigate(`${baseRoute}/coordenacao`)
    },
    {
      id: 'grade',
      title: 'Grade Curricular',
      description: 'Disciplinas e estrutura do curso',
      icon: <SchoolIcon />,
      onClick: () => navigate(`${baseRoute}/grade`)
    }
  ];

  // Se o curso não estiver disponível no campus, exibe mensagem
  if (!isAvailable) {
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
          <Typography variant="h1" color="primary" fontWeight="600" fontSize="2rem" >
            {courseName}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize="1rem">
            {courseDescription}
          </Typography>
        </Box>
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Curso Indisponível
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Este curso não está disponível no campus {campusName} no momento.
          </Typography>
        </Box>
      </Box>
    );
  }

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
        <Typography variant="h1" color="primary" fontWeight="600" fontSize="2rem" aria-label={`${courseName}`}>
          {courseName} 
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          {courseDescription}
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

export default CourseMenuPage;

