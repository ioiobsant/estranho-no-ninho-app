import { Box, Typography, Divider, Link } from '@mui/material';

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

const EditaisBolsasPage = () => {
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
          Editais de Bolsas e Auxílios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Onde consultar editais de bolsas e auxílios
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>

          <Typography {...bodyTextProps} component="div" sx={{ lineHeight: 1.9 }}>
            • <strong>Direção de Campus:</strong> <Link href="https://sobral.ufc.br" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>sobral.ufc.br</Link><br/>
            • <strong>PRAE (Pró-Reitoria de Assuntos Estudantis):</strong> <Link href="https://prae.ufc.br/pt/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>prae.ufc.br/pt/</Link><br/>
            • <strong>PREX (Pró-Reitoria de Extensão):</strong> <Link href="https://prex.ufc.br/pt/sobre/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>prex.ufc.br/pt/sobre/</Link><br/>
            • <strong>PROGRAD (Pró-Reitoria de Graduação):</strong> <Link href="https://prograd.ufc.br/pt/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>prograd.ufc.br/pt/</Link><br/>
            • <strong>PROPLAD (Pró-Reitoria de Planejamento e Administração):</strong> <Link href="https://proplad.ufc.br/pt/sobre-a-proplad/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>proplad.ufc.br/pt/sobre-a-proplad/</Link><br/>
            • <strong>PRPPG (Pró-Reitoria de Pesquisa e Pós-graduação):</strong> <Link href="https://prppg.ufc.br/pt/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>prppg.ufc.br/pt/</Link><br/>
            • <strong>STI (Secretaria de Tecnologia e Informação):</strong> <Link href="https://sti.ufc.br/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'underline' }}>sti.ufc.br/</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EditaisBolsasPage;
