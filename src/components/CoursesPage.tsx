import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

const CoursesPage = () => {
  const courses = [
    { title: 'Graduação', subtitle: 'Cursos de graduação disponíveis' },
    { title: 'Pós-graduação', subtitle: 'Especializações e mestrados' },
    { title: 'Extensão', subtitle: 'Cursos de curta duração' },
    { title: 'Idiomas', subtitle: 'Cursos de línguas estrangeiras' },
    { title: 'Certificações', subtitle: 'Certificações profissionais' },
  ];

  return (
    <Box sx={{ pt: 7, pb: 8, bgcolor: '#fff', minHeight: '100vh', width: '100vw', maxWidth: '100vw', margin: 0, px: 0 }}>
      {/* Header da página */}
      <Box sx={{ px: 3, py: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <Typography variant="h6" color="primary" fontWeight="500">
          Cursos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore nossos cursos disponíveis
        </Typography>
      </Box>

      {/* Lista de cursos */}
      <List sx={{ width: '100vw', bgcolor: 'background.paper', padding: 0 }}>
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
                sx={{
                  width: '100%',
                  py: 2,
                  px: 3,
                  cursor: 'pointer',
                  '&:active': {
                    bgcolor: 'rgba(74, 144, 226, 0.1)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#4A90E2' }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary={course.title}
                  secondary={course.subtitle}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                  }}
                />
                <ArrowForwardIosIcon
                  sx={{ color: 'rgba(0,0,0,0.3)', fontSize: 16 }}
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