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

const GradeMusicaPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const primeiroSemestre = [
    { materia: 'Canto coral I', horas: '64h', creditos: '04CR' },
    { materia: 'Cultura e antropologia musical', horas: '32h', creditos: '02CR' },
    { materia: 'Fundamentos da educação', horas: '64h', creditos: '04CR' },
    { materia: 'Introdução a leitura de partituras (EAD)', horas: '16h', creditos: '01CR' },
    { materia: 'Linguagem e estruturação musical I', horas: '48h', creditos: '03CR' },
    { materia: 'Metodologia do trabalho acadêmico I', horas: '16h', creditos: '01CR' },
    { materia: 'Oficina de música', horas: '64h', creditos: '04CR' },
    { materia: 'Oficina de percussão I', horas: '32h', creditos: '02CR' }
  ];

  const segundoSemestre = [
    { materia: 'Canto coral II', horas: '64h', creditos: '04CR' },
    { materia: 'Estética', horas: '64h', creditos: '04CR' },
    { materia: 'Linguagem e estruturação musical II', horas: '64h', creditos: '04CR' },
    { materia: 'Metodologia do trabalho acadêmico II', horas: '32h', creditos: '02CR' },
    { materia: 'Produção de eventos musicais', horas: '16h', creditos: '01CR' },
    { materia: 'Psicologia do desenvolvimento', horas: '32h', creditos: '02CR' },
    { materia: 'Prática instrumental I', horas: '64h', creditos: '04CR' }
  ];

  const terceiroSemestre = [
    { materia: 'Canto coral III', horas: '64h', creditos: '04CR' },
    { materia: 'Didática', horas: '64h', creditos: '04CR' },
    { materia: 'Educação musical brasileira', horas: '32h', creditos: '02CR' },
    { materia: 'História da música I', horas: '32h', creditos: '02CR' },
    { materia: 'Linguagem e estruturação musical III', horas: '16h', creditos: '01CR' },
    { materia: 'Prática de ensino I', horas: '32h', creditos: '02CR' },
    { materia: 'Prática instrumental II', horas: '64h', creditos: '04CR' }
  ];

  const quartoSemestre = [
    { materia: 'Canto coral IV', horas: '64h', creditos: '04CR' },
    { materia: 'História da música II', horas: '32h', creditos: '02CR' },
    { materia: 'Linguagem e estruturação musical IV', horas: '64h', creditos: '04CR' },
    { materia: 'Prática de ensino II', horas: '32h', creditos: '02CR' },
    { materia: 'Prática instrumental III', horas: '64h', creditos: '04CR' },
    { materia: 'Técnica vocal', horas: '32h', creditos: '02CR' },
    { materia: 'Tópicos em cultura e antropologia musical', horas: '64h', creditos: '04CR' },
    { materia: 'Metodologias em educação musical I', horas: '32h', creditos: '02CR' }
  ];

  const quintoSemestre = [
    { materia: 'Estágio supervisionado I', horas: '100h', creditos: '07CR' },
    { materia: 'História da música III', horas: '32h', creditos: '02CR' },
    { materia: 'Língua brasileira de sinais (Libras)', horas: '64h', creditos: '04CR' },
    { materia: 'Linguagem e estruturação musical V', horas: '64h', creditos: '04CR' },
    { materia: 'Metodologias em educação musical II', horas: '32h', creditos: '02CR' },
    { materia: 'Pesquisa em música', horas: '64h', creditos: '04CR' },
    { materia: 'Regência', horas: '32h', creditos: '02CR' }
  ];

  const sextoSemestre = [
    { materia: 'Estágio supervisionado II', horas: '100h', creditos: '07CR' },
    { materia: 'Estrutura, política e gestão educacionais', horas: '64h', creditos: '04CR' },
    { materia: 'História da música IV', horas: '32h', creditos: '02CR' },
    { materia: 'Linguagem e estruturação musical VI', horas: '64h', creditos: '04CR' },
    { materia: 'Prática em conjunto I', horas: '32h', creditos: '02CR' },
    { materia: 'Seminário de TCC', horas: '8h', creditos: '01CR' },
    { materia: 'Prática de regência', horas: '32h', creditos: '02CR' }
  ];

  const setimoSemestre = [
    { materia: 'Estágio supervisionado III', horas: '100h', creditos: '07CR' },
    { materia: 'Prática de conjunto II', horas: '32h', creditos: '02CR' },
    { materia: 'Trabalho de conclusão de curso', horas: '96h', creditos: '06CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Unidade curricular de extensão', horas: '320h', creditos: '20CR' },
    { materia: 'Estágio supervisionado IV', horas: '100h', creditos: '06CR' },
    { materia: 'Atividades complementares', horas: '200h', creditos: '12CR' }
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
          Grade Curricular - Música
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Música
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

export default GradeMusicaPage;
