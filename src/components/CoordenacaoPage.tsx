import { Box, Typography, Divider, Link } from '@mui/material';
import { CoordenacaoCurso } from '../data/cursos/cursosData';
import ConteudoIndisponivel from './ConteudoIndisponivel';

interface CoordenacaoPageProps {
  coordenacao: CoordenacaoCurso | null;
  courseName?: string;
  campusName?: string;
}

// Padronização do estilo da aplicação
//titulo das seções. (linhas 11-17)
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 600,
  color: 'primary' as const,
  gutterBottom: true,
};
//texto do corpo. (linhas 19-24)
const dividerSx = { mb: 1 };
const bodyTextProps = { 
  variant: 'body2' as const, 
  color: 'text.secondary' as const, 
  fontSize: '1.125rem', 
  lineHeight: 1.8 
};

const CoordenacaoPage = ({ coordenacao, courseName, campusName }: CoordenacaoPageProps) => {
  if (!coordenacao) {
    // Se tiver informações do curso e campus, mostra mensagem específica
    if (courseName && campusName) {
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
            <Typography variant="h6" color="primary" component="p" fontWeight="600" aria-label={`${courseName}`}>
              Coordenação - {courseName}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="1rem" component="p">
              Informações sobre a coordenação do curso
            </Typography>
          </Box>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Curso Indisponível
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Este curso não está disponível no campus {campusName} no momento.
            </Typography>
          </Box>
        </Box>
      );
    }
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
        <Typography variant="h1" color="primary" fontWeight="600" fontSize="1.5rem" aria-label={`${coordenacao.titulo}`}>
          {coordenacao.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
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
          <Typography {...sectionTitleProps} >Contato</Typography>
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
                aria-label={`Link, ${coordenacao.pagina}`}
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

