import { Box, Typography, Link } from '@mui/material';

const RegimentosPage = () => {
  const regimentosData = [
    { text: 'Direitos e Deveres do Aluno', url: 'https://psicologiasobral.ufc.br/pt/regimentos-manuais-e-outros/direitos-e-deveres/' },
    { text: 'Estatuto da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/327-estatuto-da-ufc' },
    { text: 'Manual do Aluno', url: 'http://www.cgeti.ufc.br/downloads/Manual%20do%20Aluno.pdf' },
    { text: 'Regimento Geral da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/326-regimento-geral-da-ufc' }
  ];

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Regimentos, Manuais e Outros
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        {regimentosData.map((item, index) => (
          <Box key={index} sx={{ py: 1 }}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                fontSize: '1rem',
                fontWeight: 400,
                cursor: 'pointer',
                textAlign: 'center',
                '&:hover': {
                  color: 'primary.dark',
                  textDecoration: 'underline'
                }
              }}
            >
              {item.text}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RegimentosPage; 