// Importa o módulo readline para solicitar entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pin;
let numeroCorreto = 6041;
let devesermaior = numeroCorreto - 100;
let devesermenor = numeroCorreto + 100;

// Define uma função para verificar se o PIN inserido possui quatro dígitos
const verificarPin = () => {
  rl.question('Digite um número (PIN) de quatro dígitos:', (input) => {
    if (input.length !== 4) {
      console.log('O número deve possuir quatro dígitos!');
      verificarPin();
    } else {
      pin = input;

      // Verifica se o número inserido é igual ao número correto
      if (pin == numeroCorreto) {
        console.log("Parabéns! Você acertou o PIN!");
        rl.close();
      } else {
        // Verifica se o número inserido é menor, maior, muito menor ou muito maior que o número correto
        if (pin < numeroCorreto && pin >= devesermaior) {
          console.log("O próximo valor deve ser maior.");
        } else if (pin > numeroCorreto && pin <= devesermenor) {
          console.log("O próximo valor deve ser menor.");
        } else if (pin > numeroCorreto && pin <= 9999) {
          console.log("O próximo valor deve ser muito menor.");
        } else {
          console.log("O próximo valor deve ser muito maior.");
        }
        verificarPin();
      }
    }
  });
};

verificarPin();
