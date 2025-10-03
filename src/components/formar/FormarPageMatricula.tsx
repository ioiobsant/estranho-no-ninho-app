import { Box, Typography, Divider} from '@mui/material';


// após os imports
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
const listUlSx = {
  pl: 3,
  m: 0,
  color: 'text.secondary',
  '& li::marker': { color: 'text.primary' },
};


const FormarPageMatricula = () => {
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
        <Typography variant="h5" color="primary" fontWeight="500">
          Matrícula
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre matrícula e renovação
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Visão geral</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            A matrícula ocorre pelo SIGAA na aba Ensino → Matrícula Online.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Quando acontece</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            A solicitação de matrícula ocorre duas vezes por ano, conforme o calendário acadêmico. A matrícula é o momento que o 
            estudante solicita quais disciplinas irá cursar durante o semestre e, com excessão do primeiro semestre, o estudante deverá 
            cursar no mínimo 13 créditos.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default FormarPageMatricula;
