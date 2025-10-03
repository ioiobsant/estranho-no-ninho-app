import { Box, Typography, Link } from '@mui/material';
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';

const LinksUteisPage = () => {
  const { campus } = useCampus();

  if (campus === 'russas') {
    return <ConteudoIndisponivel />;
  }
  const linksData = [
    { text: 'Sistema Integrado de Gestão de Atividades Acadêmicas - SIGAA', url: 'https://si3.ufc.br/sigaa/verTelaLogin.do' },
    { text: 'Agência de Estágios', url: null },
    { text: 'Biblioteca Universitária', url: null },
    { text: 'Casas de Cultura Estrangeira', url: null },
    { text: 'Ciência sem Fronteiras', url: null },
    { text: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq', url: 'https://www.gov.br/cnpq/pt-br' },
    { text: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - CAPES', url: 'https://www.gov.br/capes/pt-br' },
    { text: 'Diretório Central dos Estudantes - DCE', url: null },
    { text: 'Ministério da Educação', url: 'https://www.gov.br/mec/pt-br' },
    { text: 'Pró-Reitoria de Planejamento e Administração', url: 'https://proplad.ufc.br/pt/' },
    { text: 'Pró-Reitoria de Assuntos Estudantis', url: 'https://prae.ufc.br/pt/' },
    { text: 'Pró-Reitoria de Extensão', url: 'https://prex.ufc.br/pt/' },
    { text: 'Pró-Reitoria de Graduação', url: 'https://prograd.ufc.br/pt/' },
    { text: 'Pró-Reitoria de Inovação e Relações Interinstitucionais', url: 'https://prointer.ufc.br/pt/' },
    { text: 'UFC Virtual', url: 'https://virtual.ufc.br/' }
  ];

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Links Úteis
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        {linksData.map((item, index) => (
          <Box key={index} sx={{ py: 1 }}>
            {item.url ? (
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
            ) : (
              <Typography
                sx={{
                  color: 'text.primary',
                  fontSize: '1rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                {item.text}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LinksUteisPage; 