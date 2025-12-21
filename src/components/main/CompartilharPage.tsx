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
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { compartilharData } from '../../data';

const CompartilharPage = () => {
  const [copied, setCopied] = useState(false);
  const [qrCodeError, setQrCodeError] = useState(false);
  const theme = useTheme();

  const {
    appName,
    tagline,
    description,
    url,
    shareText,
    logoSrc,
    qrCodeSrc,
    instructions,
    installSections
  } = compartilharData;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: appName,
          text: shareText,
          url
        });
      } catch {
        /* usuário cancelou */
      }
    } else {
      handleCopyLink();
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
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px' }}>
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
            role="region"
            aria-label="Informações do app e botões de compartilhamento"
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
              <Typography variant="h6" fontWeight={600}>
                {appName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px' }}>
                {tagline}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px' }}>
                {description}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Stack spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<ShareIcon />}
                  onClick={handleNativeShare}
                  aria-label="Compartilhar o app Um Estranho no Ninho"
                  sx={{ 
                    py: 1.2, 
                    minHeight: '44px',
                    minWidth: '44px',
                    fontSize: '18px'  // WCAG AA: mínimo 18px para texto normal
                  }} // tamanho minimo do botao para atender as normas de acessibilidade. 
                >
                  Compartilhar agora
                </Button>
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
                    fontSize: '18px'  // WCAG AA: mínimo 18px para texto normal
                  }} // tamanho minimo do botao para atender as normas de acessibilidade. 
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
                    fontSize: '18px'  // WCAG AA: mínimo 18px para texto normal
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
              gap: 3,
              height: '100%'
            }}
          >
            <Box textAlign="center" mb={2}>
              <Typography id="qr-code-title" variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: '18px' }}>
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
                  <Typography variant="body2" color="text.secondary" textAlign="center" px={2} sx={{ fontSize: '18px' }}>
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
              <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ fontSize: '18px' }}>
                {instructions.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '18px' }}>
                {instructions.body}
              </Typography>
              <Button
                variant="text"
                startIcon={<DownloadIcon />}
                onClick={() => window.print()}
                aria-label="Imprimir ou salvar esta página como PDF"
                sx={{ 
                  py: 1.2, 
                  minHeight: '44px',
                  minWidth: '44px',
                  fontSize: '18px'  // WCAG AA: mínimo 18px para texto normal
                }} // tamanho minimo do botao para atender as normas de acessibilidade. 
              >
                {instructions.ctaLabel}
              </Button>
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
              <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: '18px' }}>
                Como instalar o app no celular
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                {installSections.map((section) => (
                  <Box key={section.platform}>
                    <Paper
                      variant="outlined"
                      sx={{ p: 2, height: '100%', borderRadius: 2 }}
                    >
                      <Typography variant="body1" fontWeight={600} mb={1} sx={{ fontSize: '18px' }}>
                        {section.platform}
                      </Typography>
                      <ol style={{ paddingLeft: '1.1rem', margin: 0 }}>
                        {section.steps.map((step, index) => (
                          <li key={index}>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ 
                                mb: index === section.steps.length - 1 ? 0 : 1,
                                fontSize: '18px'  // WCAG AA: mínimo 18px para texto normal
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

