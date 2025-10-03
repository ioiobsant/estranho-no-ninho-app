import { Box, Typography, Divider } from '@mui/material';

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
const bodyTextProps = { 
    variant: 'body2' as const, color: 'text.secondary' as const, fontSize: 16, lineHeight: 1.8
};

const BolsasIniciacaoCientificaPage = () => {
  return (
    <Box sx={{ 
      pt: 1, 
      pb: 4, 
      bgcolor: 'background.paper', 
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      overflowX: 'hidden'
    }}>
      <Box sx={{ 
        px: 3, 
        py: 3, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" color="primary" fontWeight="500">
          Bolsa de Inicialização Acadêmica (BIA)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programas de iniciação científica e pesquisa
        </Typography>
      </Box>

      <Box sx={{ p: 3}}>
        <Box sx={sectionBoxSx}>

          <Typography {...bodyTextProps}>
            O Programa de Iniciação Acadêmica é uma forma de oferecer um espaço para que o estudante possa conhecer e participar de ações de iniciação à universidade, ensino, pesquisa e extensão, artes, gestão, dentre outros; além de ter a oferta direta de uma bolsa (no valor de R$ 700,00) para estudantes que apresentam vulnerabilidade socioeconômica.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BolsasIniciacaoCientificaPage;
