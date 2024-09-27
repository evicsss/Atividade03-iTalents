# Quiz Interativo

**GitHub:** [Projeto Quiz Interativo](https://github.com/evicsss/Atividade03-iTalents)

## Estrutura do Projeto
O projeto consiste nos seguintes componentes principais:

### 1. App
Componente raiz que gerencia o estado do quiz e a lógica de navegação entre perguntas.

### 2. QuestionComponent
Exibe a pergunta atual e as opções de resposta, recebendo props para a pergunta e uma função para manipular as respostas.

### 3. ResultComponent
Mostra a pontuação final e um feedback baseado no desempenho do usuário, recebendo props com a pontuação e o número total de perguntas.

### 4. QuizData
Um arquivo que contém um array de objetos, cada um representando uma pergunta com opções.

## Comunicação entre os Componentes
A comunicação entre os componentes é feita através de props:
- **App** passa a pergunta atual e a função `handleAnswer` para o `QuestionComponent`.
- O `QuestionComponent` chama `handleAnswer` ao selecionar uma resposta, informando se a resposta está correta ou não.
- Quando todas as perguntas são respondidas, o **App** passa a pontuação acumulada e o total de perguntas para o `ResultComponent`.

## Uso de Props e Children
### Props
- Props são usadas para passar dados de um componente pai para um componente filho.
- Exemplo: no **App**, usamos `setCurrentQuestion` e `score` como props para o `QuestionComponent`.

### Children
- Utilizei o `children` dentro do `QuestionComponent` para incluir uma mensagem extra, "Pense bem antes de responder!". Isso permite adicionar conteúdo de forma dinâmica e flexível, enriquecendo a interação.

## Funcionamento do Formulário
O processo de seleção de respostas funciona como um formulário:
- Quando o usuário clica em uma opção, a função `handleAnswer` é chamada, verificando se a resposta está correta e avançando para a próxima pergunta ou exibindo os resultados.

## Funcionamento da Listagem
A listagem de perguntas é gerenciada pelo `QuizData`. Cada pergunta é apresentada em sequência, e ao clicar na resposta, o estado do componente é atualizado para refletir a próxima pergunta. A listagem das opções é feita através de um loop que gera botões para cada resposta.

## Como Rodar a Aplicação
Para rodar a aplicação, siga os passos abaixo:

1. Clone o repositório ou crie um novo projeto React:
   ```bash
   npx create-react-app quiz-app
   cd quiz-app
