# 🗺️ Dados do Mapa Acessível

Esta pasta contém as configurações para o Mapa Acessível de cada campus.

## 📋 Estrutura

```
mapa/
├── mapaData.ts    # Configurações do mapa por campus
└── README.md      # Esta documentação
```

## 🎯 Como Funciona

O Mapa Acessível é integrado via **iframe**, mantendo a autonomia do projeto original e facilitando sua expansão. Cada campus pode ter seu próprio link de mapa.

### Mapa Disponível
Quando um campus possui configuração de mapa, o iframe é exibido com o mapa interativo.

### Mapa Indisponível
Quando um campus não possui configuração, é exibida uma mensagem amigável informando que o mapa ainda não está disponível.

## ➕ Como Adicionar Mapa de um Novo Campus

### Passo 1: Obter a URL do Mapa
O projeto do Mapa Acessível deve estar hospedado e acessível via URL (ex: GitHub Pages, Vercel, Netlify).

### Passo 2: Adicionar Configuração

Edite o arquivo `mapaData.ts` e adicione uma entrada para o novo campus:

```typescript
export const mapaData: CampusDataPartial<MapaData> = {
  sobral: {
    titulo: "Mapa Acessível da UFC",
    subtitulo: "Campus Sobral",
    iframeUrl: "https://lincolngondin.github.io/mapaUFC/",
    descricao: "Visualize pontos de acessibilidade e navegue pelo campus"
  },
  // Novo campus aqui
  russas: {
    titulo: "Mapa Acessível - Campus Russas",
    subtitulo: "Campus Russas",
    iframeUrl: "https://seu-link-do-mapa-russas.com",
    descricao: "Navegue pelo campus e encontre pontos acessíveis"
  }
};
```

### Passo 3: Testar

1. Selecione o campus adicionado no seletor de campus
2. Acesse o menu "Mapa Acessível"
3. Verifique se o mapa é carregado corretamente

**Pronto!** Não é necessário modificar nenhum outro arquivo. O sistema detecta automaticamente a disponibilidade do mapa.

## 🏗️ Estrutura dos Dados

```typescript
interface MapaData {
  titulo: string;        // Título exibido no topo do mapa
  subtitulo?: string;    // Subtítulo opcional (ex: nome do campus)
  iframeUrl: string;     // URL do iframe do mapa
  descricao?: string;    // Descrição opcional
}
```

## ✅ Vantagens desta Abordagem

### 1. Autonomia do Projeto
- Cada mapa pode ser desenvolvido e mantido independentemente
- Sem necessidade de migrar código ou dados
- Atualizações no mapa não afetam a aplicação principal

### 2. Escalabilidade
- Adicionar novo campus: apenas 1 arquivo editado
- Sem dependências extras
- Sem reconstrução de componentes

### 3. Flexibilidade
- Cada campus pode ter seu próprio estilo de mapa
- Diferentes tecnologias de mapeamento podem ser usadas
- Fácil substituir ou atualizar links

### 4. Manutenibilidade
- Configuração centralizada
- Documentação clara
- Padrão consistente

## 🔄 Fluxo de Funcionamento

```
Usuário seleciona campus
         ↓
MapaPage verifica mapaData[campus]
         ↓
     Tem dados?
    /          \
  SIM          NÃO
   ↓            ↓
Exibe       Exibe
iframe      MapaIndisponivel
```

## 📝 Exemplos de URLs Válidas

- GitHub Pages: `https://usuario.github.io/projeto-mapa/`
- Vercel: `https://meu-mapa.vercel.app/`
- Netlify: `https://meu-mapa.netlify.app/`
- Domínio próprio: `https://mapa.universidade.edu.br/`

## ⚠️ Requisitos

Para que o mapa funcione corretamente via iframe:

1. **HTTPS**: A URL deve usar HTTPS
2. **CORS**: O site deve permitir ser embutido em iframe
3. **Responsivo**: O mapa deve adaptar-se ao tamanho do iframe
4. **Acessível**: Recomenda-se seguir padrões de acessibilidade (WCAG)

## 🚀 Projeto Original

O Mapa Acessível do Campus Sobral foi desenvolvido como projeto independente e está disponível em:
- **URL**: https://lincolngondin.github.io/mapaUFC/
- **Repositório**: (adicionar link se disponível)

## 📞 Suporte

Para dúvidas sobre:
- **Integração do mapa**: Consulte este README
- **Desenvolvimento do mapa**: Entre em contato com a equipe do Mapa Acessível
- **Problemas técnicos**: Abra uma issue no repositório do projeto

