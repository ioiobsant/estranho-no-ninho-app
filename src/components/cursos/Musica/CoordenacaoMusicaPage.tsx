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

const CoordenacaoMusicaPage = () => {
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
          Coordenação - Música
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
            <strong>Coordenadora:</strong> Professora Simone Santos Sousa
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Vice-Coordenador:</strong> Professor João Emanoel Ancelmo Benvenuto
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>E-mail:</strong> musicasobral@gmail.com
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Página:</strong>{' '}
            <Link
              href="http://www.musicasobral.ufc.br"
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
              http://www.musicasobral.ufc.br
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoordenacaoMusicaPage;
