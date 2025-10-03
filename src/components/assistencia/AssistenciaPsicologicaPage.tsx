import { Box, Typography, Divider } from '@mui/material';

// estilos padronizados
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 600,
  color: 'primary' as const,
  gutterBottom: true,
};
const dividerSx = { mb: 1 };
const bodyTextProps = { variant: 'body2' as const, color: 'text.secondary' as const, fontSize: 16, lineHeight: 1.8 };

const AssistenciaPsicologicaPage = () => {
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
        

        <Typography variant="h6" color="primary" fontWeight="700">
          Assistência Psicológica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Suporte psicológico para estudantes da UFC
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Serviço de Psicologia</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Os atendimentos que são mediados pela PRAE acontecem conforme agendamento realizado através do formulário no site do campus.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Como Funciona</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          Os atendimentos realizados pelo Serviço de Psicologia Aplicada (SPA) acontecem por demanda espontânea, exceto para alunos do curso de Psicologia. 
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            E-mail: psicoestudantil@sobral.ufc.br
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AssistenciaPsicologicaPage;
