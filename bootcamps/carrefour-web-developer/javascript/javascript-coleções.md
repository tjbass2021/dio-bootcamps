# Coleções

## Coleção chaveada Map

Utilizando o método `Map()`, para criar um novo objeto Map, fazemos da seguinte maneira:

~~~javascript
const myMap = new Map()
~~~

Após isso, podemos adicionar, ler e deletar um objeto utilizando algumas funções de Map:

1. Adicionando elementos:

~~~javascript
myMap.set('fruit', 'apple');

// retorna: Map(1) {'fruit' => 'apple'}

//Após criarmos o nosso objeto myMap() com Map(), adicionamos a ele o conjunto de chave e valor entre aspas, respectivamente 'fruit' e 'apple'.
~~~

2. Para chear o valor desse objeto, utiliza-se o método `.get()`:

~~~javascript
myMap.get('fruit');
// retorna: 'apple'
~~~

3. Para deletar um valor, utiliza-se o método `.delete()` que recebe como parâmetro a sua chave:

~~~javascript
myMap.delete('fruit');
// retorna 'true'
// deletando o conteúdo da chave junto come ela
~~~

### Map vs Objeto

- Maps podem ter chaves de qualquer tipo (string ou number, por exemplo);
- Maps possuem propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores têm o mesmo tipo.

---

## Coleção chaveada Set

- São estruturas que armazenam valores únicos

Ex:

~~~javascript
const myArray = [1, 1, 2, 2, 3, 4, 5, 1, 2];

const mySet = new Set(myArray);

console.log(mySet);

// Set(5) { 1, 2, 3, 4, 5 }
~~~

Acima criamos um `array` com números de 1 a 5 onde alguns se repetem. Quando criamos o nosso `set` utilizando `Set()` colocando como parâmetro o nosso `array` anteriormente criado, `myArray`, perceba que a coleção criada não possui os valores repetidos presentes em `myArray`, isso porque os sets só armazenam valores únicos.

### Adicionando, consultando e deletando com métodos de `Set`.

~~~javascript
const mySet = new Set();
// Acima criamos um set vazio

// Adicionando valores ao set criado:
mySet.add(1);
mySet.add(5);

// Consultando se um determinado valor existe no set:
mySet.has(1);
// retorna 'true' neste caso, pois 1 existe em mySet

// Deletando um valor do set
mySet.delete(5);
~~~

### Diferenças entre sets e arrays

- Possui valores únicos;
- Para checar seu tamanho, utiliza-se `size`, ao invés de `length`;
- Não possui os métodos `map`, `filter`, `reduce`, etc. que são métodos de array.
