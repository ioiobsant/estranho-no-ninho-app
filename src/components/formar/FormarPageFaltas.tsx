import { Box, Typography, Divider } from '@mui/material';

// estilos padronizados
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

const FormarPageFaltas = () => {
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
          Faltas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre faltas e presença
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Regra de Faltas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            É importante esclarecer que o estudante tem direito de usufruir de até 25% de faltas sem incorrer em reprovação (75% de presença). As faltas não podem ser abonadas ("tiradas") com atestados, ou seja, justificar a falta não a retira. Para alunos que adoeçam e não possam ir para as aulas existe o Regime Especial.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Como Calcular as Faltas Permitidas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Para saber quantas faltas você pode ter em uma disciplina é só pegar a carga horária dela e dividir por 4, o resultado é o número máximo de faltas que você pode ter (1/4 de faltas). Por exemplo, em uma disciplina de 1 crédito (16 horas no semestre, ou seja, 1 hora aula por semana), você pode faltar quatro aulas (cada hora de aula conta como uma aula).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FormarPageFaltas;
