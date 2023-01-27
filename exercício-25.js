// retorna o último elemento da array como parâmetro
function getLastApp(apps) {
    return apps.at(-1);
};

console.log(getLastApp(["Chrome", "Clock", "Twitter"]));
console.log(getLastApp(["Safari", "Contacts"]));