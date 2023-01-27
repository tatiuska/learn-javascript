// função que retorna o primeiro elemento da array como um parâmetro
function getFirstApp(apps) {
    return apps.at(0);
};

console.log(getFirstApp(["Chrome", "Clock", "Twitter"]));
console.log(getFirstApp(["Clock", "Contacts"]));