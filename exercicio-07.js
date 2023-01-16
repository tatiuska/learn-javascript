//Character access
const language = "JavaScript";

language[0]; //primeiro character
language[1]; //segundo character
language[2]; //terceiro character

console.log(language[5]);

//Combining it with length
// a variável const já foi declarada lá em cima.

language[language.length - 2]; // "p", porque é o segundo caracter do fim para o início de "JavaScipt"

// The .at(index) method - está autocompletando para .charAt().
// a variável const já foi declarada lá em cima.
language.charAt(0); // "J"
language.charAt(1); // "a"
language.charAt(-1);  // "t"
language.charAt(-2); // "p"