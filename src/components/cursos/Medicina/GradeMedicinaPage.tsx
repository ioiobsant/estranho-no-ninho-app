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

const GradeMedicinaPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const primeiroSemestre = [
    { materia: 'Educação e Medicina', horas: '32h', creditos: '02CR' },
    { materia: 'Biologia Celular, Molecular e Princípios de Farmacologia', horas: '96h', creditos: '06CR' },
    { materia: 'Gênese e Desenvolvimento', horas: '64h', creditos: '04CR' },
    { materia: 'Aparelho Locomotor', horas: '144h', creditos: '09CR' },
    { materia: 'Sistema Digestório', horas: '96h', creditos: '06CR' },
    { materia: 'Investigação e Projetos em Saúde Coletiva', horas: '64h', creditos: '04CR' },
    { materia: 'Introdução ao Estudo da Medicina', horas: '64h', creditos: '04CR' }
  ];

  const segundoSemestre = [
    { materia: 'Sistema Nervoso', horas: '144h', creditos: '09CR' },
    { materia: 'Sistema Cardiovascular', horas: '96h', creditos: '06CR' },
    { materia: 'Sistema Respiratório', horas: '48h', creditos: '03CR' },
    { materia: 'Sistema Endócrino', horas: '48h', creditos: '03CR' },
    { materia: 'Sistema Gênito-Urinário', horas: '96h', creditos: '06CR' },
    { materia: 'Gestão em Saúde, Antropologia e Cuidados Integrativos em Saúde', horas: '64h', creditos: '04CR' },
    { materia: 'Habilidades e Atitudes Médicas', horas: '64h', creditos: '04CR' }
  ];

  const terceiroSemestre = [
    { materia: 'Processos Patológicos Gerais', horas: '144h', creditos: '09CR' },
    { materia: 'Relação Parasito-Hospedeiro', horas: '144h', creditos: '09CR' },
    { materia: 'Imunopatologia', horas: '144h', creditos: '09CR' },
    { materia: 'Epidemiologia Clínica e Medicina Baseada em Evidências', horas: '64h', creditos: '04CR' },
    { materia: 'Metodologia do Trabalho Científico', horas: '64h', creditos: '04CR' }
  ];

  const quartoSemestre = [
    { materia: 'Abordagem do Paciente e Bases Fisiopatológicas e Terapêuticas dos Principais Sintomas e Sinais', horas: '208h', creditos: '13CR' },
    { materia: 'Abordagem do Paciente e Bases Fisiopatológicas e Terapêuticas das Grandes Síndromes', horas: '208h', creditos: '13CR' },
    { materia: 'Clínica e Gestão da Atenção Primária', horas: '64h', creditos: '04CR' },
    { materia: 'Psicologia Médica e Psicopatologia', horas: '64h', creditos: '04CR' }
  ];

  const quintoSemestre = [
    { materia: 'Clínica e Cirurgia do Aparelho Digestório', horas: '96h', creditos: '06CR' },
    { materia: 'Nutrologia', horas: '48h', creditos: '03CR' },
    { materia: 'Endocrinologia: Clínica e Cirurgia', horas: '48h', creditos: '03CR' },
    { materia: 'Clínica e Cirurgia do Aparelho Cardiovascular', horas: '96h', creditos: '06CR' },
    { materia: 'Pneumologia e Cirurgia Torácica', horas: '96h', creditos: '06CR' },
    { materia: 'Bases da Técnica Cirúrgica e da Anestesiologia', horas: '16h', creditos: '01CR' },
    { materia: 'Atenção Básica à Saúde da Criança', horas: '64h', creditos: '04CR' },
    { materia: 'Psiquiatria', horas: '64h', creditos: '04CR' }
  ];

  const sextoSemestre = [
    { materia: 'Obstetrícia', horas: '48h', creditos: '03CR' },
    { materia: 'Neonatologia, Pediatria e Cirurgia Pediátrica', horas: '144h', creditos: '09CR' },
    { materia: 'Ginecologia', horas: '96h', creditos: '06CR' },
    { materia: 'Nefrologia e Urologia', horas: '96h', creditos: '06CR' },
    { materia: 'Atenção Básica à Saúde da Gestante', horas: '64h', creditos: '04CR' },
    { materia: 'Habilidades e Atitudes Médicas: Na Infância e na Vida Adulta', horas: '64h', creditos: '04CR' }
  ];

  const setimoSemestre = [
    { materia: 'Doenças Infecciosas', horas: '96h', creditos: '06CR' },
    { materia: 'Dermatologia', horas: '48h', creditos: '03CR' },
    { materia: 'Hematologia', horas: '48h', creditos: '03CR' },
    { materia: 'Geriatria', horas: '96h', creditos: '06CR' },
    { materia: 'Reumatologia', horas: '48h', creditos: '03CR' },
    { materia: 'Oncologia', horas: '48h', creditos: '03CR' },
    { materia: 'Atenção Básica à Saúde do Adulto', horas: '64h', creditos: '04CR' },
    { materia: 'Cuidados Continuados em Saúde', horas: '64h', creditos: '04CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Urgências Médicas', horas: '96h', creditos: '06CR' },
    { materia: 'Otorrinolaringologia', horas: '48h', creditos: '03CR' },
    { materia: 'Traumato-Ortopedia', horas: '48h', creditos: '03CR' },
    { materia: 'Neurologia e Neurocirurgia', horas: '48h', creditos: '03CR' },
    { materia: 'Terapia Intensiva', horas: '48h', creditos: '03CR' },
    { materia: 'Medicina Legal', horas: '48h', creditos: '03CR' },
    { materia: 'Oftalmologia', horas: '48h', creditos: '03CR' },
    { materia: 'Introdução ao Internato', horas: '16h', creditos: '01CR' },
    { materia: 'Atenção Básica à Saúde do Trabalhador', horas: '64h', creditos: '04CR' },
    { materia: 'Bioética Clínica e Deontologia Médica', horas: '64h', creditos: '04CR' }
  ];

  const estagioCurricular = [
    { materia: 'Internato em Saúde Coletiva', horas: '960h', creditos: '60CR' },
    { materia: 'Internato em Saúde Mental', horas: '160h', creditos: '10CR' },
    { materia: 'Internato em Clínica Médica', horas: '960h', creditos: '60CR' },
    { materia: 'Internato em Cirurgia', horas: '640h', creditos: '40CR' },
    { materia: 'Internato em Terapia Intensiva', horas: '640h', creditos: '40CR' },
    { materia: 'Internato em Pediatria', horas: '640h', creditos: '40CR' },
    { materia: 'Internato em Ginecologia-Obstetrícia', horas: '640h', creditos: '40CR' }
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
          Grade Curricular - Medicina
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Medicina
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
        {renderSemesterTable(estagioCurricular, '5º e 6º Ano - Estágio Curricular Obrigatório', 'estágio curricular obrigatório')}

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

export default GradeMedicinaPage;
