## 📄 Referência Rápida de HTML, CSS e JavaScript

### 🚀 Parâmetros HTML

- **`id`**: Identifica um elemento para ser manipulado via CSS ou JavaScript.
- **`onClick`**: Chama uma função ao clicar em um elemento.

### 🎨 Seletores CSS

- **Seletor de ID:**
  ```css
  #nomeDoId {
    /* estilos aqui */
  }
  ```
  
- **Seletor de Classe:**
  ```css
  .nomeDaClasse {
    /* estilos aqui */
  }
  ```

- **Seletor de Imagens Filhas de uma Classe:**
  ```css
  .nomeDaClasse img {
    /* estilos aqui */
  }
  ```

### 🛠️ Métodos de Manipulação de DOM com JavaScript

- **`getElementById`**: Retorna o conteúdo do elemento com o ID especificado.
  ```javascript
  const elemento = document.getElementById('meuId');
  ```

- **`toFixed(dígitos)`**: Retorna um número em notação de pontos fixos.
  ```javascript
  let numero = 123.456;
  console.log(numero.toFixed(2)); // "123.46"
  ```

- **`appendChild()`**: Move um elemento para o final de outro elemento pai.
  ```javascript
  const lista = document.getElementById('lista');
  const novoItem = document.createElement('li');
  lista.appendChild(novoItem);
  ```

- **`innerHTML`**: Altera o conteúdo HTML de um elemento.
  ```javascript
  document.getElementById('meuId').innerHTML = '<p>Novo conteúdo!</p>';
  ```

- **`push()`**: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento.
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // [1, 2, 3, 4]
  ```

- **`find()`**: Encontra o primeiro elemento em um array que satisfaz uma condição.
  ```javascript
  const numeros = [5, 12, 8, 130, 44];
  const encontrado = numeros.find(num => num > 10);
  console.log(encontrado); // 12
  ```

---

📌 **Dica:** Use esses comandos para otimizar seu código e melhorar a legibilidade em projetos HTML, CSS e JavaScript.

