const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

const valoresUnicos = (array) => {
    const mySet = new Set(meuArray);

    // Esta é uma técnica para converter um set em um array
    // chamada 'rest', que permite a conversão direta
    // de todo o conteúdo do set em um novo array
    return [...mySet]
}



console.log(valoresUnicos(meuArray));