// adiciona a array "Calculator" à array de apps
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
};

console.log(useCalculator(["Clock", "Twitter"]));
console.log(useCalculator(["Weather"]));