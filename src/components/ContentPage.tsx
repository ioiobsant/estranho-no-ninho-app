import { Box, Typography, Divider } from '@mui/material';
import { PageContent, ConteudoComContato, ServicoContent } from '../types/contentData';
import { renderContent, formatList } from '../utils/contentHelpers';

// === Estilos Específicos do ContentPage ===
// Herda configurações globais do tema (App.tsx)
// Adiciona apenas customizações específicas para páginas de conteúdo

const sectionBoxSx = { mb: 3 };

const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 600,
  color: 'primary' as const,  // #1565C0 (contraste 5.1:1 )
  gutterBottom: true,
  fontSize: 20,  // Override: maior que o padrão para melhor hierarquia visual
};

const dividerSx = { mb: 1 };

const bodyTextProps = { 
  variant: 'body1' as const,  // Herda do tema: 18px, lineHeight 1.6, letterSpacing 0.02em
  color: 'text.secondary' as const,  // #3E5060 (contraste 9.0:1)
  sx: {
    // === Espaçamentos Específicos WCAG 1.4.12 ===
    // Não definidos no tema global, apenas para conteúdo de texto
    '& p': { 
      marginBottom: '2em',  // WCAG: espaçamento entre parágrafos (mínimo 2x) 
    },
    wordSpacing: '0.16em',  // WCAG: espaçamento entre palavras (mínimo 0.16x) 
  }
};

interface ContentPageProps {
  content: PageContent | ConteudoComContato | ServicoContent | null;
} 

/**
 * Componente genérico para renderizar páginas de conteúdo
 * Suporta PageContent, ConteudoComContato e ServicoContent
 */
const ContentPage = ({ content }: ContentPageProps) => {
  // Se não há conteúdo, mostrar mensagem de construção
  if (!content) {
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
            Conteúdo em Construção
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Esta página está sendo desenvolvida para este campus
          </Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem' },
            color: 'text.secondary',
            textAlign: 'center',
            mt: 4
          }}>
            Em construção
          </Typography>
        </Box>
      </Box>
    );
  }
  const isServicoContent = 'descricao' in content;
  const hasContato = 'contato' in content;
  const servicoContent = content as ServicoContent;

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
      {/* Header */}
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h5" color="primary" fontWeight="600" component="p">
          {content.titulo}
        </Typography>
        {content.subtitulo && (
          <Typography variant="body2" color="text.secondary" component="p">
            {content.subtitulo}
          </Typography>
        )}
      </Box>

      <Box sx={{ p: 3 }}>
        {/* Descrição (para ServicoContent) */}
        {isServicoContent && servicoContent.descricao && (
          <Box sx={sectionBoxSx}>
            <Typography {...sectionTitleProps}>Sobre</Typography>
            <Divider sx={dividerSx} />
            <Typography {...bodyTextProps}>
              {servicoContent.descricao}
            </Typography>
          </Box>
        )}

        {/* Seções de conteúdo */}
        {content.secoes.map((secao, index) => (
          <Box key={index} sx={sectionBoxSx}>
            <Typography {...sectionTitleProps}>{secao.titulo}</Typography>
            <Divider sx={dividerSx} />
            <Typography 
              {...bodyTextProps}
              dangerouslySetInnerHTML={{ 
                __html: Array.isArray(secao.conteudo) 
                  ? formatList(secao.conteudo) 
                  : renderContent(secao.conteudo) 
              }}
            />
          </Box>
        ))}

        {/* Requisitos (para ServicoContent) */}
        {isServicoContent && servicoContent.requisitos && servicoContent.requisitos.length > 0 && (
          <Box sx={sectionBoxSx}>
            <Typography {...sectionTitleProps}>
              Documentos necessários
            </Typography>
            <Divider sx={dividerSx} />
            <Typography 
              {...bodyTextProps}
              dangerouslySetInnerHTML={{ 
                __html: formatList(servicoContent.requisitos) 
              }}
            />
          </Box>
        )}

        {/* Horário de funcionamento (para ServicoContent) */}
        {isServicoContent && servicoContent.horarioFuncionamento && servicoContent.horarioFuncionamento.length > 0 && (
          <Box sx={sectionBoxSx}>
            <Typography {...sectionTitleProps}>
              Horário de funcionamento
            </Typography>
            <Divider sx={dividerSx} />
            <Typography 
              {...bodyTextProps}
              dangerouslySetInnerHTML={{ 
                __html: formatList(servicoContent.horarioFuncionamento) 
              }}
            />
          </Box>
        )}

        {/* Contato */}
        {hasContato && (content as ConteudoComContato).contato && (
          <Box sx={sectionBoxSx}>
            <Typography {...sectionTitleProps}>Contato</Typography>
            <Divider sx={dividerSx} />
            <Typography {...bodyTextProps}>
              {(content as ConteudoComContato).contato.endereco && (
                <>
                  <strong>Endereço:</strong> {(content as ConteudoComContato).contato.endereco}
                  <br/>
                </>
              )}
              {(content as ConteudoComContato).contato.fone && (
                <>
                  <strong>Fone:</strong> {renderContent((content as ConteudoComContato).contato.fone!)}
                  <br/>
                </>
              )}
              {(content as ConteudoComContato).contato.email && (
                <>
                  <strong>Email:</strong> {renderContent((content as ConteudoComContato).contato.email!)}
                  <br/>
                </>
              )}
              {(content as ConteudoComContato).contato.horario && (
                <>
                  {renderContent((content as ConteudoComContato).contato.horario!)}
                </>
              )}
              {(content as ConteudoComContato).contato.site && (
                <>
                  <strong>Site:</strong> {(content as ConteudoComContato).contato.site}
                </>
              )}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContentPage;
