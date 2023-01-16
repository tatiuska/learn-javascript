//Strings I
"This is a string",
'This is another string!'

//String property
"Nice!".length; //não tem () porque é uma propriedade, um valor que já foi computado.

let text = "Hello World!";
text.length;

//Basic String methods
"BLUE".toLowerCase(); //usa o () porque é uma ação que está sendo executada.
"red".toUpperCase(); //retorna uma nova string com os caracteres em maiúsculas.

//Visualize a variable (or expression)
function sum(a, b) {
    console.log(a);
    console.log(a + b); //console.log não é substituto para o return.
    return a + b;
}

sum(1,3);