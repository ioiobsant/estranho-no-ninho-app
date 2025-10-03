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
const listUlSx = {
  pl: 3,
  m: 0,
  color: 'text.secondary',
  '& li::marker': { color: 'text.primary' },
  '& li > p': { fontSize: 16, lineHeight: 1.6 },
  '& li': { mb: 1 },
  '& li:last-child': { mb: 0 },
};

const FormarPageAtivComp = () => {
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
        py: 2
      }}>
        <Typography variant="h6" color="primary" fontWeight="800">
          Atividades Complementares
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" fontSize={16} mt={2}>
          Têm como objetivo enriquecer o processo de ensino-aprendizagem, incentivando a participação em experiências diversificadas que contribuam para a sua formação humana e profissional, a regulamentação pode variar de um curso para outro, como exemplos de modalidades das atividades complementares temos (confira no fim os links para cada curso):
        </Typography>
      </Box>



    <Box sx={{ p: 3}}>
      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Iniciação à Docência, Pesquisa e/ou Extensão:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Programa de Monitoria Remunerada e Voluntária da Pró-Reitoria de Graduação e/ou Escola Integrada de Desenvolvimento e Inovação Acadêmica (EIDEIA);</Typography></li>
          <li><Typography variant="body2">Programa de Iniciação Científica, com bolsa ou como voluntário, vinculado à Pró-Reitoria de Pesquisa e Pós-Graduação e/ou, pesquisa de um professor cadastrada em um dos departamentos acadêmicos da UFC;</Typography></li>
          <li><Typography variant="body2">Laboratório de Pesquisa cadastrado na Pró-Reitoria de Pesquisa e Pós-Graduação;</Typography></li>
          <li><Typography variant="body2">PET (Programa de Educação Tutorial);</Typography></li>
          <li><Typography variant="body2">PBIA (Programa de Bolsa de Iniciação Acadêmica).</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Participação e/ou Organização de Eventos:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Participação em eventos científicos e culturais;</Typography></li>
          <li><Typography variant="body2">Organização de eventos científicos e culturais.</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Atividades Artístico-Culturais e Esportivas:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Participação em Projetos Culturais cadastrados no Instituto de Cultura e Arte da UFC e/ou conveniados com o curso;</Typography></li>
          <li><Typography variant="body2">Participação em atividades esportivas cadastradas no Pólo Esportivo da UFC e/ou em Associações e Federações Desportivas reconhecidas.</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Experiências Ligadas à Formação Profissional:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Cursos relacionados à formação profissional;</Typography></li>
          <li><Typography variant="body2">Estágios na área devidamente cadastrados no setor de estágios da UFC.</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Produção Técnica e/ou Científica:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Publicação de artigo científico em periódico indexado, livro e/ou anais de congresso ou encontro;</Typography></li>
          <li><Typography variant="body2">Apresentação de trabalho em congresso ou encontro.</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em Vivências de Gestão:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Participação como conselheiro nas instâncias da UFC: Colegiado de Curso, Colegiado do Campus de Sobral, Conselho Universitário ou Conselho de Ensino, Pesquisa e Extensão;</Typography></li>
          <li><Typography variant="body2">Participação na gestão do Centro Acadêmico e/ou Diretório Central dos Estudantes;</Typography></li>
          <li><Typography variant="body2">Participação na gestão de entidades vinculadas ao curso;</Typography></li>
          <li><Typography variant="body2">Participação em comissões regulamentadas pela Coordenação do Curso e/ou outras Unidades da UFC.</Typography></li>
        </Typography>
      </Box>

      <Box sx={sectionBoxSx}>
        <Typography {...sectionTitleProps}>
          Atividade complementar em outras atividades estratégicas para o curso:
        </Typography>
        <Divider sx={dividerSx} />
        <Typography component="ul" sx={listUlSx}>
          <li><Typography variant="body2">Participação em curso de línguas vinculados às Instituições de Ensino Superior e/ou órgãos da Administração Pública;</Typography></li>
          <li><Typography variant="body2">Participação em grupo de estudo vinculado a um dos cursos e/ou departamentos acadêmicos da UFC.</Typography></li>
        </Typography>
      </Box>

      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Economia</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Engenharia da Computação</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Engenharia Elétrica</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Finanças</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Medicina</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Música</Typography>
      </Typography>
      <Typography>
        <Typography fontSize={18} mt={4} variant='subtitle1' color='black' fontWeight={500}> Atividades Complementares do Curso de Odontologia</Typography>
      </Typography>

    </Box>

    </Box>
  );
};

export default FormarPageAtivComp;
