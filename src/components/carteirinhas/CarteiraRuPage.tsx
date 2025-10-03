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

const CarteiraRuPage = () => {
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
          Carteira do R.U
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre o Restaurante Universitário
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps} >Carteira do R.U</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Horário de funcionamento:</strong><br/>
            • Guichê de atendimento: 9h às 19h;<br/>
            • Fornecimento da alimentação: Almoço de 11h às 14h; Jantar de 17h30min às 19h.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Valor das refeições para estudantes</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            • Recarga Eletrônica (pix, cartão de crédito ou GRU): R$ 1,10.<br/><br/>
            <strong>Link para recarga eletrônica:</strong><br/>
            http://si3.ufc.br/public//jsp/restaurante_universitario/consulta_comensal_ru.jsf<br/><br/>
            • Guichê de atendimento (dinheiro em espécie): R$ 3,00.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>IMPORTANTE</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Para fazer as refeições é necessário um cartão de acesso, adquirido gratuitamente no guichê de atendimento, basta levar documento com foto e número da matrícula.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Endereço:</strong> R. Coronel Estanislau Frota, 563 - Campus Mucambinho.<br/>
            <strong>Email:</strong> refeitório@sobral.ufc.br
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CarteiraRuPage;
