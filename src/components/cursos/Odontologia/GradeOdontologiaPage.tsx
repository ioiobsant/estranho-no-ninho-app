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

const GradeOdontologiaPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const primeiroSemestre = [
    { materia: 'Introdução a odontologia I', horas: '16h', creditos: '01CR' },
    { materia: 'Sociologia da saúde', horas: '48h', creditos: '03CR' },
    { materia: 'Biociências: Biologia Celular e Bioquímica', horas: '64h', creditos: '04CR' },
    { materia: 'Concepção e formação do corpo humano 1: Embriologia, Histologia e anatomia humana', horas: '192h', creditos: '16CR' },
    { materia: 'Imunologia geral', horas: '32h', creditos: '02CR' },
    { materia: 'Saúde coletiva 1: Políticas públicas de saúde, promoção e educação em saúde', horas: '64h', creditos: '04CR' }
  ];

  const segundoSemestre = [
    { materia: 'Patologia geral', horas: '64h', creditos: '04CR' },
    { materia: 'Microbiologia geral e parasitologia humana', horas: '96h', creditos: '06CR' },
    { materia: 'Fisiologia Humana', horas: '96h', creditos: '06CR' },
    { materia: 'Concepção do corpo humano 2: embriologia, histologia e anatomia buco maxilo facial', horas: '160h', creditos: '10CR' }
  ];

  const terceiroSemestre = [
    { materia: 'Introdução a clínica geral', horas: '32h', creditos: '02CR' },
    { materia: 'Farmacologia', horas: '96h', creditos: '06CR' },
    { materia: 'Psicologia do desenvolvimento', horas: '32h', creditos: '02CR' },
    { materia: 'Métodos de diagnóstico 1: estomatologia clínica, semibiologia, radiologia e patologia bucais', horas: '160h', creditos: '10CR' }
  ];

  const quartoSemestre = [
    { materia: 'Cariologia', horas: '32h', creditos: '02CR' },
    { materia: 'Laboratório de periodontia', horas: '48h', creditos: '03CR' },
    { materia: 'Anestesiologia terapêutica medicamentosa', horas: '32h', creditos: '02CR' },
    { materia: 'Métodos de diagnóstico 2: estomatologia clínica, semiologia, patologia e radiologia bucais', horas: '160h', creditos: '10CR' },
    { materia: 'Laboratório de dentística', horas: '112h', creditos: '07CR' },
    { materia: 'Evidência científica em saúde 1', horas: '32h', creditos: '02CR' }
  ];

  const quintoSemestre = [
    { materia: 'Laboratório de prótese e oclusão 1', horas: '96h', creditos: '06CR' },
    { materia: 'Laboratório de endodontia', horas: '64h', creditos: '04CR' },
    { materia: 'Cirurgia e traumatologia buco maxilo-facial 1', horas: '96h', creditos: '06CR' },
    { materia: 'Clínica odontológica 1', horas: '112h', creditos: '06CR' },
    { materia: 'Saúde coletiva 2: saúde da família', horas: '64h', creditos: '04CR' }
  ];

  const sextoSemestre = [
    { materia: 'Deontologia e odontologia legal', horas: '32h', creditos: '02CR' },
    { materia: 'Emergência médica em odontologia', horas: '32h', creditos: '02CR' },
    { materia: 'Clínica odontológica 2', horas: '96h', creditos: '06CR' },
    { materia: 'Clínica de reabilitação oral 1', horas: '160h', creditos: '10CR' },
    { materia: 'Saúde coletiva 3: estudos em pesquisa epidemológica', horas: '64h', creditos: '04CR' },
    { materia: 'Cirurgia e traumatologia buco-maxilo-facial 2', horas: '96h', creditos: '06CR' }
  ];

  const setimoSemestre = [
    { materia: 'Laboratório de ortodontia', horas: '96h', creditos: '06CR' },
    { materia: 'Laboratório de prótese e oclusão 2', horas: '96h', creditos: '06CR' },
    { materia: 'Estomatologia', horas: '64h', creditos: '04CR' },
    { materia: 'Cirurgia e traumatologia buco-maxilo-facial 3', horas: '64h', creditos: '04CR' },
    { materia: 'Saúde coletiva 4: Vigilância em saúde', horas: '32h', creditos: '02CR' },
    { materia: 'Clínica odontológica 3', horas: '64h', creditos: '04CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Disfunção têmporo-mandibular e dor ofacial', horas: '16h', creditos: '01CR' },
    { materia: 'Clínica odontológica 4', horas: '64h', creditos: '04CR' },
    { materia: 'Clínica de odontopediatria e ortodontia preventiva', horas: '96h', creditos: '06CR' },
    { materia: 'Estágio em saúde coletiva', horas: '64h', creditos: '04CR' },
    { materia: 'Clínica de reabilitação oral 2', horas: '96h', creditos: '06CR' }
  ];

  const nonoSemestre = [
    { materia: 'Estágio em clínica integrada 1', horas: '256h', creditos: '16CR' },
    { materia: 'Estágio em clínica infantil', horas: '64h', creditos: '04CR' },
    { materia: 'Estágio em atenção primária', horas: '128h', creditos: '08CR' }
  ];

  const decimoSemestre = [
    { materia: 'Atividades complementares', horas: '224h', creditos: '14CR' },
    { materia: 'Estágio em clínica integrada 2', horas: '256h', creditos: '16CR' },
    { materia: 'Estágio em clínica infantil 2', horas: '64h', creditos: '04CR' },
    { materia: 'Estágio em atenção secundária', horas: '64h', creditos: '04CR' },
    { materia: 'Evidência científica em saúde 2: trabalho de conclusão de curso', horas: '32h', creditos: '02CR' }
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
          Grade Curricular - Odontologia
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Odontologia
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
        {renderSemesterTable(nonoSemestre, '9º Semestre', 'grade curricular 9º semestre')}
        {renderSemesterTable(decimoSemestre, '10º Semestre', 'grade curricular 10º semestre')}

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

export default GradeOdontologiaPage;
