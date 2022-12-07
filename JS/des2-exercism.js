// A namorada de Lucian está voltando para casa e ele não preparou o jantar de aniversário!
// Neste exercício, você escreverá algum código para ajudar Lucian a preparar uma deliciosa lasanha de seu livro de receitas favorito.
// Você tem quatro tarefas relacionadas ao tempo gasto para cozinhar a lasanha.
// 1. Defina o tempo esperado de forno em minutos: Defina a EXPECTED_MINUTES_IN_OVENconstante que representa quantos minutos a lasanha deve ficar no forno. Deve ser exportado. De acordo com o livro de culinária, o tempo de forno esperado em minutos é 40.
// 2. Calcule o tempo restante do forno em minutos: Implemente a remainingMinutesInOvenfunção que toma como parâmetro os minutos reais que a lasanha está no forno e retorna quantos minutos a lasanha ainda tem para ficar no forno, com base no tempo de forno esperado em minutos da tarefa anterior.
// 3. Calcule o tempo de preparo em minutos: Implemente a função que leva como parâmetropreparationTimeInMinutes o número de camadas que você adicionou à lasanha e retorna quantos minutos você gastou preparando a lasanha, assumindo que cada camada leva 2 minutos para ser preparada.
// 4. Calcule o tempo total de trabalho em minutos: Implemente a totalTimeInMinutesfunção que recebe dois parâmetros : o numberOfLayersparâmetro é o número de camadas que você adicionou à lasanha e o actualMinutesInOvenparâmetro é o número de minutos que a lasanha está no forno. A função deve retornar quantos minutos no total você trabalhou no cozimento da lasanha, que é a soma do tempo de preparo em minutos e o tempo em minutos que a lasanha passou no forno no momento.

//tempo esperado de forno em minutos
const expected_minutes_in_oven = 40

//tempo restante do forno
function remainingMinutesInOven(actualMinutesInOven){
    return expected_minutes_in_oven - actualMinutesInOven
}
remainingMinutesInOven()

//tempo de preparo em minutos
function preparationTimeInMinutes(numberOfLayers){
    const PREPARATION_MINUTES_PER_LAYER = 2
    return numberOfLayers*PREPARATION_MINUTES_PER_LAYER    
}
preparationTimeInMinutes()

//tempo total de trabalho
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    return preparationTimeInMinutes(numberOfLayers) + expected_minutes_in_oven - remainingMinutesInOven(actualMinutesInOven)
}

console.log(totalTimeInMinutes(4, 15))
