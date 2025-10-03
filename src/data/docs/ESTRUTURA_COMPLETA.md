# 📚 Estrutura de Dados Completa - Guia Rápido

## 🎯 Visão Geral

Sistema de dados completo, escalável e preparado para API com **25 páginas migradas**.

---

## 📦 Como Usar (Guia Rápido)

### Importar Dados

```typescript
// Importação simples de qualquer dado
import { 
  assistenciaEstudantilData,
  bibliotecaUfcData,
  bolsasIniciacaoCientificaData,
  carteiraEstudantilData,
  matriculaData,
  vltData,
  regimentosData
} from '../../data';
```

### Criar Página com Dados

```typescript
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { assistenciaEstudantilData } from '../../data';
import { getContentForCampus } from '../../utils/contentHelpers';

const MinhaPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(assistenciaEstudantilData, campus);
  
  if (!content) return <ConteudoIndisponivel />;
  return <ContentPage content={content} />;
};
```

### Página com Links

```typescript
import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import LinksPage from '../LinksPage';
import { regimentosData } from '../../data';
import { getContentForCampus } from '../../utils/contentHelpers';

const RegimentosPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(regimentosData, campus);
  
  if (!content) return <ConteudoIndisponivel />;
  return <LinksPage content={content} />;
};
```

---

## 📊 Dados Disponíveis

### 🏥 Assistência (3)
```typescript
import { 
  assistenciaEstudantilData,
  assistenciaPsicologicaData,
  acessibilidadeData 
} from '../../data';
```

### 📚 Bibliotecas (2)
```typescript
import { 
  bibliotecaUfcData,
  bibliotecaMedicinaData 
} from '../../data';
```

### 💰 Bolsas (6)
```typescript
import { 
  bolsasIniciacaoCientificaData,
  pibicData,
  paipData,
  pidData,
  bolsasExtensaoData,
  auxiliosData 
} from '../../data';
```

### 🎫 Carteirinhas (3)
```typescript
import { 
  carteiraEstudantilData,
  carteiraRuData,
  idJovemData 
} from '../../data';
```

### 📝 Formar (4)
```typescript
import { 
  matriculaData,
  notasData,
  faltasData,
  trancamentoData 
} from '../../data';
```

### 🚌 Transportes (5)
```typescript
import { 
  vltData,
  passeLivreData,
  passeLivreSobralData,
  onibusIntracampusData,
  taxiData 
} from '../../data';
```

### 🔗 Links Úteis (2)
```typescript
import { 
  regimentosData,
  linksUteisData 
} from '../../data';
```

---

## 🔧 Tipos Disponíveis

```typescript
// Conteúdo básico
interface PageContent {
  titulo: string;
  subtitulo?: string;
  secoes: Secao[];
}

// Com contato
interface ConteudoComContato extends PageContent {
  contato: Contato;
}

// Serviços (bibliotecas, RU, etc)
interface ServicoContent extends ConteudoComContato {
  descricao: string;
  requisitos?: string[];
  horarioFuncionamento?: string[];
}

// Links
interface LinksUteisContent {
  titulo: string;
  links: LinkUtil[];
}
```

---

## 🎨 Componentes

```typescript
// Para conteúdo padrão
<ContentPage content={content} />

// Para links
<LinksPage content={content} />

// Para conteúdo indisponível
<ConteudoIndisponivel />
```

---

## 🚀 3 Linhas = Página Pronta

```typescript
const MinhaPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(meuDado, campus);
  if (!content) return <ConteudoIndisponivel />;
  return <ContentPage content={content} />;
};
```

---

## ✅ Checklist de Migração

Para migrar uma página existente:

1. ✅ Criar dados em `src/data/meuDominio.ts`
2. ✅ Exportar no `src/data/index.ts`
3. ✅ Atualizar componente para usar `ContentPage` ou `LinksPage`
4. ✅ Importar dados e usar `getContentForCampus`
5. ✅ Testar com ambos os campus (Sobral e Russas)

---

## 📖 Mais Informações

- **Documentação Completa**: `ESTRUTURA_DADOS.md` (raiz)
- **Detalhes Técnicos**: `README.md` (este diretório)
- **Status da Migração**: `MIGRAÇÃO_ESTRUTURA_DADOS.md` (raiz)
