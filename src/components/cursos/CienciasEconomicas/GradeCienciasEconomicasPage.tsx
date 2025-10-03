import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// padronização do estilo da aplicação
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};

const GradeCienciasEconomicasPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const primeiroSemestre = [
    { materia: 'Introdução a economia', horas: '64h', creditos: '04CR' },
    { materia: 'Economia e contabilidade', horas: '64h', creditos: '04CR' },
    { materia: 'Metodologia do trabalho científico', horas: '64h', creditos: '04CR' },
    { materia: 'Economia matemática I', horas: '64h', creditos: '04CR' },
    { materia: 'Estatística econômica I', horas: '64h', creditos: '04CR' }
  ];

  const segundoSemestre = [
    { materia: 'Economia e sociedade', horas: '64h', creditos: '04CR' },
    { materia: 'Economia e administração', horas: '64h', creditos: '04CR' },
    { materia: 'Contabilidade nacional', horas: '64h', creditos: '04CR' },
    { materia: 'Estatística econômica II', horas: '64h', creditos: '04CR' },
    { materia: 'Economia matemática II', horas: '64h', creditos: '04CR' }
  ];

  const terceiroSemestre = [
    { materia: 'Macroeconomia I', horas: '64h', creditos: '04CR' },
    { materia: 'Microeconomia', horas: '64h', creditos: '04CR' },
    { materia: 'Economia dinâmica', horas: '64h', creditos: '04CR' },
    { materia: 'História econômica geral', horas: '64h', creditos: '04CR' },
    { materia: 'Álgebra linear', horas: '64h', creditos: '04CR' }
  ];

  const quartoSemestre = [
    { materia: 'Macroeconomia II', horas: '64h', creditos: '04CR' },
    { materia: 'Métodos computacionais aplicados', horas: '64h', creditos: '04CR' },
    { materia: 'Microeconomia II', horas: '64h', creditos: '04CR' },
    { materia: 'Econometria I', horas: '64h', creditos: '04CR' },
    { materia: 'Histórias do pensamento econômico', horas: '64h', creditos: '04CR' }
  ];

  const quintoSemestre = [
    { materia: 'Macroeconomia III', horas: '64h', creditos: '04CR' },
    { materia: 'Microeconomia III', horas: '64h', creditos: '04CR' },
    { materia: 'Engenharia econômica e financeira', horas: '64h', creditos: '04CR' },
    { materia: 'Econometria II', horas: '64h', creditos: '04CR' },
    { materia: 'História econômica do Brasil', horas: '64h', creditos: '04CR' }
  ];

  const sextoSemestre = [
    { materia: 'Economia e direito', horas: '64h', creditos: '04CR' },
    { materia: 'Economia Brasileira e contemporânea', horas: '64h', creditos: '04CR' },
    { materia: 'Economia agrícola e do meio ambiente', horas: '64h', creditos: '04CR' },
    { materia: 'Economia do desenvolvimento', horas: '64h', creditos: '04CR' },
    { materia: 'Economia pública', horas: '64h', creditos: '04CR' }
  ];

  const setimoSemestre = [
    { materia: 'Economia regional e urbana', horas: '64h', creditos: '04CR' },
    { materia: 'Monografia I', horas: '128h', creditos: '08CR' },
    { materia: 'Projetos', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 1', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 2', horas: '64h', creditos: '04CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Economia do nordeste', horas: '64h', creditos: '04CR' },
    { materia: 'Economia internacional', horas: '64h', creditos: '04CR' },
    { materia: 'Monografia II', horas: '192h', creditos: '08CR' },
    { materia: 'Atividades complementares', horas: '320h', creditos: '20CR' }
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
          Grade Curricular - Ciências Econômicas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Ciências Econômicas
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>1º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {primeiroSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>2º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 2º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {segundoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>3º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 3º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {terceiroSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>4º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 4º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quartoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>5º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 5º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quintoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>6º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 6º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sextoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>7º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 7º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {setimoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>8º Semestre</Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              mt: 2, 
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <Table 
              sx={{ 
                width: '100%',
                tableLayout: 'fixed'
              }} 
              aria-label="grade curricular 8º semestre"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '60%',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Matéria
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Horas
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    Créditos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {oitavoSemestre.map((disciplina, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.selected'
                      }
                    }}
                  >
                    <TableCell 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        wordWrap: 'break-word'
                      }}
                    >
                      {disciplina.materia}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.horas}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {disciplina.creditos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4, 
          mb: 2 
        }}>
          <Typography
            onClick={scrollToTop}
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 400,
              '&:hover': {
                color: 'primary.dark',
                textDecoration: 'underline'
              },
              transition: 'color 0.2s ease-in-out'
            }}
          >
            Voltar para o Topo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GradeCienciasEconomicasPage;
