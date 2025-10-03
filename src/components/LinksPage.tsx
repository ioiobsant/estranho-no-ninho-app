import { Box, Typography, Link } from '@mui/material';
import { LinksUteisContent } from '../data/links-uteis/linksUteisData';

interface LinksPageProps {
  content: LinksUteisContent | null;
}

/**
 * Componente específico para renderizar páginas de links
 */
const LinksPage = ({ content }: LinksPageProps) => {
  // Se não há conteúdo, mostrar mensagem de construção
  if (!content) {
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
            Conteúdo em Construção
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Esta página está sendo desenvolvida para este campus
          </Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem' },
            color: 'text.secondary',
            textAlign: 'center',
            mt: 4
          }}>
            Em construção
          </Typography>
        </Box>
      </Box>
    );
  }

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
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          {content.titulo}
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          {content.links.map((item, index) => (
            <Box key={index} sx={{ py: 1 }}>
              {item.url ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'underline',
                    fontSize: '1rem',
                    fontWeight: 400,
                    cursor: 'pointer',
                    textAlign: 'center',
                    '&:hover': {
                      color: 'primary.dark',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {item.text}
                </Link>
              ) : (
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1rem',
                    fontWeight: 400,
                    textAlign: 'center'
                  }}
                >
                  {item.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LinksPage;
