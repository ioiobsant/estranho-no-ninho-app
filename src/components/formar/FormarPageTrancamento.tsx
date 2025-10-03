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

const FormarPageTrancamento = () => {
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
          Trancamentos e Regime Especial
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações sobre trancamento ou regime especial
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Trancamentos</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            A solicitação de trancamento total ou parcial deverá ser encaminhada à coordenação de curso nos períodos de matrícula regular ou de ajuste de matrícula definidos no Calendário Universitário. Após o início do semestre letivo, a solicitação de trancamento total deverá ser encaminhada no prazo de até 15 dias úteis da ocorrência de algum dos fatos geradores (Doença atestada pelo Serviço Médico da UFC, mudança de domicílio para outra cidade, exercício de emprego, obrigação de ordem militar) limitando-se ao último dia letivo do semestre.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Regime Especial</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Nesta modalidade, o semestre não é interrompido e cabe ao professor designar exercícios domiciliares, durante o período em Regime Especial, em compensação das ausências às aulas. Conforme Art. 113 do Regimento Geral da UFC é vedado o abono de faltas.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FormarPageTrancamento;
