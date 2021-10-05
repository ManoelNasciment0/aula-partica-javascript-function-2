var tabuada3 = function(){
    var resultado = []
    for(var i = 1; i <=10; i++){
      resultado.push(i * 3)
    }
    return resultado.join(" + ")
  }
  console.log(tabuada3())