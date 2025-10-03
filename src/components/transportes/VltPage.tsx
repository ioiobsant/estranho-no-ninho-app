import { Box, Typography, Divider, List, ListItem, ListItemText} from '@mui/material';

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

const VltPage = () => {
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
          VLT - Veículo Sobre Trilhos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sistema de transporte sobre trilhos de Sobral
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Sobre o VLT</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          O Metrô de Sobral oferece transporte ágil e seguro interligando os quatro cantos da cidade, através de duas linhas em operação. A Linha Sul (com 7,2 km de extensão) interliga os bairros Sumaré e Cohab II. A Linha Norte (com 6,7 quilômetros de extensão) liga o bairro do Junco até o bairro Novo Recanto.

          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Tarifas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
           <strong>Inteira: R$ 1,00; Meia entrada: R$ 0,50</strong>. A meia entrada é destinada aos estudantes e a gratuidade a pessoas com deficiência e idosos. O cadastro ocorre no posto do VLT Campus dos Velhos ou Boulevard do Arco. É necessário levar xerox: RG, CPF, comprovante de residência, comprovante de matrícula ou laudo médico, atestando a deficiência.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Endereço</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            <Typography fontWeight={600} component="span">
                Campus dos Velhos: 
            </Typography> {" "}
           Av. Ildefonso De Holanda Cavalcante, S/N - Campo Dos Velhos - Sobral.
          </Typography>
          <Typography {...bodyTextProps}>
          <Typography fontWeight={600} component="span">
            Boulevard Do Arco:
            </Typography>{" "}Av. Othon De Alencar S/N - Centro - Sobral
             </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
  <Typography {...sectionTitleProps}>Horário de Funcionamento</Typography>
  <Divider sx={dividerSx} />

  <Typography {...bodyTextProps} sx={{ mb: 1 }}>
    O VLT de Sobral funciona <strong>de segunda a sábado</strong> com os seguintes horários:
  </Typography>

  <Typography {...bodyTextProps} sx={{ fontWeight: "bold", mt: 1 }}>
    Linha Sul
  </Typography>
  <List dense>
    <ListItem>
      <ListItemText primary="Sentido Cohab 2: 05:30 às 22:15" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Sentido Sumaré: 05:52 às 22:37" />
    </ListItem>
  </List>

  <Typography {...bodyTextProps} sx={{ fontWeight: "bold", mt: 1 }}>
    Linha Norte
  </Typography>
  <List dense>
    <ListItem>
      <ListItemText primary="Sentido Novo Recanto: 05:27 às 23:00" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Sentido Cohab 3: 05:51 às 22:36" />
    </ListItem>
  </List>
</Box>



      </Box>
    </Box>
  );
};

export default VltPage;
