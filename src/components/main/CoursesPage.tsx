import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import React, { useMemo } from 'react';
import { useCampus } from '../../contexts/CampusContext';
import { cursosData } from '../../data';

const CoursesPage = () => {
  const navigate = useNavigate();
  const { campusName, campus } = useCampus();
  
  // Busca os cursos do campus selecionado - usa useMemo para garantir reatividade
  const courses = useMemo(() => {
    return cursosData[campus] || null;
  }, [campus]);
  
  // Se não houver cursos disponíveis para o campus, mostra mensagem
  if (!courses || courses.length === 0) {
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
          <Typography variant="h1" fontSize="2rem" color="primary" fontWeight="600">
          Cursos
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Explore nossos cursos disponíveis
        </Typography>
        </Box>
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Cursos Indisponíveis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Não há cursos disponíveis no campus {campusName} no momento.
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
      {/* Header da página */}
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h1" fontSize="2rem" color="primary" fontWeight="600">
          Cursos
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          Explore nossos cursos disponíveis
        </Typography>
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}>
        {courses.map((course, index) => (
          <React.Fragment key={`${campus}-${course.path}-${index}`}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <ListItem
                component="div"
                onClick={() => navigate(course.path)}
                sx={{
                  width: '100%',
                  py: 2,
                  px: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  '&:active': {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary={course.title}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                />
                <ArrowForwardIosIcon
                  sx={{ color: 'text.disabled', fontSize: 16 }}
                />
              </ListItem>
            </Box>
            {index < courses.length - 1 && (
              <Divider component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default CoursesPage; 