# 📁 Estrutura de Dados - Organizada

## 📊 Nova Estrutura

```
data/
├── index.ts                      # Índice centralizado
│
├── assistencia/                  # Dados de assistência estudantil
│   └── assistenciaData.ts
│
├── bibliotecas/                  # Dados de bibliotecas
│   └── bibliotecasData.ts
│
├── bolsas/                       # Dados de bolsas e auxílios
│   └── bolsasData.ts
│
├── carteirinhas/                 # Dados de carteirinhas
│   └── carteirinhasData.ts
│
├── cursos/                       # Dados de cursos
│   ├── cursosData.ts            # Coordenações de cursos
│   └── grades/                   # Grades curriculares
│       ├── index.ts
│       ├── cienciasEconomicasGrade.ts
│       ├── engenhariaComputacaoGrade.ts
│       ├── engenhariaEletricaGrade.ts
│       ├── financasGrade.ts
│       ├── medicinaGrade.ts
│       ├── musicaGrade.ts
│       ├── odontologiaGrade.ts
│       └── psicologiaGrade.ts
│
├── formar/                       # Dados para "Para me formar"
│   └── formarData.ts
│
├── links-uteis/                  # Links úteis e recursos
│   └── linksUteisData.ts
│
├── transportes/                  # Dados de transportes
│   └── transportesData.ts
│
├── mapa/                         # Dados do mapa interativo
│   ├── blocoEngenharia.ts       # GeoJSON do bloco de engenharia
│   ├── geoJsonData.ts           # Dados GeoJSON
│   └── mapData.ts               # Configurações do mapa
│
└── docs/                         # Documentação
    ├── README.md                 # Documentação geral (anterior)
    ├── EXEMPLOS.md               # Exemplos de uso
    └── ESTRUTURA_COMPLETA.md     # Estrutura detalhada
```

---

## 🎯 Como Usar

### Importando Dados

Todos os dados podem ser importados a partir do **index centralizado**:

```typescript
// Importar do index principal
import { 
  assistenciaEstudantilData,
  bibliotecaUfcData,
  bolsasIniciacaoCientificaData,
  coordenacaoMedicinaData
} from '@/data';
```

Ou diretamente da pasta específica:

```typescript
// Importar diretamente da pasta
import { assistenciaEstudantilData } from '@/data/assistencia/assistenciaData';
import { bolsasIniciacaoCientificaData } from '@/data/bolsas/bolsasData';
```

---

## 📦 Categorias de Dados

### 1️⃣ **Assistência** (`assistencia/`)
Dados sobre assistência estudantil, psicológica e acessibilidade.

**Exports:**
- `assistenciaEstudantilData`
- `assistenciaPsicologicaData`
- `acessibilidadeData`

### 2️⃣ **Bibliotecas** (`bibliotecas/`)
Informações sobre bibliotecas do campus.

**Exports:**
- `bibliotecaUfcData`
- `bibliotecaMedicinaData`

### 3️⃣ **Bolsas** (`bolsas/`)
Dados sobre bolsas, auxílios e programas de financiamento.

**Exports:**
- `bolsasIniciacaoCientificaData`
- `pibicData`
- `paipData`
- `pidData`
- `bolsasExtensaoData`
- `auxiliosData`
- `editaisBolsasData`
- `internacionalizacaoData`

### 4️⃣ **Carteirinhas** (`carteirinhas/`)
Informações sobre carteirinhas estudantis.

**Exports:**
- `carteiraEstudantilData`
- `carteiraRuData`
- `idJovemData`

### 5️⃣ **Cursos** (`cursos/`)
Dados sobre cursos, coordenações e grades curriculares.

**Exports:**
- `cursosData.ts`: Coordenações dos 8 cursos
- `grades/`: Grades curriculares de cada curso

### 6️⃣ **Formar** (`formar/`)
Informações sobre processos acadêmicos (matrícula, notas, etc).

**Exports:**
- `matriculaData`
- `notasData`
- `faltasData`
- `trancamentoData`
- `atividadesComplementaresData`

### 7️⃣ **Links Úteis** (`links-uteis/`)
Links e recursos úteis para estudantes.

**Exports:**
- `regimentosData`
- `linksUteisData`
- `rssData`
- Types: `LinkUtil`, `LinksUteisContent`

### 8️⃣ **Transportes** (`transportes/`)
Dados sobre transportes e mobilidade.

**Exports:**
- `vltData`
- `passeLivreData`
- `passeLivreSobralData`
- `onibusIntracampusData`
- `taxiData`

### 9️⃣ **Mapa** (`mapa/`)
Dados do mapa interativo do campus.

**Exports:**
- GeoJSON do bloco de engenharia
- Dados de geolocalização
- Configurações do mapa

---

## ✅ Benefícios da Nova Estrutura

### 1. **Organização**
- ✅ Dados agrupados por categoria
- ✅ Fácil localizar arquivos
- ✅ Estrutura lógica e intuitiva

### 2. **Escalabilidade**
- ✅ Fácil adicionar novos dados
- ✅ Cada categoria em sua pasta
- ✅ Suporta crescimento do projeto

### 3. **Manutenção**
- ✅ Mudanças isoladas por categoria
- ✅ Imports consistentes via index
- ✅ Documentação centralizada

### 4. **Clareza**
- ✅ Estrutura de pastas espelha funcionalidades do app
- ✅ Novos desenvolvedores entendem facilmente
- ✅ Separação clara de responsabilidades

---

## 🔄 Padrão de Dados

Todos os dados seguem o padrão `CampusData<T>`:

```typescript
import { CampusData } from '@/types/contentData';

export const meusDados: CampusData<MeuTipo> = {
  sobral: {
    // dados do campus Sobral
  },
  russas: {
    // dados do campus Russas
  }
};
```

---

## 📝 Adicionando Novos Dados

### Passo 1: Criar o arquivo na pasta apropriada
```typescript
// src/data/nova-categoria/novaData.ts
import { CampusData, PageContent } from '@/types/contentData';

export const novaData: CampusData<PageContent> = {
  sobral: { /* ... */ },
  russas: { /* ... */ }
};
```

### Passo 2: Exportar no index principal
```typescript
// src/data/index.ts
export {
  novaData
} from './nova-categoria/novaData';
```

### Passo 3: Usar no componente
```typescript
import { useCampus } from '@/contexts/CampusContext';
import { novaData } from '@/data';

const MeuComponente = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(novaData);
  
  return <ContentPage content={content} />;
};
```

---

## 📚 Documentação

Consulte a pasta `docs/` para:
- **README.md**: Documentação geral (versão anterior)
- **EXEMPLOS.md**: Exemplos práticos de uso
- **ESTRUTURA_COMPLETA.md**: Detalhes da estrutura de dados

---

## 🚀 Migração Concluída

Esta estrutura foi criada como parte da **migração completa do sistema de dados**:

✅ Todos os dados organizados por categoria  
✅ Index centralizado atualizado  
✅ Imports funcionando corretamente  
✅ Zero erros de lint  
✅ Documentação atualizada  

**Data da reorganização:** Outubro 2024  
**Status:** ✅ Completo e testado

