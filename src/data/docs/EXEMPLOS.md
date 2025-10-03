# 📝 Exemplos Práticos - Estrutura de Dados

## 🎯 Guia Prático com Exemplos Reais

Este guia mostra exemplos práticos de como adicionar e usar dados na aplicação.

---

## 1️⃣ Exemplo: Adicionar Nova Página de Conteúdo Simples

### Cenário
Criar uma página "Eventos Acadêmicos" com conteúdo diferente para cada campus.

### Passo 1: Criar dados
```typescript
// src/data/eventosData.ts
import { CampusData, PageContent } from '../types/contentData';

export const eventosAcademicosData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Eventos Acadêmicos',
    subtitulo: 'Eventos do Campus de Sobral',
    secoes: [
      {
        titulo: 'Semana Universitária',
        conteudo: 'A Semana Universitária acontece em outubro e reúne diversos eventos acadêmicos, culturais e científicos.'
      },
      {
        titulo: 'Como Participar',
        conteudo: [
          'Fique atento ao calendário acadêmico',
          'Inscreva-se através do SIGAA',
          'Apresente certificado de participação'
        ]
      }
    ]
  },
  russas: {
    titulo: 'Eventos Acadêmicos',
    subtitulo: 'Eventos do Campus de Russas',
    secoes: [
      {
        titulo: 'Eventos do Campus',
        conteudo: 'Confira os eventos no site do campus de Russas.'
      }
    ]
  }
};
```

### Passo 2: Exportar no index
```typescript
// src/data/index.ts
export { eventosAcademicosData } from './eventosData';
```

### Passo 3: Criar componente
```typescript
// src/components/eventos/EventosAcademicosPage.tsx
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { eventosAcademicosData } from '../../data';
import { getContentForCampus } from '../../utils/contentHelpers';

const EventosAcademicosPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(eventosAcademicosData, campus);
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default EventosAcademicosPage;
```

**Pronto! 🎉** Página funcional com 3 arquivos simples.

---

## 2️⃣ Exemplo: Página com Contato

### Cenário
Criar página "Ouvidoria" com dados de contato.

```typescript
// src/data/ouvidoriaData.ts
import { CampusData, ConteudoComContato } from '../types/contentData';

export const ouvidoriaData: CampusData<ConteudoComContato> = {
  sobral: {
    titulo: 'Ouvidoria',
    subtitulo: 'Fale com a ouvidoria do campus',
    secoes: [
      {
        titulo: 'O que é',
        conteudo: 'A Ouvidoria é o canal de comunicação entre a comunidade acadêmica e a administração da UFC.'
      },
      {
        titulo: 'Como usar',
        conteudo: 'Envie suas sugestões, reclamações ou elogios através dos canais abaixo.'
      }
    ],
    contato: {
      email: ['ouvidoria.sobral@ufc.br'],
      fone: ['(88) 3695-4600'],
      horario: ['Segunda a sexta: 8h às 17h'],
      site: 'https://ouvidoria.ufc.br'
    }
  },
  russas: {
    titulo: 'Ouvidoria',
    subtitulo: 'Fale com a ouvidoria do campus',
    secoes: [
      {
        titulo: 'Canal de Comunicação',
        conteudo: 'Entre em contato com a ouvidoria.'
      }
    ],
    contato: {
      email: ['ouvidoria.russas@ufc.br'],
      fone: ['(88) 3411-9200']
    }
  }
};
```

**Uso**: Igual ao exemplo 1, o componente `ContentPage` renderiza automaticamente a seção de contato.

---

## 3️⃣ Exemplo: Serviço Completo (como RU ou Biblioteca)

### Cenário
Criar página "Centro de Convivência" com descrição, requisitos e horários.

```typescript
// src/data/centroConvivenciaData.ts
import { CampusData, ServicoContent } from '../types/contentData';

export const centroConvivenciaData: CampusData<ServicoContent> = {
  sobral: {
    titulo: 'Centro de Convivência',
    subtitulo: 'Espaço de integração estudantil',
    descricao: 'O Centro de Convivência é um espaço dedicado à integração da comunidade acadêmica, oferecendo áreas de estudo, lazer e alimentação.',
    secoes: [
      {
        titulo: 'Atividades Disponíveis',
        conteudo: [
          'Salas de estudo em grupo',
          'Área de descanso',
          'Cantina',
          'Wi-Fi gratuito'
        ]
      }
    ],
    requisitos: [
      'Ter matrícula ativa',
      'Apresentar identificação estudantil'
    ],
    horarioFuncionamento: [
      'Segunda a sexta: 7h às 22h',
      'Sábado: 8h às 18h'
    ],
    contato: {
      endereco: 'R. Coronel Estanislau Frota, 563',
      fone: ['(88) 3695-4650'],
      email: ['centroconvivencia@sobral.ufc.br']
    }
  },
  russas: {
    titulo: 'Centro de Convivência',
    subtitulo: 'Espaço de integração estudantil',
    descricao: 'Espaço para estudo e convivência no campus de Russas.',
    secoes: [],
    requisitos: ['Matrícula ativa'],
    horarioFuncionamento: ['Segunda a sexta: 8h às 20h'],
    contato: {
      endereco: 'Rua Felipe Santiago, 411',
      fone: ['(88) 3411-9200']
    }
  }
};
```

**Vantagem**: O componente `ContentPage` renderiza automaticamente todas as seções especiais (descrição, requisitos, horários, contato).

---

## 4️⃣ Exemplo: Conteúdo Apenas para Um Campus

### Cenário
VLT existe apenas em Sobral.

```typescript
// src/data/transportesData.ts
import { CampusData, PageContent } from '../types/contentData';

export const vltData: Partial<CampusData<PageContent>> = {
  sobral: {
    titulo: 'VLT - Veículo Sobre Trilhos',
    subtitulo: 'Sistema de transporte sobre trilhos de Sobral',
    secoes: [
      {
        titulo: 'Sobre o VLT',
        conteudo: 'O Metrô de Sobral oferece transporte ágil...'
      }
    ]
  }
  // Não definimos 'russas', então será undefined
};
```

**Uso**: O helper `getContentForCampus` retorna `null` para Russas, mostrando automaticamente `<ConteudoIndisponivel />`.

---

## 5️⃣ Exemplo: Página de Links

### Cenário
Criar página de "Sistemas Acadêmicos".

```typescript
// src/data/sistemasData.ts
import { CampusData } from '../types/contentData';
import { LinksUteisContent } from './linksUteisData';

export const sistemasAcademicosData: CampusData<LinksUteisContent> = {
  sobral: {
    titulo: 'Sistemas Acadêmicos',
    links: [
      { text: 'SIGAA', url: 'https://si3.ufc.br/sigaa' },
      { text: 'SIPAC', url: 'https://si3.ufc.br/sipac' },
      { text: 'Portal do Aluno', url: 'https://www.ufc.br/aluno' },
      { text: 'Biblioteca Digital', url: null } // null = não tem link ainda
    ]
  },
  russas: {
    titulo: 'Sistemas Acadêmicos',
    links: [
      { text: 'SIGAA', url: 'https://si3.ufc.br/sigaa' },
      { text: 'Portal do Aluno', url: 'https://www.ufc.br/aluno' }
    ]
  }
};
```

**Componente**:
```typescript
import LinksPage from '../LinksPage'; // Use LinksPage ao invés de ContentPage

const SistemasAcademicosPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(sistemasAcademicosData, campus);
  
  if (!content) return <ConteudoIndisponivel />;
  return <LinksPage content={content} />; // LinksPage renderiza links
};
```

---

## 6️⃣ Exemplo: Dados Dinâmicos por Curso

### Cenário
Informações específicas por curso (futuro).

```typescript
// src/data/cursosData.ts
import { CampusData, PageContent } from '../types/contentData';

interface CursoData {
  coordenacao: PageContent;
  grade: any; // estrutura específica
  informacoes: PageContent;
}

export const cursosData: Record<string, Partial<CampusData<CursoData>>> = {
  medicina: {
    sobral: {
      coordenacao: {
        titulo: 'Coordenação de Medicina',
        secoes: [/* ... */]
      },
      grade: {/* ... */},
      informacoes: {/* ... */}
    }
  },
  psicologia: {
    sobral: {/* ... */},
    russas: {/* ... */}
  }
};
```

---

## 🎓 Dicas Importantes

### ✅ Boas Práticas

1. **Use tipos existentes**: `PageContent`, `ConteudoComContato`, `ServicoContent`
2. **Arrays para múltiplos itens**: `conteudo: ['item 1', 'item 2']`
3. **String para texto único**: `conteudo: 'Texto único'`
4. **Partial para conteúdo opcional**: `Partial<CampusData<T>>`
5. **Sempre exporte no index.ts**: Facilita imports

### ❌ Evitar

1. ❌ Não misture lógica de negócio com dados
2. ❌ Não coloque HTML nos dados (use strings simples)
3. ❌ Não duplique estruturas (reutilize tipos)
4. ❌ Não esqueça de testar com ambos os campus

---

## 🚀 Resumo: 5 Minutos para Nova Página

1. **Criar dados** (2 min): `src/data/meuDado.ts`
2. **Exportar** (30 seg): `src/data/index.ts`
3. **Criar página** (2 min): Componente com 5 linhas
4. **Testar** (30 seg): Verificar ambos campus

**Total: ~5 minutos** para uma página completa e escalável! ⚡
