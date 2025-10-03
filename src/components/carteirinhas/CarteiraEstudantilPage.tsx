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

const CarteiraEstudantilPage = () => {
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
          Carteira Estudantil
        </Typography>

      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Carteira Estudantil UNE</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O Documento do Estudante é o documento oficial das entidades estudantis nacionais que, de acordo com a Lei 12.933/2013, garante a meia-entrada a estudantes do ensino infantil, fundamental, médio/técnico, graduação e pós-graduação, porém não é gratuito, exceto para jovens de baixa renda. Site: Documento do Estudante 2024 - Válido em todo o Brasil.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Carteira Estudantil DCE</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O estudante universitário tem direito a um documento que lhe assegura a meia passagem no transporte público e a meia-entrada em eventos artísticos e culturais. De acordo com o Decreto nº 8.537/2015 da Presidência da República, só são válidas no território nacional as carteiras universitárias emitidas com a chancela da União Nacional dos Estudantes (UNE) e da Associação Nacional de Pós-Graduandos (ANPG). A solicitação ocorre através da entidade DCE, cada campus da UFC possui uma secretaria do DCE.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CarteiraEstudantilPage;
