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
const bodyTextProps = { variant: 'body2' as const, color: 'text.secondary' as const, fontSize: 16, lineHeight: 1.8 };

const BolsasExtensaoPage = () => {
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
          Bolsas de Extensão
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bolsas para atividades de extensão universitária
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Como se Tornar Bolsista</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Para se tornar um bolsista de Extensão, o(a) estudante da UFC precisa – inicialmente – participar de um programa/projeto de Extensão já cadastrado na Pró-Reitoria de Extensão-PREX, ou seja, que já tenha tramitado na unidade de origem do(a) Coordenador(a) do programa/projeto, e que também já tenha cumprido as instâncias necessárias na PREX.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Processo de Seleção</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Havendo um determinado programa/projeto que lhe desperte o interesse, o(a) estudante deve entrar em contato com o(a) Coordenador(a) dessa ação. Sendo aceito(a) no programa/projeto, o(a) Coordenador(a) eventualmente o(a) indica para ser contemplado(a) com uma bolsa de extensão. Em alguns casos, o(a) estudante ingressa na ação extensionista na condição de voluntário(a) e posteriormente pode ser contemplado(a) com uma bolsa.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Requisitos e Valor da Bolsa</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O(a) estudante deve estar inteirado que, caso possua parentesco em 1º grau com o(a) Coordenador(a) do programa/projeto, ele(a) não terá direito à bolsa. O bolsista de Extensão receberá bolsa no valor de R$700,00.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BolsasExtensaoPage;
