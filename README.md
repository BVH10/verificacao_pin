# Verificação Pin
Programa pra verificar si o PIN inserido é correto, caso não dar dicas si o número for menor, maior, muito menor ou muito maior.

## Avaliação desenvolvida:
Este programa cria um sistema simples para verificação de PIN em JavaScript. Ele solicita que o usuário insira um número de quatro dígitos e depois compara com um número correto predefinido. Caso o número inserido seja igual ao número correto, uma mensagem de parabéns é exibida. Caso contrário, dicas são fornecidas indicando se o próximo valor deve ser maior, menor, muito menor ou muito maior que o número informado. Foram adicionados comentários explicando as diferentes partes do código e a lógica por trás de cada verificação.


## Dificuldades conhecidas:
Durante o desenvolvimento deste programa, podem ocorrer algumas dificuldades, como:
- Verificar se o número inserido possui quatro dígitos.
- Gerar números aleatórios para comparação, caso não seja um número fixo.
- Fazer com que o programa seja executado corretamente em diferentes ambientes.

## Utilização do Sistema:

Para utilizar o sistema de verificação de PIN, siga as instruções abaixo:

 - Execute o sistema em um ambiente de desenvolvimento JavaScript

1. Certifique-se de ter o Node.js instalado em seu computador para executar o sistema.

 - No meu caso utilizei o Termux, para instalar o Node.js:
  
    - Actualiza os pacotes instalados:
      
       apt update
    - Instale o node.js:
      
       apt install nodejs
    - Teste si esta á funcionar:
      
       nodejs

3. Faça o download do código fonte do programa em um diretório de sua preferência.
 - git clone 

5. Abra o terminal ou prompt de comando e navegue até o diretório onde o código fonte está localizado.

6. Execute o seguinte comando para instalar as dependências necessárias:

  - npm install

5. Após a instalação das dependências, execute o sistema utilizando o comando:

  - npm start

6. Será exibida uma mensagem solicitando que você insira um número de quatro dígitos. Digite o número desejado e pressione Enter.

7. O sistema verificará se o número inserido é igual ao número correto.
   - Se for igual, uma mensagem de "Parabéns! Você acertou o PIN!" será exibida.
   - Caso contrário, o sistema fornecerá dicas indicando se o próximo valor deve ser maior, menor, muito maior ou muito menor que o número informado.

8. Continue executando o sistema e fornecendo valores até acertar o PIN correto.

## Código Fonte:

O código fonte completo do sistema de verificação de PIN está disponível no repositório.
Você pode acessá-lo através do seguinte link:
 - https://github.com/BVH10/verificacao_pin/

## LICENSE
MIT License

Copyright (c) 2024 BVH10
