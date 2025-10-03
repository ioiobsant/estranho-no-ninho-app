import { Box, Typography, Divider } from '@mui/material';

// padronização do estilo da aplicação
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};
const dividerSx = { mb: 1 };
const bodyTextProps = { variant: 'body2' as const, color: 'text.secondary' as const, fontSize: 16, lineHeight: 1.8 };

const PidPage = () => {
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
          Programa de Inicialização à Docência (PID)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programa de incentivo à docência
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Sobre o Programa</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O programa é efetivado por meio da atuação do aluno nos componentes curriculares sob a orientação de um professor orientador do quadro efetivo, permitindo ampliar os espaços de ensino-aprendizagem e estimular o interesse pela carreira docente.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Modalidades e Bolsas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O Programa de Iniciação à Docência (PID) é desenvolvido em duas modalidades: monitoria remunerada e monitoria voluntária. Na primeira, o monitor recebe uma bolsa-auxílio para desempenhar as funções e, por isso, não deve participar de qualquer outra atividade remunerada, seja pública ou privada. Na segunda, o monitor desempenha as atividades de maneira voluntária, sem o recebimento do auxílio. A seleção é de responsabilidade de cada Departamento de Curso de Graduação. O bolsista do PID receberá bolsa no valor de R$700,00.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PidPage;
