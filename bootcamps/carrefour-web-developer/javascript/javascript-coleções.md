# Coleções

## Objeto Map

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

## Objeto Set