function calcularMediaNotas(atletas) {
    atletas.forEach(function(atleta) {
        let notas = [...atleta.notas];
        
        let maiorNota = Math.max(...notas);
        let menorNota = Math.min(...notas);

        let notasValidas = [...notas];

        notasValidas.splice(notasValidas.indexOf(maiorNota), 1);
        notasValidas.splice(notasValidas.indexOf(menorNota), 1);

        let soma = notasValidas.reduce(function(total, nota){
            return total + nota;
        }, 0);

        let media = soma / notasValidas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notas.sort().join(", ")}`);
        console.log(`Média Válida: ${media}`);
        console.log("");
    });
}


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calcularMediaNotas(atletas);