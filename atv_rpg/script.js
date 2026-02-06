let nome = prompt("Digite o nome do seu personagem:");
let classe = prompt("Digite a classe do personagem (ex: Guerreiro, Mago, Arqueiro):");
let habilidade = prompt("Digite a principal habilidade do personagem:");

let frase = `O lendário ${classe} chamado ${nome} acaba de entrar na guilda usando sua técnica de ${habilidade}!`;

document.getElementById("mensagem").innerText = frase;
