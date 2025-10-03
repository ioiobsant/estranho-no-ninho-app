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

const AssistenciaEstudantilPage = () => {
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
          Assistência Estudantil (PRAE)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programa de Assistência Estudantil da UFC
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Sobre o PRAE</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
           Ações de assistência estudantil são promovidas pela Pró-Reitoria de Assuntos Estudantis (PRAE) da UFC e buscam possibilitar condições adequadas para a permanência e o desempenho acadêmico dos estudantes em situação de vulnerabilidade socieconômica matriculados em cursos presenciais de graduação. Além disso, também é disponibilizado atendimento médico.
          </Typography>

          <Typography mt={2} color='text.secondary'>
            Horário de Funcionamento: 9h às 16h
          </Typography>
          <Typography mt={2} color='text.secondary'>
            Fone: (88) 3695-4638 ou (88) 3695-4627
          </Typography>
          <Typography mt={2} color='text.secondary'>
            Email: case@sobral.ufc.br
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default AssistenciaEstudantilPage;
