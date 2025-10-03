import { Box, Typography, Divider, Link } from '@mui/material';

// padronização do estilo da aplicação com melhorias de acessibilidade WCAG 2.1 AA
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};
const dividerSx = { mb: 1 };
// WCAG 1.4.3: fontSize 18px + fontWeight 500 = contraste 3:1 (mais flexível que 4.5:1)
// WCAG 1.4.4: Texto redimensionável até 200% sem perder funcionalidade
const bodyTextProps = { 
  variant: 'body2' as const, 
  color: 'text.primary' as const, // Melhor contraste que text.secondary
  fontSize: { xs: 16, sm: 18, md: 20 }, // Responsivo: 16px-20px
  fontWeight: 500, // Peso médio para melhor legibilidade
  lineHeight: 1.8 
};

const CoordenacaoCienciasEconomicasPage = () => {
  return (
    <Box 
      component="main"
      sx={{ 
        pt: 1, 
        pb: 8, 
        bgcolor: 'background.paper', 
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        overflowX: 'hidden'
      }}
      role="main"
      aria-label="Página de coordenação do curso de Ciências Econômicas"
    >
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography 
          variant="h5" 
          color="primary" 
          fontWeight="700"
          component="h1"
          id="page-title"
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, // Responsivo até 200%
            lineHeight: 1.3, // Line height otimizado para zoom
            mb: 1 // Espaçamento adequado
          }}
        >
          Coordenação - Ciências Econômicas
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            fontSize: { xs: 14, sm: 16, md: 18 }, // Responsivo
            fontWeight: 400,
            lineHeight: 1.5 // Line height otimizado
          }}
          aria-describedby="page-title"
        >
          Informações sobre a coordenação do curso
        </Typography>
      </Box>

      <Box sx={{ 
        p: { xs: 2, sm: 3 }, // Padding responsivo
        maxWidth: '100%', // Evita overflow horizontal
        overflowX: 'hidden' // Previne scroll horizontal
      }}>
        <Box sx={{ 
          ...sectionBoxSx, 
          mb: { xs: 4, sm: 3 } // Espaçamento responsivo
        }} role="region" aria-labelledby="coordenacao-heading">
          <Typography 
            {...sectionTitleProps}
            id="coordenacao-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }, // Responsivo
              mb: 2 // Espaçamento adequado
            }}
          >
            Coordenação do Curso
          </Typography>
          <Divider sx={{ ...dividerSx, mb: 2 }} />
          <Typography {...bodyTextProps} sx={{ mb: 1.5 }}>
            <strong>Coordenadora:</strong> Professora Thaísa França Badagnan
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Vice-Coordenadora:</strong> Professora Antônia Márcia Rodrigues Sousa
          </Typography>
        </Box>

        <Box sx={{ 
          ...sectionBoxSx, 
          mb: { xs: 4, sm: 3 } // Espaçamento responsivo
        }} role="region" aria-labelledby="contato-heading">
          <Typography 
            {...sectionTitleProps}
            id="contato-heading"
            component="h2"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }, // Responsivo
              mb: 2 // Espaçamento adequado
            }}
          >
            Contato
          </Typography>
          <Divider sx={{ ...dividerSx, mb: 2 }} />
          <Typography {...bodyTextProps} sx={{ mb: 1.5 }}>
            <strong>E-mail:</strong> economia@sobral.ufc.br
          </Typography>
          <Typography {...bodyTextProps}>
            <strong>Página:</strong>{' '}
            <Link
              href="http://www.economia.sobral.ufc.br/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                fontSize: { xs: 16, sm: 18, md: 20 }, // Responsivo
                fontWeight: 500,
                minHeight: 44, // Altura mínima para toque
                display: 'inline-block',
                padding: '4px 8px', // Área de toque adequada
                borderRadius: '4px',
                '&:hover': {
                  color: 'primary.dark',
                  textDecoration: 'underline',
                  backgroundColor: 'action.hover'
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: '2px',
                  backgroundColor: 'action.selected'
                }
              }}
              aria-label="Abrir página oficial do curso de Ciências Econômicas em nova aba"
            >
              http://www.economia.sobral.ufc.br/
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoordenacaoCienciasEconomicasPage;
