const temFome = prompt("Você está com fome? (sim/não)")
const temDinheiro = prompt("Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)")

if (temFome === "não" || temDinheiro === "não") {
    console.log ("Hoje a janta será em casa")
}else if (temDinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje a janta será no restaurante")
}else{
    console.log("Peça delivery")
}
