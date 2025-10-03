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

const IdJovemPage = () => {
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
         ID Jovem
        </Typography>

      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>O que é o ID Jovem?</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O Programa Jovem, também conhecido como Identidade Jovem, é uma iniciativa do Governo Federal que oferece benefícios aos jovens de baixa renda. Esses benefícios incluem acesso à meia-entrada em eventos culturais, esportivos e artísticos, além de oferecer vagas gratuitas ou com desconto em viagens interestaduais. O público-alvo do Programa Jovem são jovens com idades entre 15 e 29 anos, que pertencem a famílias com renda mensal de até dois salários mínimos e estão cadastrados no Cadastro Único para Programas Sociais do Governo Federal. A inscrição é feita pelo site ou aplicativo usando seus dados pessoais e NIS do CadUnico.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Site Oficial</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Site: ID Jovem (juventude.gov.br)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IdJovemPage;
