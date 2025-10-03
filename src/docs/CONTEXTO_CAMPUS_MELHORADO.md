# 🎓 Contexto de Campus - Melhorado e Escalável

## 🚀 O que mudou?

O `CampusContext` agora é mais inteligente e **entende automaticamente** a estrutura de dados por campus!

### Antes vs Depois

#### ❌ **Antes** (forma antiga)
```typescript
import { useCampus } from '../../contexts/CampusContext';
import { assistenciaEstudantilData } from '../../data/assistenciaData';
import { getContentForCampus } from '../../utils/contentHelpers';

const AssistenciaEstudantilPage = () => {
  const { campus } = useCampus();
  const content = getContentForCampus(assistenciaEstudantilData, campus);
  
  return <ContentPage content={content} />;
};
```

#### ✅ **Depois** (forma nova - mais simples!)
```typescript
import { useCampus } from '../../contexts/CampusContext';
import { assistenciaEstudantilData } from '../../data/assistenciaData';

const AssistenciaEstudantilPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(assistenciaEstudantilData);
  
  return <ContentPage content={content} />;
};
```

---

## 🎯 Novos Recursos

### 1️⃣ `getCampusData<T>(data)` 
**Busca automaticamente os dados do campus selecionado**

```typescript
const { getCampusData } = useCampus();

// Busca dados de assistência do campus atual
const assistencia = getCampusData(assistenciaEstudantilData);

// Busca dados de bolsas do campus atual  
const bolsas = getCampusData(bolsasIniciacaoCientificaData);

// Se não houver dados, retorna null
if (!assistencia) {
  return <ConteudoIndisponivel />;
}
```

### 2️⃣ `hasCampusData<T>(data, campus?)` 
**Verifica se um campus tem dados disponíveis**

```typescript
const { hasCampusData, campus } = useCampus();

// Verifica se o campus atual tem dados
const temDados = hasCampusData(carteiraRuData);

// Verifica se Russas tem dados disponíveis
const russasTemDados = hasCampusData(carteiraRuData, 'russas');

// Exemplo: mostrar aviso
if (!hasCampusData(carteiraRuData)) {
  return <Alert>Este serviço não está disponível em {campus}</Alert>;
}
```

### 3️⃣ `campusName` 
**Nome formatado do campus atual**

```typescript
const { campusName } = useCampus();

// Sobral → "Sobral"
// russas → "Russas"

return <Typography>Você está vendo dados do campus {campusName}</Typography>;
```

---

## 📚 Exemplos Práticos

### Exemplo 1: Página de Conteúdo Simples

```typescript
import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { assistenciaPsicologicaData } from '../../data/assistenciaData';

const AssistenciaPsicologicaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(assistenciaPsicologicaData);
  
  return <ContentPage content={content} />;
};
```

### Exemplo 2: Verificação de Disponibilidade

```typescript
import { useCampus } from '../../contexts/CampusContext';
import { carteiraRuData } from '../../data/carteirinhasData';

const CarteiraRuPage = () => {
  const { getCampusData, hasCampusData, campusName } = useCampus();
  
  // Verifica disponibilidade
  if (!hasCampusData(carteiraRuData)) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">
          O R.U não está disponível no campus {campusName}
        </Typography>
      </Box>
    );
  }
  
  // Busca dados
  const content = getCampusData(carteiraRuData);
  
  return <ContentPage content={content} />;
};
```

### Exemplo 3: Comparação entre Campus

```typescript
import { useCampus } from '../../contexts/CampusContext';
import { vltData } from '../../data/transportesData';

const VltPage = () => {
  const { getCampusData, hasCampusData, campusName } = useCampus();
  
  const sobralTemVLT = hasCampusData(vltData, 'sobral');
  const russasTemVLT = hasCampusData(vltData, 'russas');
  
  return (
    <Box>
      <Typography>
        VLT disponível em:
        {sobralTemVLT && ' Sobral'}
        {russasTemVLT && ' Russas'}
      </Typography>
      
      <ContentPage content={getCampusData(vltData)} />
    </Box>
  );
};
```

### Exemplo 4: Renderização Condicional

```typescript
import { useCampus } from '../../contexts/CampusContext';
import { bibliotecaUfcData, bibliotecaMedicinaData } from '../../data/bibliotecasData';

const BibliotecasPage = () => {
  const { getCampusData, campus } = useCampus();
  
  const bibliotecaUfc = getCampusData(bibliotecaUfcData);
  const bibliotecaMedicina = getCampusData(bibliotecaMedicinaData);
  
  return (
    <Box>
      {bibliotecaUfc && <ContentPage content={bibliotecaUfc} />}
      
      {/* Biblioteca de Medicina só em Sobral */}
      {campus === 'sobral' && bibliotecaMedicina && (
        <ContentPage content={bibliotecaMedicina} />
      )}
    </Box>
  );
};
```

---

## 🏗️ Como Funciona

O contexto agora:

1. **Lê automaticamente** os objetos de dados
2. **Identifica** que as chaves `sobral` e `russas` são os "objetos pais"
3. **Retorna** os dados do campus selecionado

### Estrutura de Dados Esperada

```typescript
// ✅ Correto - todos os campus têm dados
export const assistenciaData: CampusData<ConteudoComContato> = {
  sobral: {
    titulo: 'Assistência Estudantil',
    secoes: [...]
  },
  russas: {
    titulo: 'Assistência Estudantil',
    secoes: [...]
  }
};

// ✅ Correto - dados parciais (alguns campus não têm)
export const carteiraRuData: Partial<CampusData<ServicoContent>> = {
  sobral: {
    titulo: 'Carteira do R.U',
    secoes: [...]
  }
  // russas não tem R.U
};
```

---

## 🎨 Type Safety

O contexto é **100% type-safe** com TypeScript:

```typescript
// ✅ Tipos inferidos automaticamente
const { getCampusData } = useCampus();
const content = getCampusData(assistenciaEstudantilData);
// content: ConteudoComContato | null

// ✅ TypeScript sabe o tipo de retorno
const bolsas = getCampusData(bolsasIniciacaoCientificaData);
// bolsas: PageContent | null

// ✅ Funciona com tipos genéricos
interface MeusDados {
  nome: string;
  valor: number;
}

const meusDadosPorCampus: CampusData<MeusDados> = {
  sobral: { nome: 'Teste', valor: 100 },
  russas: { nome: 'Teste 2', valor: 200 }
};

const dados = getCampusData(meusDadosPorCampus);
// dados: MeusDados | null
```

---

## 🔄 Migração Gradual

Você **não precisa** migrar tudo de uma vez! As duas formas funcionam:

### ✅ Forma antiga (ainda funciona)
```typescript
import { getContentForCampus } from '../../utils/contentHelpers';

const { campus } = useCampus();
const content = getContentForCampus(data, campus);
```

### ✅ Forma nova (recomendada)
```typescript
const { getCampusData } = useCampus();
const content = getCampusData(data);
```

---

## 🎯 Benefícios

### 1. **Menos código**
- Não precisa importar `getContentForCampus`
- Não precisa passar `campus` como parâmetro

### 2. **Mais legível**
- Código mais limpo e direto
- Intenção clara: "pegar dados do campus"

### 3. **Escalável**
- Fácil adicionar novos campus
- Fácil adicionar novas funcionalidades ao contexto

### 4. **Type-safe**
- TypeScript garante tipos corretos
- Autocomplete no IDE

### 5. **Centralizado**
- Toda lógica de campus em um lugar
- Fácil de testar e manter

---

## 📝 Checklist para Novos Componentes

Ao criar um novo componente que usa dados de campus:

- [ ] Importe `useCampus` do contexto
- [ ] Use `getCampusData()` para buscar dados
- [ ] Use `hasCampusData()` se precisar verificar disponibilidade
- [ ] Use `campusName` se precisar mostrar o nome do campus
- [ ] Trate o caso de `null` (quando campus não tem dados)

---

## 🚀 Próximos Passos (Futuro)

Possíveis melhorias futuras:

### 1. Cache de dados
```typescript
const { getCampusData } = useCampus({ cache: true });
```

### 2. Fallback entre campus
```typescript
// Se campus atual não tiver dados, busca de outro
const { getCampusData } = useCampus();
const content = getCampusData(data, { fallback: 'sobral' });
```

### 3. Hooks especializados
```typescript
// Hook específico para conteúdo
const content = useCampusContent(assistenciaEstudantilData);

// Hook com loading state
const { data, loading } = useCampusData(async () => fetchData());
```

---

## ✨ Conclusão

O `CampusContext` agora é:

✅ **Inteligente** - Entende a estrutura de dados  
✅ **Escalável** - Fácil adicionar campus/funcionalidades  
✅ **Type-safe** - 100% TypeScript  
✅ **Simples** - Menos código, mais clareza  
✅ **Flexível** - Suporta dados completos e parciais  

**Use em todos os novos componentes!** 🎉

