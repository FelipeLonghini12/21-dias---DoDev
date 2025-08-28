let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
let opcao = Number(prompt("Digite a operação que deseja: " +  " /n1 = + ; /n2 = -; /n3 = /; n4 = *"))


switch (opcao){

    case 1:
        console.log(num1 +  " + " + num2 + " = " + (num1 + num2))
            break;
    
    case 2:
        console.log(num1 + " - " + num2 + " = "  + (num1 - num2))
            break;

    case 3: 
          console.log(num1 + " / " + num2 + " = "  + (num1 / num2))
            break;

    default: 
              console.log(num1 + " * " + num2 + " = "  + (num1 * num2))
            break;

}