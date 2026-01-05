import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { compartilharData } from '../../data';

const CompartilharPage = () => {
  const [copied, setCopied] = useState(false);
  const [qrCodeError, setQrCodeError] = useState(false);
  const theme = useTheme();

  const {
    appName,
    description,
    url,
    logoSrc,
    qrCodeSrc,
    instructions,
    installSections
  } = compartilharData;

  const handleCopyLink = async () => {
    try {
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
      
      
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } else {
          setCopied(false);
        }
      } catch (err) {
        setCopied(false);
      } finally {
        document.body.removeChild(textArea);
      }
    } catch (error) {
      setCopied(false);
    }
  };


  return (
    <Box
      sx={{
        pt: 1,
        pb: 8,
        bgcolor: 'background.paper',
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        overflowX: 'hidden'
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant="h1" color="primary" fontWeight={600} fontSize="2rem">
          Compartilhar o Estranho no Ninho
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
          Divulgue o app para outras pessoas do seu campus
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 1600, mx: 'auto' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 4
          }}
        >
          {/* Div 1: Logo e Botões */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              textAlign: 'center'
            }}
          >
              <Box
                component="img"
                src={logoSrc}
                alt={`Logo ${appName}`}
                sx={{
                  width: 300,
                  height: 300,
                  objectFit: 'contain',
                  alignSelf: 'center',
                  bgcolor: '#77b6d1',
                  borderRadius: '5%',
                  
                }}
              />
              <Typography variant="h2" fontSize="1.5rem" fontWeight={600}>
                {appName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
                {description}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Stack spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopyLink}
                  aria-live="polite"
                  aria-label={copied ? 'Link copiado com sucesso para a área de transferência' : 'Copiar link do app para a área de transferência'}
                  sx={{ 
                    py: 1.2, 
                    minHeight: '44px',
                    minWidth: '44px',
                    fontSize: '1.125rem'  
                  }}  
                >
                  {copied ? 'Link copiado!' : 'Copiar link'}
                </Button>
                <Box
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acessar ${appName} em nova aba. Link: ${url}`}
                  style={{
                    wordBreak: 'break-all',
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '1.125rem'  // tamanho minimo do texto para atender as normas de acessibilidade. 
                  }} 
                >
                  {url.replace('https://', '')}
                </Box>
              </Stack>
          </Paper>

          {/* Div 2: QR Code */}
          <Paper
            role="region"
            aria-label="QR Code e instruções de uso"
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              height: '100%'
            }}
          >
            <Box textAlign="center" mb={1}>
              <Typography id="qr-code-title" variant="h2" fontWeight={600} mb={1} sx={{ fontSize: '1.125rem' }}>
                Escaneie o QR Code
              </Typography>
              {qrCodeError ? (
                <Box
                  sx={{
                    width: { xs: 200, md: 180 },
                    height: { xs: 200, md: 180 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed',
                    borderColor: 'divider',
                    borderRadius: 2,
                    mx: 'auto',
                    bgcolor: 'action.hover'
                  }}
                >
                  <Typography variant="body2" color="text.secondary" textAlign="center" px={2} sx={{ fontSize: '1.125rem' }}>
                    Imagem do QR code não encontrada.
                  </Typography>
                </Box>
              ) : (
                <Box
                  component="img"
                  src={qrCodeSrc}
                  alt="QR Code para compartilhar o app"
                  aria-describedby="qr-code-title"
                  onError={() => setQrCodeError(true)}
                  sx={{
                    width: { xs: 200, md: 180 },
                    height: { xs: 200, md: 180 },
                    objectFit: 'contain',
                    display: 'block',
                    mx: 'auto'
                  }}
                />
              )}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="h2" fontWeight={600} gutterBottom sx={{ fontSize: '1.125rem' }}>
                {instructions.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '1.125rem' }}>
                {instructions.body}
              </Typography>
            </Box>
          </Paper>

          {/* Div 3: Instalação */}
          <Paper
            role="region"
            aria-label="Instruções de instalação do app em diferentes plataformas"
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%'
            }}
          >
              <Typography variant="h2" fontWeight={600} mb={1} sx={{ fontSize: '1.125rem' }}>
              INSTALE NO SEU CELULAR
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '1.125rem' }}> Para facilitar o acesso, é possível instalar o Um Estranho no Ninho no seu celular, permitindo utilizá-lo como um aplicativo nativo, sem a necessidade de abrir o navegador. Basta seguir as instruções abaixo.  </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1
                }}
              >
                {installSections.map((section) => (
                  <Box key={section.platform}>
                    <Paper
                      variant="outlined"
                      sx={{ p: 2, height: '100%', borderRadius: 2 }}
                    >
                      <Typography variant="h3" fontWeight={600} mb={1} sx={{ fontSize: '1.125rem' }}>
                        {section.platform}
                      </Typography>
                      <ol style={{ paddingLeft: '1.1rem', margin: 0 }}>
                        {section.steps.map((step, index) => (
                          <li  key={index}>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ 
                                mb: index === section.steps.length - 1 ? 0 : 1,
                                fontSize: '1.125rem'  
                              }}
                            >
                              {step}
                            </Typography>
                          </li>
                        ))}
                      </ol>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CompartilharPage;

