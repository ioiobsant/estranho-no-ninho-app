import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { GradeCurricular } from '../types/gradeTypes';
import ConteudoIndisponivel from './ConteudoIndisponivel';

interface GradePageProps {
  grade: GradeCurricular | null;
  courseName?: string;
  campusName?: string;
}

const GradePage = ({ grade, courseName, campusName }: GradePageProps) => {
  if (!grade) {
    // Se tiver informações do curso e campus, mostra mensagem específica
    if (courseName && campusName) {
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
            <Typography variant="h6" color="primary" fontWeight="600" component="p">
              Grade Curricular - {courseName}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="1rem" component="p">
              Disciplinas e estrutura do curso
            </Typography>
          </Box>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom component="p">
              Curso Indisponível
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              Este curso não está disponível no campus {campusName} no momento.
            </Typography>
          </Box>
        </Box>
      );
    }
    return <ConteudoIndisponivel />;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Se grade em construção, mostrar mensagem
  if (grade.emConstrucao) {
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
            {grade.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {grade.subtitulo}
          </Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem' },
            color: 'text.secondary',
            textAlign: 'center',
            mt: 4
          }}>
            Em construção
          </Typography>
        </Box>
      </Box>
    );
  }

  const tableAriaLabel = grade.titulo ? `Grade curricular: ${grade.titulo}` : 'Grade curricular';
  const semesterIds = grade.semestres.map((_, index) => `semestre-${index + 1}`);
  const shortcutsContainerId = 'atalhos-semestres-container';

  useEffect(() => {
    const blurIfShortcutFocused = () => {
      const active = document.activeElement as HTMLElement | null;
      if (active && (active.closest(`#${shortcutsContainerId}`) || active.id === 'atalhos-semestres-header')) {
        active.blur();
      }
    };

    const frameId = requestAnimationFrame(() => {
      blurIfShortcutFocused();
      setTimeout(blurIfShortcutFocused, 0);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const scrollToSemester = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (element instanceof HTMLElement) {
        element.focus({ preventScroll: true });
      }
    }
  };

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
        <Typography variant="h6" color="primary" fontWeight="600" component="p">
          {grade.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem" component="p">
          {grade.subtitulo}
        </Typography>
      </Box>
 
      <Box sx={{ p: 3 }}> 
        <Accordion 
          square 
          disableGutters 
          defaultExpanded
          sx={{ 
            mb: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="atalhos-semestres-content"
            id="atalhos-semestres-header"
          >
            <Typography variant="body1" fontWeight={600}>
              Atalhos para semestres
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box 
              component="nav" 
              aria-label="Pular para semestre"
              id={shortcutsContainerId}
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5
              }}
            >
              {grade.semestres.map((semestre, index) => (
                <Button
                  key={semesterIds[index]}
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => scrollToSemester(semesterIds[index])}
                  aria-label={`Ir para ${semestre.nome}`}
                  disableRipple
                  disableFocusRipple
                  sx={{
                    borderColor: 'primary.dark',
                    color: 'primary.dark',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.dark',
                      color: 'white'
                    }
                  }}
                >
                  {semestre.nome}
                </Button>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>

        {grade.semestres.map((semestre, index) => (
          <Box 
            key={index} 
            id={semesterIds[index]}
            tabIndex={-1}
            role="region"
            aria-labelledby={`semestre-heading-${index}`}
            sx={{ mb: 4 }}
          > 
            <Typography 
              variant="h6" 
              color="primary" 
              fontWeight="600" //espessura título do Semestre.
              sx={{ mb: 2 }}
              component="p"
              id={`semestre-heading-${index}`}
            >
              {semestre.nome}
            </Typography>

            <TableContainer component={Paper} sx={{ mb: 3, overflow: 'hidden' }}>
              <Table aria-label={tableAriaLabel}>
                <TableHead>
                  <TableRow>
                    <TableCell  
                      component="th"
                      scope="col"
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem' //configs. do cabeçalho das tabelas (L 103-134)
                      }}
                    >
                      Matéria
                    </TableCell>
                    <TableCell 
                      component="th"
                      scope="col"
                      align="center"
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                    >
                      Carga Horária
                    </TableCell>
                    <TableCell 
                      component="th"
                      scope="col"
                      align="center"
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                    >
                      Créditos
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {semestre.disciplinas.map((disciplina, idx) => (
                    <TableRow 
                      key={idx}
                      sx={{
                        '&:nth-of-type(odd)': {
                          bgcolor: (theme) => theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'white'
                        },
                        '&:nth-of-type(even)': {
                          bgcolor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(33, 150, 243, 0.1)'
                            : 'rgba(33, 150, 243, 0.05)'
                        },
                        '&:hover': {
                          bgcolor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(33, 150, 243, 0.2)'
                            : 'rgba(33, 150, 243, 0.1)'
                        }
                      }}
                    > 
                      <TableCell sx={{ fontSize: '1rem' }}>{disciplina.materia}</TableCell> 
                      <TableCell align="center" sx={{ fontSize: '1rem' }}>{disciplina.horas}</TableCell>
                      <TableCell align="center" sx={{ fontSize: '1rem' }}>{disciplina.creditos}</TableCell>
                    </TableRow> 
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<KeyboardArrowUpIcon />}
            onClick={scrollToTop}
            sx={{ minWidth: 200 }}
            aria-label="Voltar ao topo da página"
          >
            Voltar ao Topo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GradePage;

