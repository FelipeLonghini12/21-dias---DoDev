let valor 
let quantidade 
let opcao = prompt("Bem vindo ao posto Petrobras, o que deseja?" + " /n1 - abastecer com gasolina;  /n2 - abastecer com gasolina aditivada;  /n3 - abastecer com etanol;  /n4 - abastecer com gasolina podium;  /n5 - calibrar pneus")

switch(opcao){

    case "1":
        valor = Number(prompt("Insira o valor desejado para abastecer"))
        quantidade = valor / 5
            console.log("Foram abastecidos " + quantidade + " L de gasolina")
                break;

    case "2":
         valor = Number(prompt("Insira o valor desejado para abastecer"))
        quantidade = valor / 6
            console.log("Foram abastecidos " + quantidade + " L de gasolina")
                break;

    case "3":
         valor = Number(prompt("Insira o valor desejado para abastecer"))
        quantidade = valor / 4
            console.log("Foram abastecidos " + quantidade + " L de etanol")
                break;
    case "4":
         valor = Number(prompt("Insira o valor desejado para abastecer"))
        quantidade = valor / 8
            console.log("Foram abastecidos " + quantidade + " L de gasolina podium")
                break;

    
    default:
        console.log("Pneus calibrados com sucesso")       
            break;


}