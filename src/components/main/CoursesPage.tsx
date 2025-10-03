import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';

const CoursesPage = () => {
  const navigate = useNavigate();
  const { campus } = useCampus();

  if (campus === 'russas') {
    return <ConteudoIndisponivel />;
  }
  
  const courses = [
    { title: 'Ciências Econômicas', path: '/cursos/ciencias-economicas' },
    { title: 'Engenharia da Computação', path: '/cursos/engenharia-computacao' },
    { title: 'Engenharia Elétrica', path: '/cursos/engenharia-eletrica' },
    { title: 'Finanças', path: '/cursos/financas' },
    { title: 'Medicina', path: '/cursos/medicina' },
    { title: 'Música', path: '/cursos/musica' },
    { title: 'Odontologia', path: '/cursos/odontologia' },
    { title: 'Psicologia', path: '/cursos/psicologia' },
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
      {/* Header da página */}
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" color="primary" fontWeight="500">
          Cursos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore nossos cursos disponíveis
        </Typography>
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}>
        {courses.map((course, index) => (
          <React.Fragment key={index}>
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