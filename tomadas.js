let lines = gets().split("\n");

let line = lines.shift().split(' ');
let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(i=0;i < 4 ;i++){
  let transfor = parseInt(line[i])
  soma = soma + transfor
}
print(soma-3)

//código copiado da resolução do desafio na plataforma da DIO
