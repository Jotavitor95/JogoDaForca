import entradaDados from "readline-sync";
import listaDeFrutas from "./Dados/Dados.js";
import criarConta from "./Funcoes/Funcoes.js";
import acessos from "./Dados/Login.js";

import {
  validarLetraDigitada,
  verificarJogoGanho,
  verificarLetraPresenteNaPalavra,
  jogadasRestantes,
  atualizarPalavraOculta,
  exibirMensagemFimDeJogo,
  logar,
} from "./Funcoes/Funcoes.js";

let usuario = "admin";
let senha = "admin";

function jogarForca() {

  const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

  let primeiraLetra = palavraEscolhida[0];
  let underline = "_".repeat(palavraEscolhida.length - 1);
  let palavraOculta = primeiraLetra + underline

  let erros = 0;
  let statusJogo = 'andamento'

  console.log(`------------JOGO DA FORCA------------`);
  console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

  while (statusJogo === 'andamento') { 

    console.log(`\nFruta: ${palavraOculta}`);

    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    if (validarLetraDigitada(letraDigitada)) {
      if (verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)) {
        palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
        if (verificarJogoGanho(palavraOculta, palavraEscolhida)) {
          statusJogo = 'venceu'
        }
      } else {
        erros++

        const chances = jogadasRestantes(erros)

        if(chances > 0) { //
          console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
        } else {
          statusJogo = 'perdeu'
        };
      };
    } else {
      console.log("\nPor favor, digite uma letra válida.");
    };
  };

  exibirMensagemFimDeJogo(statusJogo, palavraEscolhida);

};

criarConta();
jogarForca();