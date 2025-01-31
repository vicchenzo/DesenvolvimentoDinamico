/*
Blocos de código executados enquanto uma condição específica é verdadeira
Variavel que representa função do tempo
Pode ser 'rainy' (chuvoso), "sunny" (ensolarado) ou cloudy (nublado)
=== IGUALDADE ESTRITA
*/

let weatherForecast = 'rainy';
//Analagoia com a avida real: Decidindo se devemos levar um guarda-chuva

if (weatherForecast === 'rainy') {
    console.log("Levar Guarda chuva!")
} else {
    console.log("Não levar o guarda chuva!")
}

/*
Instruções Condicionais if-else:
if: A instrução será executada apenas se a condição específica for veradeira
Else: A instrução será executada apenas se a condição específica for falsa
*/

/*
 rainy = chuvoso
 sunny = ensolarado
 cloudy = nublado
*/

let weatherForecast = 'cloudy'; //forecast: previsão
//Analagoia com a avida real: Decidindo se devemos levar um guarda-chuva

if (weatherForecast === 'rainy') {
    console.log("Levar Guarda chuva!")
} else if(weatherForecast === "cloudy") { // else if = senão se
    console.log("Por segurança, levar o guarda chuva!")
} 
else { // senão
    console.log("Não levar o guarda chuva!")
}
