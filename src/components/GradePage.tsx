import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { GradeCurricular } from '../types/gradeTypes';
import ConteudoIndisponivel from './ConteudoIndisponivel';

interface GradePageProps {
  grade: GradeCurricular | null;
}

const GradePage = ({ grade }: GradePageProps) => {
  if (!grade) {
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
        <Typography variant="h6" color="primary" fontWeight="600">
          {grade.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          {grade.subtitulo}
        </Typography>
      </Box>
 
      <Box sx={{ p: 3 }}> 
        {grade.semestres.map((semestre, index) => (
          <Box key={index} sx={{ mb: 4 }}> 
            <Typography 
              variant="h6" 
              color="primary" 
              fontWeight="600" //espessura título do Semestre.
              sx={{ mb: 2 }}
            >
              {semestre.nome}
            </Typography>

            <TableContainer component={Paper} sx={{ mb: 3, overflow: 'hidden' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell  
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
          >
            Voltar ao Topo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GradePage;

