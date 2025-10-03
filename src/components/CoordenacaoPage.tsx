import { Box, Typography, Divider, Link } from '@mui/material';
import { CoordenacaoCurso } from '../data/cursos/cursosData';
import ConteudoIndisponivel from './ConteudoIndisponivel';

interface CoordenacaoPageProps {
  coordenacao: CoordenacaoCurso | null;
}

// Padronização do estilo da aplicação
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};
const dividerSx = { mb: 1 };
const bodyTextProps = { 
  variant: 'body2' as const, 
  color: 'text.secondary' as const, 
  fontSize: 16, 
  lineHeight: 1.8 
};

const CoordenacaoPage = ({ coordenacao }: CoordenacaoPageProps) => {
  if (!coordenacao) {
    return <ConteudoIndisponivel />;
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
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" color="primary" fontWeight="500">
          {coordenacao.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coordenacao.subtitulo}
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Coordenação</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Coordenador{coordenacao.coordenador.includes('Professor') ? '' : '(a)'}:</strong> {coordenacao.coordenador}
          </Typography>
          {coordenacao.viceCoordenador && (
            <Typography {...bodyTextProps}>
              <strong>Vice-Coordenador{coordenacao.viceCoordenador.includes('Professor') ? '' : '(a)'}:</strong> {coordenacao.viceCoordenador}
            </Typography>
          )}
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>E-mail:</strong> {coordenacao.email}
          </Typography>
          {coordenacao.telefone && (
            <Typography {...bodyTextProps}>
              <strong>Telefone:</strong> {coordenacao.telefone}
            </Typography>
          )}
          {coordenacao.pagina && (
            <Typography {...bodyTextProps}>
              <strong>Página:</strong>{' '}
              <Link
                href={coordenacao.pagina}
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
                {coordenacao.pagina}
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CoordenacaoPage;

