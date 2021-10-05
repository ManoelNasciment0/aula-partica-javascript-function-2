var maiorOuNao = (anoNascimento) => {
    anoAtual = new Date()

    idade = anoAtual.getFullYear() - anoNascimento

    if(idade < 18) {
        console.log("Menor de idade")
    }else
        console.log("Maior de idade")
}

maiorOuNao(2018)