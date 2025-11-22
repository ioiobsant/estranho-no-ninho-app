# 🎓 Implementação: Sistema de Cursos por Campus

## 📋 Resumo

Esta documentação descreve a implementação do sistema de cursos dinâmico por campus, que permite que a lista de cursos e suas páginas sejam filtradas automaticamente conforme o campus selecionado pelo usuário.

---

## 🎯 Objetivos

1. **Lista de cursos dinâmica**: A página de cursos deve mostrar apenas os cursos disponíveis no campus selecionado
2. **Verificação de disponibilidade**: Páginas individuais de cursos devem verificar se o curso está disponível no campus atual
3. **Mensagens contextuais**: Exibir mensagens apropriadas quando um curso não está disponível no campus selecionado
4. **Seguir padrão arquitetural**: Usar o contexto de campus existente, seguindo o mesmo padrão usado em outras partes da aplicação

---

## 🏗️ Arquitetura da Implementação

### 1. Estrutura de Dados

#### Arquivo: `src/data/cursos/cursosData.ts`

Criamos uma estrutura de dados centralizada que organiza os cursos por campus:

```typescript
export interface Curso {
  title: string;
  path: string;
}

export const cursosData: CampusData<Curso[]> = {
  sobral: [
    { title: 'Ciências Econômicas', path: '/cursos/ciencias-economicas' },
    { title: 'Engenharia da Computação', path: '/cursos/engenharia-computacao' },
    // ... outros cursos
  ],
  russas: [] // Sem cursos no momento
};
```

**Características:**
- Usa o tipo `CampusData<T>` já existente na aplicação
- Cada campus tem um array de cursos disponíveis
- Fácil de manter e expandir

#### Função Helper

```typescript
export const isCourseAvailableInCampus = (
  coursePath: string, 
  campus: string
): boolean => {
  const cursos = cursosData[campus as keyof typeof cursosData];
  if (!cursos) return false;
  return cursos.some(curso => curso.path === coursePath);
};
```

**Função:**
- Verifica se um curso (identificado pelo path) está disponível em um campus específico
- Retorna `true` se o curso existe na lista do campus
- Retorna `false` caso contrário

---

### 2. Refatoração da Página de Cursos

#### Arquivo: `src/components/main/CoursesPage.tsx`

**Antes:**
```typescript
const courses = [
  { title: 'Ciências Econômicas', path: '/cursos/ciencias-economicas' },
  // ... hardcoded
];
```

**Depois:**
```typescript
const { campusName, campus } = useCampus();

const courses = useMemo(() => {
  return cursosData[campus] || null;
}, [campus]);
```

**Melhorias:**
- Usa o contexto de campus para buscar cursos dinamicamente
- Reage automaticamente quando o campus muda
- Exibe mensagem quando não há cursos disponíveis

---

### 3. Verificação de Disponibilidade nas Páginas de Cursos

#### 3.1. CourseMenuPage

**Arquivo:** `src/components/CourseMenuPage.tsx`

Adicionamos verificação antes de exibir o menu:

```typescript
const { campus, campusName } = useCampus();
const isAvailable = isCourseAvailableInCampus(baseRoute, campus);

if (!isAvailable) {
  return (
    // Mensagem de curso indisponível
  );
}
```

#### 3.2. Páginas de Coordenação

**Arquivos:** `src/components/cursos/*/Coordenacao*Page.tsx`

Todas as 8 páginas de coordenação foram atualizadas:

```typescript
const { getCampusData, campus, campusName } = useCampus();

const isAvailable = isCourseAvailableInCampus('/cursos/ciencias-economicas', campus);

if (!isAvailable) {
  return (
    <CoordenacaoPage 
      coordenacao={null}
      courseName="Ciências Econômicas"
      campusName={campusName}
    />
  );
}
```

#### 3.3. Páginas de Grade

**Arquivos:** `src/components/cursos/*/Grade*Page.tsx`

Todas as 8 páginas de grade foram atualizadas com o mesmo padrão.

#### 3.4. Componentes Base Atualizados

**CoordenacaoPage.tsx** e **GradePage.tsx** foram atualizados para aceitar props opcionais e exibir mensagens contextuais:

```typescript
interface CoordenacaoPageProps {
  coordenacao: CoordenacaoCurso | null;
  courseName?: string;
  campusName?: string;
}
```

---

## 📁 Arquivos Modificados

### Estrutura de Dados
- ✅ `src/data/cursos/cursosData.ts` - Adicionada estrutura de cursos por campus
- ✅ `src/data/index.ts` - Export de `cursosData` e `isCourseAvailableInCampus`

### Componentes Principais
- ✅ `src/components/main/CoursesPage.tsx` - Refatorado para usar contexto de campus
- ✅ `src/components/CourseMenuPage.tsx` - Adicionada verificação de disponibilidade
- ✅ `src/components/CoordenacaoPage.tsx` - Atualizado para mensagens contextuais
- ✅ `src/components/GradePage.tsx` - Atualizado para mensagens contextuais

### Páginas de Cursos (16 arquivos)
- ✅ 8 páginas de Coordenação
- ✅ 8 páginas de Grade

---

## 🔄 Fluxo de Funcionamento

### 1. Usuário seleciona campus no Header
```
Header → setCampus('russas') → CampusContext atualiza
```

### 2. CoursesPage reage à mudança
```
CampusContext muda → useMemo recalcula → cursosData[russas] → []
```

### 3. Usuário tenta acessar curso específico
```
/cursos/ciencias-economicas → CourseMenuPage
→ isCourseAvailableInCampus('/cursos/ciencias-economicas', 'russas')
→ false → Exibe mensagem de indisponibilidade
```

### 4. Páginas filhas também verificam
```
/cursos/ciencias-economicas/coordenacao
→ CoordenacaoCienciasEconomicasPage
→ isCourseAvailableInCampus(...) → false
→ CoordenacaoPage com mensagem específica
```

---

## 🎨 Experiência do Usuário

### Cenário 1: Campus com cursos disponíveis
1. Usuário seleciona "Sobral"
2. Vê lista completa de cursos
3. Pode acessar qualquer curso normalmente
4. Todas as páginas (menu, coordenação, grade) funcionam

### Cenário 2: Campus sem cursos
1. Usuário seleciona "Russas"
2. Vê mensagem: "Não há cursos disponíveis no campus Russas no momento"
3. Se tentar acessar URL diretamente, vê: "Este curso não está disponível no campus Russas no momento"

---

## 🛠️ Como Adicionar Novos Cursos

### Passo 1: Adicionar curso na lista do campus

Edite `src/data/cursos/cursosData.ts`:

```typescript
export const cursosData: CampusData<Curso[]> = {
  sobral: [
    // ... cursos existentes
    { title: 'Novo Curso', path: '/cursos/novo-curso' },
  ],
  russas: [
    { title: 'Novo Curso', path: '/cursos/novo-curso' },
  ]
};
```

### Passo 2: Criar páginas do curso

Siga a estrutura existente:
- `src/components/cursos/NovoCurso/NovoCursoPage.tsx`
- `src/components/cursos/NovoCurso/CoordenacaoNovoCursoPage.tsx`
- `src/components/cursos/NovoCurso/GradeNovoCursoPage.tsx`

### Passo 3: Adicionar rotas

Em `src/routes.tsx`:
```typescript
<Route path="/cursos/novo-curso" element={<NovoCursoPage />} />
<Route path="/cursos/novo-curso/coordenacao" element={<CoordenacaoNovoCursoPage />} />
<Route path="/cursos/novo-curso/grade" element={<GradeNovoCursoPage />} />
```

**Pronto!** O sistema automaticamente:
- ✅ Mostra o curso na lista quando o campus tiver o curso
- ✅ Verifica disponibilidade em todas as páginas
- ✅ Exibe mensagens apropriadas quando não disponível

---

## 🧪 Testes Manuais

### Teste 1: Lista de Cursos
1. Selecione campus "Sobral" → Deve mostrar 8 cursos
2. Selecione campus "Russas" → Deve mostrar mensagem de sem cursos

### Teste 2: Acesso Direto a Curso
1. Com campus "Russas" selecionado
2. Acesse `/cursos/ciencias-economicas`
3. Deve exibir: "Este curso não está disponível no campus Russas no momento"

### Teste 3: Páginas Filhas
1. Com campus "Russas" selecionado
2. Acesse `/cursos/ciencias-economicas/coordenacao`
3. Deve exibir mensagem de indisponibilidade

### Teste 4: Mudança de Campus
1. Acesse `/cursos/ciencias-economicas` com campus "Sobral"
2. Mude para campus "Russas"
3. A página deve atualizar e mostrar mensagem de indisponibilidade

---

## 📊 Estatísticas da Implementação

- **Arquivos modificados**: 22
- **Linhas adicionadas**: ~450
- **Linhas removidas**: ~400 (limpeza de código antigo)
- **Páginas atualizadas**: 16 (8 coordenação + 8 grade)
- **Funções helper criadas**: 1 (`isCourseAvailableInCampus`)

---

## ✅ Benefícios

1. **Escalável**: Fácil adicionar novos campus e cursos
2. **Consistente**: Segue o padrão arquitetural existente
3. **Type-safe**: TypeScript garante tipos corretos
4. **Reativo**: Atualiza automaticamente quando campus muda
5. **User-friendly**: Mensagens claras quando curso não disponível

---

## 🔮 Melhorias Futuras (Opcional)

1. **Cache de verificação**: Otimizar múltiplas verificações
2. **Redirecionamento automático**: Redirecionar para campus que tem o curso
3. **Sugestões**: Sugerir cursos similares quando não disponível
4. **Histórico**: Manter histórico de campus visitado

---

## 📝 Notas Técnicas

- Usa `useMemo` para otimizar recálculos
- Verificação é feita em tempo de renderização
- Mensagens são contextuais (incluem nome do curso e campus)
- Compatível com sistema de rotas existente
- Não quebra funcionalidades existentes

---

**Data da Implementação**: Dezembro 2024  
**Autor**: Sistema de Refatoração  
**Versão**: 1.0.0

