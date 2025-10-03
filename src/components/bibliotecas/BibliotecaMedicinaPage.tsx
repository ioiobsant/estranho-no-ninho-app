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

const BibliotecaMedicinaPage = () => {
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
          Biblioteca Medicina
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Biblioteca de Medicina de Sobral
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Endereço:</strong> Av. Comandante Maurocelio Rocha Pontes, 100- Derby.<br/>
            <strong>Fone:</strong> (88) 3695-4709<br/>
            <strong>Email:</strong> bms.direcao@ufc.br
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Documentos necessários para fazer ficha na biblioteca</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            • Apresentar comprovante de matrícula recente.<br/>
            • Documento oficial com foto.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Horário de funcionamento</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            • Dias úteis. Das 7h às 21h.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BibliotecaMedicinaPage;
