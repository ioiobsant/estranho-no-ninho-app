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

const FormarPageNotas = () => {
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
          Notas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre o cálculo de notas
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Notas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O formato das aulas é totalmente presencial, existe diferença entre a duração, modo avaliativo, frequência e notas, pois estas são de acordo com o seu curso, e a forma como o professor decide estruturar as disciplinas que ele leciona.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Sistema de Avaliação</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Mas a regra geral da UFC é que cada disciplina tenha 1ª avaliação parcial e 2ª avaliação parcial, a soma delas é dividida por 2 e se a média for 7,0 ou maior o aluno passa direto. Se for entre 6,9 e 4,0 vai para a final. Se for inferior a 4,0 reprova direto.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Prova Final</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Na final o aluno tem que obter 10 na soma da média das avaliações passadas mais a final. Por exemplo, se você ficou com 4,0 na média das duas primeiras avaliações, tem que tirar 6,0 na final.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FormarPageNotas;
