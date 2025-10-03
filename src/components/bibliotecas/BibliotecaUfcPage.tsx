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

const BibliotecaUfcPage = () => {
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
          Biblioteca UFC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Biblioteca Central da Universidade Federal do Ceará
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Biblioteca UFC</Typography>

          
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Biblioteca do Campus de Sobral
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <strong>Endereço:</strong> R. Conselheiro José Júlio, s/n.<br/>
            <strong>Fone:</strong> (88) 3695-4645<br/>
            <strong>Email:</strong> bcso@ufc.br
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Documentos necessários para fazer ficha na biblioteca</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            • Comprovante de matrícula recente;<br/>
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

export default BibliotecaUfcPage;
