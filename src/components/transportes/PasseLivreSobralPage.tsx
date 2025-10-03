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

const PasseLivreSobralPage = () => {
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
          Passe Livre Sobral
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transporte público municipal de Sobral
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>

          <Typography {...bodyTextProps}>
          É o documento que garante à pessoa com deficiência, idosa, o livre acesso sem ônus nos transportes coletivos urbanos e interdistirtais do município de Sobral. É necessário procurar a Casa do Cidadão ou CRAS para realizar o devido cadastro no sistema.

          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Documentação</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          Xerox da Carteira de Identidade (RG), CPF, comprovante de residência, e atestado (laudo) médico do especialista.
          </Typography>
        </Box>


        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contatos</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          Endereço: Endereço: R. Cel. José Sabóia, 513 - Centro, Sobral - CE, 62011-040. <br />

          Telefone: (88) 3677-3231/3677-3230 <br />

          E-mail: cadastrounico@sobral.ce.gov.br <br />
          </Typography>
        </Box>


      </Box>
    </Box>
  );
};

export default PasseLivreSobralPage;
