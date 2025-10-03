import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// padronização do estilo da aplicação
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};

const GradeFinancasPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const primeiroSemestre = [
    { materia: 'Introdução à economia', horas: '64h', creditos: '04CR' },
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
    { materia: 'Economia brasileira contemporânea', horas: '64h', creditos: '04CR' },
    { materia: 'Finanças internacionais', horas: '64h', creditos: '04CR' },
    { materia: 'Economia e incerteza', horas: '64h', creditos: '04CR' },
    { materia: 'Finanças públicas', horas: '64h', creditos: '04CR' },
    { materia: 'Investimentos I', horas: '64h', creditos: '04CR' }
  ];

  const setimoSemestre = [
    { materia: 'Finanças corporativas', horas: '64h', creditos: '04CR' },
    { materia: 'Investimentos II', horas: '64h', creditos: '04CR' },
    { materia: 'Monografia I', horas: '128h', creditos: '08CR' },
    { materia: 'Séries temporais', horas: '64h', creditos: '04CR' },
    { materia: 'Mercado de capitais I', horas: '64h', creditos: '04CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Análise gráfica do mercado financeiro', horas: '64h', creditos: '04CR' },
    { materia: 'Teoria da decisão', horas: '64h', creditos: '04CR' },
    { materia: 'Monografia II', horas: '192h', creditos: '08CR' },
    { materia: 'Atividades complementares', horas: '144h', creditos: '09CR' }
  ];

  const renderSemesterTable = (semester: any[], title: string, ariaLabel: string) => (
    <Box sx={sectionBoxSx}>
      <Typography {...sectionTitleProps}>{title}</Typography>
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
          aria-label={ariaLabel}
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
            {semester.map((disciplina, index) => (
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
  );

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
          Grade Curricular - Finanças
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Finanças
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        {renderSemesterTable(primeiroSemestre, '1º Semestre', 'grade curricular 1º semestre')}
        {renderSemesterTable(segundoSemestre, '2º Semestre', 'grade curricular 2º semestre')}
        {renderSemesterTable(terceiroSemestre, '3º Semestre', 'grade curricular 3º semestre')}
        {renderSemesterTable(quartoSemestre, '4º Semestre', 'grade curricular 4º semestre')}
        {renderSemesterTable(quintoSemestre, '5º Semestre', 'grade curricular 5º semestre')}
        {renderSemesterTable(sextoSemestre, '6º Semestre', 'grade curricular 6º semestre')}
        {renderSemesterTable(setimoSemestre, '7º Semestre', 'grade curricular 7º semestre')}
        {renderSemesterTable(oitavoSemestre, '8º Semestre', 'grade curricular 8º semestre')}

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

export default GradeFinancasPage;
