// Substrings
someString.substring(indexStart, indexEnd); //sintaxe
//indexStart - a posição do primeiro caractere que se quer incluir
//indexEnd - a posição do primeiro caractere que se quer ignorar.
//a combinação de ambos retornará uma substring

const language = "JavaScript";
language.substring(1, 4); // "ava"

// Optional parameters
//o indexEnd é opcional, pode inserir o indexStart e o JS entenderá que o indexEnd será o mesmo do tamanho da string.
language.substring(4); // "Script"
//entende-se que o indexEnd é o tamanho da string (10 neste caso)

// Legacy note
// usava-se .substr, mas caiu em desuso.
