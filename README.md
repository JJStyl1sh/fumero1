# Calculadora Frog

Projeto desenvolvido em *React Native* com o objetivo de criar uma calculadora funcional, intuitiva e com uma interface temática lúdica.

## Requisitos Funcionais:

* *RF01 - Operações Matemáticas Básicas:* O sistema deve permitir a realização de cálculos de adição (+), subtração (-), multiplicação (X) e divisão (÷).
* *RF02 - Entrada Numérica:* O usuário deve ser capaz de inserir números inteiros e decimais (utilizando o botão de ponto .).
* *RF03 - Exibição de Dados:* O visor deve apresentar duas informações simultaneamente: a expressão matemática em andamento (ex: 67 + 67) na parte superior e o resultado/entrada atual na parte inferior.
* *RF04 - Limpeza de Tela (C):* O botão "C" (Clear) deve limpar toda a operação atual, zerando o visor e o histórico.
* *RF05 - Limpeza de Entrada (CE):* O botão "CE" (Clear Entry) deve apagar apenas o último número ou operador digitado, sem perder o restante da conta.
* *RF06 - Cálculo Final (=):* O botão de igualdade deve processar a expressão matemática completa e exibir o resultado final no visor principal.
* *RF07 - Tratamento de Erros:* O sistema deve identificar e tratar operações inválidas, especificamente a *divisão por zero*, exibindo uma mensagem amigável (como "Erro") ao invés de quebrar o app.

## Requisitos Não Funcionais:

* *RNF01 - Tecnologia (Framework):* O aplicativo deve ser desenvolvido utilizando *React Native*, garantindo compatibilidade multiplataforma (Android e iOS).
* *RNF02 - Interface de Usuário (UI):* O design deve seguir fielmente o protótipo temático proposto, utilizando a paleta de cores verde, fundo cinza, botões arredondados e os elementos visuais do "sapo" (olhos, bochechas e patas).
* *RNF03 - Responsividade:* A disposição dos botões e do visor flexível deve se adaptar a diferentes tamanhos de telas de smartphones sem distorcer.
* *RNF04 - Desempenho e Feedback:* O cálculo deve ser instantâneo e os botões devem apresentar um feedback visual (como um leve escurecimento da cor ou opacidade) ao serem tocados (usando componentes como TouchableOpacity ou Pressable).
* *RNF05 - Precisão Matemática:* O aplicativo deve lidar corretamente com problemas clássicos de precisão de ponto flutuante em JavaScript (ex: evitar que 0.1 + 0.2 resulte em 0.30000000000000004).


## Prótotipo do FIGMA:

<img width="573" height="748" alt="image" src="https://github.com/user-attachments/assets/080cd5f4-17bd-47c1-80d8-466b3c621751" />
