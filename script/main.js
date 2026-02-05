//01) Adicionando um trocador de imagens
const myImage = document.querySelector("img");//armazenando uma referência ao elemento <img> em uma variável chamada myImage

myImage.onclick = () => {//definindo a propriedade onclick do elemento myImage para uma função anônima. Isso significa que toda vez que a imagem for clicada, essa função será executada.
  const mySrc = myImage.getAttribute("src");//dentro da função, usamos getAttribute() para obter o valor do atributo src da imagem e armazená-lo na variável mySrc.
  if (mySrc === "imagens/firefox1.png") { //em seguida, usamos uma declaração if para verificar se o valor de mySrc é igual ao caminho da imagem original (imagens/firefox1.png).
    myImage.setAttribute("src", "imagens/firefox2.png");//se for, usamos setAttribute() para alterar o valor do atributo src para o caminho da segunda imagem (imagens/firefox2.png), o que fará com que a outra imagem seja carregada no elemento <img>.
  } else {//se o valor de mySrc não for igual ao caminho da imagem original, o que significa que a imagem já foi alterada para a segunda imagem, então...
    myImage.setAttribute("src", "imagens/firefox1.png"); //...usamos setAttribute() novamente para alterar o valor do atributo src de volta para o caminho da imagem original, restaurando a imagem original.
  }
};

/*Isso é o que aconteceu. Você armazenou uma referência ao seu elemento <img> na variável myImage.
Em seguida, você tornou a propriedade do manipulador de 
eventos onclick desta variável igual a uma função sem nome (uma função "anônima").
Portanto, toda vez que esse elemento for clicado:
O código recupera o valor do atributo src da imagem.
O código usa uma condicional para verificar se o valor src é igual ao caminho da imagem original:
Se for, o código altera o valor src para o caminho da segunda imagem, forçando a outra imagem
a ser carregada dentro do elemento <img>.
Se não for (o que significa que já deve ter mudado),
o valor src volta para o caminho da imagem original, para o estado original.
*/


//2) Adicionando uma mensagem de boas-vindas personalizada
const myButton = document.querySelector("button"); //armazenando uma referência ao elemento <button> em uma variável chamada myButton
const myHeading = document.querySelector("h1");//armazenando uma referência ao elemento <h1> em uma variável chamada myHeading

function setUserName() { //definindo uma função chamada setUserName()
  const myName = prompt("Por favor, digite seu nome.");//dentro da função, usamos a função prompt() para solicitar que o usuário insira seu nome. O valor inserido é armazenado na variável myName.
  localStorage.setItem("name", myName);//em seguida, usamos localStorage.setItem() para armazenar o nome do usuário no armazenamento local do navegador. O nome é armazenado com a chave "name".
  myHeading.textContent = `Mozilla é legal, ${myName}`;//por fim, definimos o textContent do elemento <h1> para uma string personalizada que inclui o nome do usuário usando template literals.
}
/*A função setUserName() contém uma função prompt(), que exibe uma caixa de diálogo,
semelhante a alert(). Esta função prompt() faz mais do que alert(), solicitando ao usuário
que insira dados e armazenando-os em uma variável após o usuário clicar em OK.
Neste caso, estamos solicitando que o usuário insira um nome. Em seguida, 
o código chama uma API localStorage, que nos permite armazenar dados no navegador 
e recuperá-los posteriormente. Usamos a função setItem() do localStorage para criar
e armazenar um item de dados chamado 'name', configurando seu valor para a variável
myName que contém a entrada do usuário para o nome. Por fim, definimos o textContent
do cabeçalho como uma string, mais o nome do usuário recém-armazenado.
*/


/*03) Poderíamos chamar isso de código de inicialização, 
pois ele estrutura o aplicativo quando ele é carregado pela primeira vez.
*/
  if (!localStorage.getItem("name")) {
    setUserName();//chama a função para solicitar o nome do usuário
  } else {
    const storedName = localStorage.getItem("name");//recupera o nome armazenado
    myHeading.textContent = `Mozilla é legal, ${storedName}`;//atualiza o texto do cabeçalho para incluir o nome armazenado
  }
/*Esta primeira linha deste bloco utiliza o operador de negação (NOT lógico, representado pelo !)
para verificar se os dados nome existem. Caso contrário, a função setUserName()
é executada para criá-lo. Se existir (ou seja, o usuário definiu um nome de
usuário durante uma visita anterior), recuperamos o nome armazenado usando getItem()
e definimos o textContent do cabeçalho como uma string, mais o nome do usuário, conforme fez dentro de setUserName().
*/

  myButton.onclick = () => {
    setUserName();//definindo a propriedade onclick do elemento myButton para uma função anônima que chama a função setUserName() quando o botão é clicado. Isso permite que o usuário altere seu nome de usuário a qualquer momento clicando no botão.
  }

//04) Um nome de usuário nulo?
/*O código acima não impede que o usuário insira um nome de usuário vazio.
Se o usuário clicar em OK sem inserir um nome, o valor do nome de usuário será uma string vazia ("").
Isso pode ser corrigido adicionando uma verificação para garantir que o nome de usuário não seja vazio antes de armazená-lo e usá-lo.
*/
  function setUserName() {
    const myName = prompt("Por favor, digite seu nome.");
    if (!myName) { //verificando se myName é falso (o que inclui uma string vazia)
      setUserName(); //se for falso, chamamos setUserName() novamente para solicitar que o usuário insira um nome válido
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;//se myName for válido, armazenamos o nome e atualizamos o cabeçalho como antes
    }
  }
  /*Em linguagem humana, isso significa: Se myName não tiver valor, execute setUserName()
  novamente desde o início. Se ele tiver um valor
  (se a declaração acima não for verdadeira), armazene o valor em localStorage e defina-o como o texto do título. 
   */





