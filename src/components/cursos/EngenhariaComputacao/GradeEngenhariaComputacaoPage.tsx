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

const GradeEngenhariaComputacaoPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const primeiroSemestre = [
    { materia: 'Cálculo Diferencial e Integral I', horas: '64h', creditos: '04CR' },
    { materia: 'Física Geral I', horas: '64h', creditos: '04CR' },
    { materia: 'Matemática Discreta para Computação', horas: '64h', creditos: '04CR' },
    { materia: 'Programação Computacional para Engenharia', horas: '96h', creditos: '06CR' },
    { materia: 'Introdução à Engenharia', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 0', horas: '96h', creditos: '06CR' }
  ];

  const segundoSemestre = [
    { materia: 'Cálculo Diferencial e Integral II', horas: '64h', creditos: '04CR' },
    { materia: 'Física Geral II', horas: '64h', creditos: '04CR' },
    { materia: 'Álgebra Linear', horas: '64h', creditos: '04CR' },
    { materia: 'Física Experimental para Engenharia I', horas: '32h', creditos: '02CR' },
    { materia: 'Desenho para Engenharia', horas: '64h', creditos: '04CR' },
    { materia: 'Probabilidade e Estatística', horas: '64h', creditos: '04CR' },
    { materia: 'Técnicas de Programação', horas: '64h', creditos: '04CR' }
  ];

  const terceiroSemestre = [
    { materia: 'Cálculo Vetorial Aplicado', horas: '64h', creditos: '04CR' },
    { materia: 'Métodos Numéricos Aplicados à Engenharia', horas: '64h', creditos: '04CR' },
    { materia: 'Física Experimental para Engenharia II', horas: '32h', creditos: '02CR' },
    { materia: 'Estruturas de Dados', horas: '64h', creditos: '04CR' },
    { materia: 'Séries e Equações Diferenciais', horas: '64h', creditos: '04CR' },
    { materia: 'Eletricidade e Magnetismo', horas: '64h', creditos: '04CR' }
  ];

  const quartoSemestre = [
    { materia: 'Eletromagnetismo Aplicado', horas: '96h', creditos: '06CR' },
    { materia: 'Paradigmas de Linguagem de Programação', horas: '64h', creditos: '04CR' },
    { materia: 'Arquitetura e Organização de Computadores', horas: '64h', creditos: '04CR' },
    { materia: 'Circuitos Elétricos I', horas: '96h', creditos: '06CR' },
    { materia: 'Eletrônica Digital', horas: '96h', creditos: '06CR' },
    { materia: 'Disciplina Eletiva 1', horas: '64h', creditos: '04CR' }
  ];

  const quintoSemestre = [
    { materia: 'Microprocessadores', horas: '96h', creditos: '06CR' },
    { materia: 'Redes de Computadores', horas: '64h', creditos: '04CR' },
    { materia: 'Engenharia de Software', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 2', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 3', horas: '64h', creditos: '04CR' },
    { materia: 'Sistemas Operacionais', horas: '64h', creditos: '04CR' }
  ];

  const sextoSemestre = [
    { materia: 'Inteligência Computacional', horas: '64h', creditos: '04CR' },
    { materia: 'Banco de Dados', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 4', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 5', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 6', horas: '64h', creditos: '04CR' }
  ];

  const setimoSemestre = [
    { materia: 'Ciências, Tecnologia e Sociedade', horas: '32h', creditos: '02CR' },
    { materia: 'Software em Tempo Real', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Eletiva 7', horas: '32/64h', creditos: '02/04CR' },
    { materia: 'Disciplina Eletiva 8', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Livre 1', horas: '64h', creditos: '04CR' }
  ];

  const oitavoSemestre = [
    { materia: 'Engenharia Ambiental', horas: '48h', creditos: '03CR' },
    { materia: 'Fundamentos de Administração', horas: '32h', creditos: '02CR' },
    { materia: 'Disciplina Eletiva 9', horas: '32/64h', creditos: '02/04CR' },
    { materia: 'Disciplina Eletiva 10', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Livre 2', horas: '64h', creditos: '04CR' }
  ];

  const nonoSemestre = [
    { materia: 'Estágio Supervisionado', horas: '160h', creditos: '10CR' },
    { materia: 'Seminário de Estágio', horas: '32h', creditos: '02CR' },
    { materia: 'Disciplina Livre 3', horas: '64h', creditos: '04CR' },
    { materia: 'Disciplina Livre 4', horas: '64h', creditos: '04CR' },
    { materia: 'Seminário de Monografia', horas: '32h', creditos: '02CR' }
  ];

  const decimoSemestre = [
    { materia: 'Trabalho de Conclusão de Curso', horas: '160h', creditos: '10CR' },
    { materia: 'Disciplina Livre 5', horas: '32/64h', creditos: '02/04CR' },
    { materia: 'Disciplina Livre 6', horas: '32/64h', creditos: '02/04CR' },
    { materia: 'Comunicação e Expressão', horas: '64h', creditos: '04CR' }
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
          Grade Curricular - Engenharia da Computação
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Grade curricular do curso de Engenharia da Computação
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

export default GradeEngenhariaComputacaoPage;
