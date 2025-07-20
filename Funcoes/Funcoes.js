import entradaDados from "readline-sync";
import acessos from "../Dados/Login.js";

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
  let palavraOcultaArray = palavraOculta.split('')

  for (let i = 0; i < palavraEscolhida.length; i++) { 
    if (palavraEscolhida[i] === letraDigitada) { 
      palavraOcultaArray[i] = letraDigitada 
    };
  };

  return palavraOcultaArray.join('') 
};

function validarLetraDigitada(letraDigitada){
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
    return true
  } else {
    return false
  };
};

function verificarJogoGanho(palavraOculta, palavraEscolhida) {
  if(palavraOculta === palavraEscolhida) {
    return true
  } else {
    return false
  };
};


function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada){
  if(palavraEscolhida.includes(letraDigitada)){
    return true
  } else {
    return false
  };
};


function jogadasRestantes(erros) {
  return 4 - erros
};

function exibirMensagemFimDeJogo(statusJogo, palavraEscolhida) {
  if (statusJogo === 'venceu') {
    console.log("\n--------------PARABÉNS VOCÊ VENCEU!!-------------");
    console.log(`Palavra escolhida: ${palavraEscolhida}`);
  } else {
    console.log("\n--------------VOCÊ PERDEU!!-------------");
    console.log(`Palavra escolhida: ${palavraEscolhida}`);
  };
};


function criarConta() {
  let usuario =  entradaDados.question("Digite seu usuario: ");
  let senha = entradaDados.question("Digite sua senha: ")
  let confirmaSenha = entradaDados.question("Confirma sua senha: ")
  let msg = ""
  
  if(senha !== confirmaSenha){
    while(senha !== confirmaSenha) {
      msg = "Senhas diferentes!, por favor tente novamente."
      console.log(msg);
      senha = entradaDados.question("Digite sua senha: ")
      confirmaSenha = entradaDados.question("Confirma seu senha: ")
    };
  } else {
    msg = "Conta criada com sucesso!"
    acessos.push({usuario, senha});
    console.log(msg);
  };
};


function logar(){
  let msg = ""

  let usuario = ""
  let senha = ""

  for (let acesso of acessos){
    if (acesso.usuario === usuario && acesso.senha === senha)
      msg = "Login realizado com sucesso!";
      console.log(msg)
  };
};


export {
  validarLetraDigitada,
  verificarJogoGanho,
  verificarLetraPresenteNaPalavra,
  jogadasRestantes,
  atualizarPalavraOculta,
  exibirMensagemFimDeJogo,
  logar,
};


export default criarConta;