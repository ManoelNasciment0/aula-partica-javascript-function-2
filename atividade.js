var sabeNotas = function (nota1, nota2) {

    var media = (nota1 + nota2) / 2

    if (media >= 7) {
        console.log("Aprovado!")
    }
    else if (media >= 5 && media < 7) {
        console.log("Recuperação")
    }
    else
        console.log("Reprovado!")
}

sabeNotas(8, 4)