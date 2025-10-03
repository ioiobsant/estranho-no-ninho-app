import { Box, Typography, Divider, Link } from '@mui/material';

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

const CoordenacaoFinancasPage = () => {
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
          Coordenação - Finanças
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre a coordenação do curso
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Coordenação</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Coordenadora:</strong> Professora Cleycianne de Souza Almeida
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Vice-Coordenadora:</strong> Professora Débora Gaspar Feitos
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>E-mail:</strong> financas@sobral.ufc.br
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Página:</strong>{' '}
            <Link
              href="https://financassobral.ufc.br/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                '&:hover': {
                  color: 'primary.dark',
                  textDecoration: 'underline'
                }
              }}
            >
              https://financassobral.ufc.br/
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoordenacaoFinancasPage;
