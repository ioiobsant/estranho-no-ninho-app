# 📚 Estrutura de Dados do Sistema

Esta é a estrutura de dados escalável e preparada para futura migração para API.

## 🏗️ Arquitetura

### Tipos Base (`/src/types/contentData.ts`)
Define as interfaces TypeScript reutilizáveis:
- `Campus`: Tipo para os campus disponíveis
- `PageContent`: Conteúdo básico de página
- `ConteudoComContato`: Conteúdo com informações de contato
- `ServicoContent`: Conteúdo de serviços (bibliotecas, RU, etc)
- `CampusData<T>`: Wrapper genérico para dados por campus

### Dados por Domínio (`/src/data/`)
Cada arquivo contém os dados de um domínio específico:
- `assistenciaData.ts`: Dados de assistência estudantil, psicológica, acessibilidade
- `bibliotecasData.ts`: Dados das bibliotecas da UFC
- `carteirinhasData.ts`: Dados sobre carteirinhas estudantis
- Adicione novos arquivos conforme necessário

### Helpers (`/src/utils/contentHelpers.ts`)
Funções utilitárias para trabalhar com os dados:
- `getContentForCampus()`: Busca conteúdo para um campus específico
- `hasContentForCampus()`: Verifica se existe conteúdo
- `renderContent()`: Formata strings ou arrays para renderização
- `formatList()`: Formata listas com bullet points

### Componente Genérico (`/src/components/ContentPage.tsx`)
Componente reutilizável que renderiza qualquer tipo de conteúdo automaticamente.

## 🚀 Como Usar

### 1. Criar/Atualizar Dados

```typescript
// src/data/meuDominio.ts
import { CampusData, PageContent } from '../types/contentData';

export const meuConteudoData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Título Sobral',
    subtitulo: 'Subtítulo opcional',
    secoes: [
      {
        titulo: 'Seção 1',
        conteudo: 'Texto da seção'
      },
      {
        titulo: 'Seção 2',
        conteudo: ['Item 1', 'Item 2', 'Item 3'] // Array para múltiplos parágrafos
      }
    ]
  },
  russas: {
    titulo: 'Título Russas',
    secoes: [/* ... */]
  }
};
```

### 2. Usar na Página

```typescript
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { meuConteudoData } from '../../data/meuDominio';
import { getContentForCampus } from '../../utils/contentHelpers';

const MinhaPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(meuConteudoData, campus);
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};
```

## 🔄 Migração para API (Futuro)

Esta estrutura facilita a migração para API:

### Passo 1: Criar endpoints na API
```
GET /api/assistencia/:campus
GET /api/bibliotecas/:campus
GET /api/carteirinhas/:campus
```

### Passo 2: Criar service layer
```typescript
// src/services/contentService.ts
export async function getContentForCampus<T>(
  endpoint: string,
  campus: Campus
): Promise<T | null> {
  const response = await fetch(`/api/${endpoint}/${campus}`);
  if (!response.ok) return null;
  return response.json();
}
```

### Passo 3: Atualizar páginas
```typescript
// Antes (dados estáticos)
const content = getContentForCampus(meuConteudoData, campus);

// Depois (API)
const [content, setContent] = useState(null);
useEffect(() => {
  getContentForCampus('meu-endpoint', campus)
    .then(setContent);
}, [campus]);
```

## 📝 Boas Práticas

1. **Sempre use os tipos TypeScript**: Garante consistência
2. **Organize por domínio**: Um arquivo por área funcional
3. **Use o ContentPage quando possível**: Evita duplicação de código
4. **Documente dados específicos**: Se algo é específico de um campus, adicione comentário
5. **Mantenha dados separados da lógica**: Facilita manutenção e testes

## 🎯 Vantagens

✅ **Escalável**: Fácil adicionar novos campus ou conteúdos  
✅ **Type-safe**: TypeScript garante consistência  
✅ **DRY**: Componentes reutilizáveis evitam duplicação  
✅ **Manutenível**: Dados centralizados facilitam atualizações  
✅ **Preparado para API**: Estrutura pronta para migração  
✅ **Testável**: Dados separados facilitam testes unitários  
