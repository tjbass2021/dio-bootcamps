const nomeUsuarios = new Map();

nomeUsuarios.set('Thiago', 'Admin');
nomeUsuarios.set('Renata', 'User');
nomeUsuarios.set('Joelma', 'Admin');

console.log(nomeUsuarios);

const getAdmin = (map) => {
    let admins = []

    // Como estamos lidando com um map, no for podemos
    // adicionar como índice a especificação de manipulação
    // de chave e valor, por isso foi colocado 'key' e 'value'
    // dentro de colchetes.
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}

console.log(getAdmin(nomeUsuarios));