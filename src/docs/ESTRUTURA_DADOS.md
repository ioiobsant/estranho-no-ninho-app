# 📚 Documentação da Estrutura de Dados

## 🎯 Visão Geral

Esta aplicação possui uma estrutura de dados escalável e preparada para migração futura para API. Todo conteúdo está organizado de forma modular, tipada com TypeScript e fácil de manter.

## 🏗️ Arquitetura

```
src/
├── types/
│   └── contentData.ts          # Interfaces TypeScript base
├── data/
│   ├── README.md               # Documentação detalhada
│   ├── index.ts                # Índice centralizado
│   ├── assistenciaData.ts      # Dados de assistência
│   ├── bibliotecasData.ts      # Dados de bibliotecas
│   ├── carteirinhasData.ts     # Dados de carteirinhas
│   └── ...                     # Outros domínios
├── utils/
│   └── contentHelpers.ts       # Funções auxiliares
└── components/
    ├── ContentPage.tsx         # Componente genérico de página
    └── ConteudoIndisponivel.tsx # Fallback para conteúdo inexistente
```

## 🚀 Usando a Estrutura

### 1. Para Adicionar Novo Conteúdo

```typescript
// src/data/meuNovoConteudo.ts
import { CampusData, PageContent } from '../types/contentData';

export const meuConteudoData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Meu Título',
    subtitulo: 'Subtítulo opcional',
    secoes: [
      {
        titulo: 'Seção 1',
        conteudo: 'Texto do conteúdo'
      }
    ]
  },
  russas: {
    // ... dados para Russas
  }
};
```

### 2. Para Criar Nova Página

```typescript
// src/components/minha-categoria/MinhaPage.tsx
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { meuConteudoData } from '../../data/meuNovoConteudo';
import { getContentForCampus } from '../../utils/contentHelpers';

const MinhaPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(meuConteudoData, campus);
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default MinhaPage;
```

## 📋 Tipos Disponíveis

### PageContent
Conteúdo básico de página com título e seções:
```typescript
{
  titulo: string;
  subtitulo?: string;
  secoes: Array<{
    titulo: string;
    conteudo: string | string[];
  }>;
}
```

### ConteudoComContato
Estende PageContent com informações de contato:
```typescript
{
  ...PageContent,
  contato: {
    endereco?: string;
    fone?: string | string[];
    email?: string | string[];
    horario?: string | string[];
    site?: string;
  }
}
```

### ServicoContent
Para serviços como bibliotecas, RU, etc:
```typescript
{
  ...ConteudoComContato,
  descricao: string;
  requisitos?: string[];
  horarioFuncionamento?: string[];
}
```

## 🔄 Roadmap para API

Quando migrar para API, a transição será simples:

### Fase 1: Backend
```javascript
// API endpoints
GET /api/assistencia/:campus
GET /api/bibliotecas/:campus
GET /api/carteirinhas/:campus
```

### Fase 2: Service Layer
```typescript
// src/services/api.ts
export async function fetchContent<T>(
  endpoint: string, 
  campus: Campus
): Promise<T | null> {
  const res = await fetch(`/api/${endpoint}/${campus}`);
  return res.ok ? res.json() : null;
}
```

### Fase 3: React Hook
```typescript
// src/hooks/useContent.ts
export function useContent<T>(endpoint: string) {
  const { campus } = useCampus();
  const [content, setContent] = useState<T | null>(null);
  
  useEffect(() => {
    fetchContent<T>(endpoint, campus).then(setContent);
  }, [endpoint, campus]);
  
  return content;
}
```

### Fase 4: Atualizar Componentes
```typescript
// Antes
const content = getContentForCampus(meuConteudoData, campus);

// Depois
const content = useContent<PageContent>('meu-endpoint');
```

## 📝 Páginas Já Migradas

✅ AssistenciaEstudantilPage
✅ AssistenciaPsicologicaPage  
✅ AcessibilidadePage
✅ BibliotecaUfcPage
✅ BibliotecaMedicinaPage
✅ CarteiraEstudantilPage

## 📦 Páginas Pendentes

Estas páginas ainda precisam ser migradas para a nova estrutura:
- [ ] CarteiraRuPage
- [ ] IdJovemPage
- [ ] Páginas de Transportes
- [ ] Páginas de Cursos
- [ ] Outras páginas de conteúdo estático

## 🎓 Boas Práticas

1. **Sempre use TypeScript**: Aproveite os tipos para evitar erros
2. **Dados separados da lógica**: Mantenha dados em `/data`
3. **Reutilize o ContentPage**: Evita duplicação de código
4. **Documente casos especiais**: Adicione comentários quando necessário
5. **Teste com múltiplos campus**: Verifique se funciona para todos

## 🤝 Contribuindo

Ao adicionar novo conteúdo:
1. Crie/atualize o arquivo de dados em `/src/data`
2. Use os tipos existentes ou crie novos se necessário
3. Atualize a página para usar `ContentPage`
4. Teste com todos os campus
5. Atualize este documento

## 📞 Suporte

Para dúvidas sobre a estrutura:
- Veja `/src/data/README.md` para detalhes técnicos
- Veja exemplos nas páginas já migradas
- Consulte os tipos em `/src/types/contentData.ts`
