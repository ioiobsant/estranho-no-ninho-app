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

const InternacionalizacaoPage = () => {
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
          Internacionalização
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programas de intercâmbio e internacionalização
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...bodyTextProps}>
            A Universidade Federal do Ceará (UFC) oferece bolsas para intercâmbio internacional através de programas que estabelecem parcerias com entidades financiadoras e agências de fomento.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Exemplos de Programas de Bolsas</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps} component="div" sx={{ lineHeight: 1.9 }}>
            • <strong>Programa de Bolsas Ibero-Americanas:</strong> Patrocinado pelo Banco Santander<br/>
            • <strong>BRAFITEC:</strong> Financiado pela CAPES/MEC<br/>
            • <strong>BRAFAGRI:</strong> Financiado pela CAPES/MEC<br/>
            • <strong>Projeto Milton Santos de Acesso ao Ensino Superior (Promisaes):</strong> Apoia financeiramente alunos estrangeiros do Programa de Estudantes-Convênio de Graduação (PEC-G)<br/>
            • <strong>Programa de Alianças para a Educação e a Capacitação (PAEC):</strong> Oferece bolsas para estudos acadêmicos
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Convênios Internacionais</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Além disso, a UFC mantém convênios com universidades estrangeiras com 197 universidades estrangeiras, de países como França, Portugal, Espanha, Alemanha, Estados Unidos, Colômbia, China, Argentina, dentre vários outros, garantindo mobilidade acadêmica com outras Universidades no Brasil e no mundo. Com a Mobilidade Acadêmica você poderá estudar por alguns semestres em outra Universidade e contar esse tempo (e disciplinas) para a sua graduação na UFC.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Links Úteis</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps} component="div">
            <Link 
              href="https://prointer.ufc.br/pt/internacionalizacao/mobilidade-academica/programas-e-bolsas-de-estudo/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              Para maiores informações sobre a Internacionalização
            </Link>
            <br/><br/>
            <Link 
              href="https://prointer.ufc.br/pt/internacionalizacao/mobilidade-academica/tipos-de-mobilidade-academica/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              Para saber mais sobre Mobilidade Acadêmica
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InternacionalizacaoPage;
